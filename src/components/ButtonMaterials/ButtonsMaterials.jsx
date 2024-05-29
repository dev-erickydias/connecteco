import "./ButtonsMaterials.css"
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
        dropdownRef.current.classList.add('dropdown__list--open');
      } else {
        dropdownRef.current.classList.remove('dropdown__list--open');
      }
    }
  }, [dropdownOpen]);

  return (
    <div className="materials__container">
      <h3 className="materials__title">Qual tipo de material você gostaria de descartar?</h3>
      {isMobile ? (
        <div className="materials__dropdown">
          <button
            className="materials__dropdown-button"
            onClick={toggleDropdown}
          >
            {selectedMaterial}
            <span className={`icon ${dropdownOpen ? 'icon--open' : ''}`}>
              ▼
            </span>
          </button>
          <ul
            ref={dropdownRef}
            className="materials__dropdown-list"
          >
            {materials.map((material, index) => (
              <li
                key={index}
                className={`materials__dropdown__item ${selectedMaterial === material ? 'materials__dropdown__item--selected' : ''}`}
                onClick={() => handleSelect(material)}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`material ${selectedMaterial === material ? 'material--selected' : ''}`}
              onClick={() => handleSelect(material)}
            >
              {material}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
