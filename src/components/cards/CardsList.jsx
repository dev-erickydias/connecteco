"use client";

import "./cardsList.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ecoPontos from "../../constants/ecopontos";
import UseWindowWidth from "../UseWindowWidth";

const isMaterialMatch = (selectedMaterial, tipoDeMaterial) => {
  const materialArray = tipoDeMaterial.split(',').map(material => material.trim());

  if (selectedMaterial === "Todos") return true;
  if (selectedMaterial === "Plástico" || selectedMaterial === "Papel") {
    return materialArray.includes("Coleta seletiva");
  }
  return materialArray.includes(selectedMaterial);
};

const useFilteredEcoPontos = (
  selectedEstado,
  selectedCidade,
  selectedBairro,
  selectedMaterial
) => {
  const estados = [...new Set(ecoPontos.map((ponto) => ponto.estado))].sort();
  const cidades = [
    ...new Set(
      ecoPontos
        .filter((ponto) => ponto.estado === selectedEstado)
        .map((ponto) => ponto.cidade)
    ),
  ].sort();
  const bairros = [
    ...new Set(
      ecoPontos
        .filter((ponto) => ponto.cidade === selectedCidade)
        .map((ponto) => ponto.bairro)
    ),
  ].sort();

  const filteredEcoPontos = ecoPontos.filter((ponto) => {
    const matchEstado = !selectedEstado || ponto.estado === selectedEstado;
    const matchCidade = !selectedCidade || ponto.cidade === selectedCidade;
    const matchBairro = !selectedBairro || ponto.bairro === selectedBairro;
    const matchMaterial = isMaterialMatch(selectedMaterial, ponto.tipo_de_material);

    return matchEstado && matchCidade && matchBairro && matchMaterial;
  });

  return { estados, cidades, bairros, filteredEcoPontos };
};

const usePagination = (filteredEcoPontos, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEcoPontos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredEcoPontos.length / itemsPerPage);

  return { currentItems, totalPages };
};

const generateGoogleMapsLink = (ponto) => {
  const enderecoCompleto = `${ponto.endereço}, ${ponto.bairro}, ${ponto.cidade}, ${ponto.estado}`;
  const enderecoCodificado = encodeURIComponent(enderecoCompleto);
  return `https://www.google.com/maps/search/?api=1&query=${enderecoCodificado}`;
};

export function CardsList({ 
  selectedMaterial, 
  selectedEstado, 
  selectedCidade, 
  selectedBairro,
  setSelectedEstado,
  setSelectedCidade,
  setSelectedBairro 
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const windowWidth = UseWindowWidth();

  useEffect(() => {
    if (windowWidth < 768) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(12);
    }
  }, [windowWidth]);

  const { estados, cidades, bairros, filteredEcoPontos } = useFilteredEcoPontos(
    selectedEstado,
    selectedCidade,
    selectedBairro,
    selectedMaterial
  );
  const { currentItems, totalPages } = usePagination(
    filteredEcoPontos,
    currentPage,
    itemsPerPage
  );

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="cards">
      <div className="cards__container_search">
        <h3 className="cards__title_search">Principais pontos de coleta</h3>
        <div className="cards__container_select">
          <select
            className="cards__select cards__select_state"
            value={selectedEstado}
            onChange={(e) => {
              setSelectedEstado(e.target.value);
              setSelectedCidade("");
              setSelectedBairro("");
              setCurrentPage(1);
            }}
          >
            <option value="">Estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
          <select
            className="cards__select cards__select_city"
            value={selectedCidade}
            onChange={(e) => {
              setSelectedCidade(e.target.value);
              setSelectedBairro("");
              setCurrentPage(1);
            }}
            disabled={!selectedEstado}
          >
            <option value="">Cidade</option>
            {cidades.map((cidade, index) => (
              <option key={index} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
          <select
            className="cards__select_neighborhoods"
            value={selectedBairro}
            onChange={(e) => {
              setSelectedBairro(e.target.value);
              setCurrentPage(1);
            }}
            disabled={!selectedCidade}
          >
            <option value="">Selecione o Bairro</option>
            {bairros.map((bairro, index) => (
              <option key={index} value={bairro}>
                {bairro}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredEcoPontos.length === 0 ? (
        <div className="cards__notfound">
          <h3 className="cards__notfound_title">Desculpe!</h3>
          <div className="cards__notfound_image"></div>
          <p className="cards__notfound_paragraph">Não conseguimos encontrar <strong>eco pontos</strong> para o material selecionado.</p>
          <p className="cards__notfound_paragraph">Estamos trabalhando para manter nossas bases de dados sempre atualizadas.</p>
          
        </div>
      ) : (
        <ul className="cards__container_list">
          {currentItems.map((ponto, index) => (
            <li className="card__list" key={index}>
              <div className="card__container_image">
                <div className="card__image"></div>
              </div>
              <div className="card__description">
                <p className="card__types">{ponto.tipo_de_material}</p>
                <h3 className="card__location">{ponto.local}</h3>
                <div className="card__address">
                  <div className="card__icon_location" />
                  <p className="card__description_address">
                    {ponto.endereço}-{ponto.bairro}-{ponto.cidade}-{ponto.estado}
                  </p>
                </div>
                <div className="card__schedules">
                  <div className="card__icon_schedules" />
                  <div className="card__container_schedules">
                    <p className="card__office-date">Seg - Sex</p>
                    <p className="card__office-hour">{ponto.horario_seg_sex}</p>
                  </div>
                  <div className="card__container_schedules">
                    <p className="card__office-date">Sábado</p>
                    <p className="card__office-hour">{ponto.horario_sab}</p>
                  </div>
                </div>
                <div className="card__link_map">
                  <Link className="card__Link" href={generateGoogleMapsLink(ponto)} target="_blank">
                    Como chegar
                  </Link>
                  <div className="card__icon_arrow" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {filteredEcoPontos.length > 0 && (
        <div className="cards__pagination">
          <button
            className="cards__pagination_button"
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
            const pageNumber = currentPage - 1 + index + 1;
            if (pageNumber > totalPages) return null;
            return (
              <button
                key={pageNumber}
                className={`cards__pagination_button ${
                  currentPage === pageNumber
                    ? "cards__pagination_button--active"
                    : ""
                }`}
                onClick={() => handleClick(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            className="cards__pagination_button"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
