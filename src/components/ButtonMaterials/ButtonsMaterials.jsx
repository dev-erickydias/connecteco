"use client";
import "./buttonsMaterials.css";
import { useState } from 'react';

export function ButtonsMaterials() {
  const materials = [
    "Todos",
    "Plásticos",
    "Papel",
    "Vidro",
    "Eletrônicos",
    "Metais",
    "Medicamentos",
    "Textil",
  ];

  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  const handleChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  return (
    <div className="materials">
      <p className="materials__title">Qual tipo de material você gostaria de descartar?</p>
      <select className="materials__select" value={selectedMaterial} onChange={handleChange}>
        {materials.map((material, index) => (
          <option className="materials__option" key={index} value={material}>
            {material}
          </option>
        ))}
      </select>
    </div>
  );
}
