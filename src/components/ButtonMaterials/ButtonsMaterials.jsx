"use client";
import "./buttonsMaterials.css";
import { useState, useEffect } from 'react';
import CustomButton from "../CustomButton.jsx";
import materials from "../../constants/materials.js";

export function ButtonsMaterials() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize(); // Chamando imediatamente para configurar o estado inicial

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependência vazia para garantir que isso só seja executado uma vez após a montagem do componente

  const handleChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  return (
    <div className="materials">
      <p className="materials__title">Qual tipo de material você gostaria de descartar?</p>
      {isLargeScreen ? (
        <div className="materials__grid">
          {materials.map((material, index) => (
            <CustomButton
              key={index}
              className={`materials__button ${selectedMaterial === material ? 'materials__button--selected' : ''}`}
              onClick={() => setSelectedMaterial(material)}
            >
              {material}
            </CustomButton>
          ))}
        </div>
      ) : (          
          <select className="materials__select" value={selectedMaterial} onChange={handleChange}>
            {materials.map((material, index) => (
              <option className="materials__option" key={index} value={material}>
                {material}
              </option>
            ))}
          </select>
      )}
    </div>
  );
}

