"use client";

import { useState, useEffect, useRef } from 'react';
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

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);
  const [selectedMaterial, setSelectedMaterial] = useState("Todos");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (material) => {
    setSelectedMaterial(material);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (dropdownOpen) {
        dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      } else {
        dropdownRef.current.style.maxHeight = '0px';
      }
    }
  }, [dropdownOpen]);

  return (
    <div className="container mx-auto px-4 py-4 flex-col items-center">
      <h3 className="text-xs md:text-base py-4">Qual tipo de material você gostaria de descartar?</h3>
      {isMobile ? (
        <div className="relative w-full md:w-96 lg:w-1/2 xl:w-3/4">
          <button
            className="text-base rounded-lg bg-eucalyptus-500 text-white px-4 py-2 cursor-pointer border-none w-full text-left flex items-center justify-between"
            onClick={toggleDropdown}
          >
            {selectedMaterial}
            <span className={`transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
          <ul
            ref={dropdownRef}
            className={`absolute z-10 bg-eucalyptus-500 text-white h- rounded-lg mt-2 w-full overflow-hidden transition-max-height duration-300 ease-in-out ${dropdownOpen ? 'block' : 'hidden'}`}
            style={{ maxHeight: '0px' }}
          >
            {materials.map((material, index) => (
              <li
                key={index}
                className={`p-4 hover:bg-eucalyptus-400 cursor-pointer ${selectedMaterial === material ? 'bg-eucalyptus-600' : ''}`}
                onClick={() => handleSelect(material)}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {materials.map((material, index) => (
            <li
              key={index}
              className={`bg-eucalyptus-500 text-base p-4 text-center text-white rounded-lg cursor-pointer hover:bg-eucalyptus-500/80 transition-all duration-300 ease-in-out ${selectedMaterial === material ? 'ring-4 ring-eucalyptus-400' : ''}`}
              onClick={() => handleSelect(material)}
            >
              {material}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
