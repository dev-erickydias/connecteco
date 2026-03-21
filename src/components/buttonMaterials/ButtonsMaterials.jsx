"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import materials from "../../constants/materials.js";

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

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setSelectedEstado("");
    setSelectedCidade("");
    setSelectedBairro("");
  };

  return (
    <div className="w-full px-4 py-8">
      <p className="text-center text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Selecione sua localização e descubra os ecomontos mais próximos para descartar seus materiais de forma responsável e sustentável!
      </p>
      {isLargeScreen ? (
        <div className="flex flex-wrap gap-3 justify-center">
          {materials.map((material, index) => (
            <motion.button
              key={index}
              onClick={() => handleMaterialSelect(material)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedMaterial === material
                  ? 'bg-gradient-to-r from-eco-500 to-agro-leaf text-white shadow-lg'
                  : 'bg-white border-2 border-eco-500 text-eco-700 hover:border-eco-700'
              }`}
            >
              {material}
            </motion.button>
          ))}
        </div>
      ) : (
        <select
          value={selectedMaterial}
          onChange={handleChange}
          className="w-full md:w-64 mx-auto block px-4 py-3 border-2 border-eco-500 rounded-lg text-eco-700 font-semibold focus:outline-none focus:border-eco-700 focus:ring-2 focus:ring-eco-500 focus:ring-opacity-50"
        >
          {materials.map((material, index) => (
            <option key={index} value={material}>
              {material}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
