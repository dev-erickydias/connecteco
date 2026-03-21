/**
 * Seeds all ecopontos from ecopontos.js into Supabase
 * Uses the Supabase JS client for efficient batch inserts
 *
 * Usage: node scripts/seed-via-supabase.js
 */
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://fwttbxyhxxbntynwjsdp.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_KEY) {
  console.error('Error: Set NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // Read and parse ecopontos.js
  const content = fs.readFileSync(path.join(__dirname, '..', 'ecopontos.js'), 'utf-8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']') + 1;
  const data = JSON.parse(content.slice(start, end));

  console.log(`Parsed ${data.length} ecopontos from ecopontos.js`);

  // Transform data to match table schema
  const records = data.map(ep => ({
    name: ep.local,
    state: ep.estado,
    city: ep.cidade,
    neighborhood: ep.bairro,
    full_address: ep.endereço,
    materials: ep.tipo_de_material ? ep.tipo_de_material.split(',').map(m => m.trim()) : [],
    weekday_hours: ep.horario_seg_sex,
    saturday_hours: ep.horario_sab,
    company_type: ep.tipo,
    is_active: true,
  }));

  // Insert in batches of 500
  const BATCH_SIZE = 500;
  let inserted = 0;
  let errors = 0;

  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    const { data: result, error } = await supabase
      .from('connecteco_ecopontos')
      .insert(batch);

    if (error) {
      console.error(`Batch ${Math.floor(i / BATCH_SIZE) + 1} error:`, error.message);
      errors++;
    } else {
      inserted += batch.length;
      console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: inserted ${batch.length} records (total: ${inserted}/${records.length})`);
    }
  }

  console.log(`\nDone! Inserted: ${inserted}, Errors: ${errors}`);

  // Verify count
  const { count } = await supabase
    .from('connecteco_ecopontos')
    .select('*', { count: 'exact', head: true });

  console.log(`Total records in database: ${count}`);
}

main().catch(console.error);
