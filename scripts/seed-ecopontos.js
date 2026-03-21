/**
 * Generates SQL INSERT statements from ecopontos.js
 * Outputs batch files to scripts/sql/ directory
 */
const fs = require('fs');
const path = require('path');

// Read and parse ecopontos.js
const content = fs.readFileSync(path.join(__dirname, '..', 'ecopontos.js'), 'utf-8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']') + 1;
const data = JSON.parse(content.slice(start, end));

console.log(`Total ecopontos: ${data.length}`);

// Escape single quotes for SQL
function esc(str) {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
}

// Generate batches
const BATCH_SIZE = 100;
const outputDir = path.join(__dirname, 'sql');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

let batchNum = 0;
for (let i = 0; i < data.length; i += BATCH_SIZE) {
  const batch = data.slice(i, i + BATCH_SIZE);
  const values = batch.map(ep => {
    const materials = ep.tipo_de_material
      ? "ARRAY[" + ep.tipo_de_material.split(',').map(m => esc(m.trim())).join(',') + "]::text[]"
      : "NULL";

    return `(${esc(ep.local)}, ${esc(ep.estado)}, ${esc(ep.cidade)}, ${esc(ep.bairro)}, ${esc(ep.endereço)}, ${materials}, ${esc(ep.horario_seg_sex)}, ${esc(ep.horario_sab)}, ${esc(ep.tipo)}, true)`;
  }).join(',\n');

  const sql = `INSERT INTO connecteco_ecopontos (name, state, city, neighborhood, full_address, materials, weekday_hours, saturday_hours, company_type, is_active) VALUES\n${values};`;

  fs.writeFileSync(path.join(outputDir, `batch_${String(batchNum).padStart(3, '0')}.sql`), sql);
  batchNum++;
}

console.log(`Generated ${batchNum} batch files in scripts/sql/`);
