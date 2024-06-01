"use client";
import "./buttonsMaterials.css";
import { useEffect, useState } from 'react';
import CustomButton from "@/components/CustomButton.jsx";
import materials from "@/constants/materials.js";

export function ButtonsMaterials({ 
  selectedMaterial, 
  setSelectedMaterial,
  setSelectedEstado,
  setSelectedCidade,
  setSelectedBairro
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event) => {
    setSelectedMaterial(event.target.value);
    setSelectedEstado("");
    setSelectedCidade("");
    setSelectedBairro("");
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
              onClick={() => {
                setSelectedMaterial(material);
              }}
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
