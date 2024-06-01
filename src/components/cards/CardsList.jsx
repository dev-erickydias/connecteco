"use client";

import "./cardsList.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ecoPontos from "../../constants/ecopontos";

// Hook personalizado para lidar com o redimensionamento da janela
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

// Hook personalizado para lidar com a lógica de filtro
const useFilteredEcoPontos = (
  selectedEstado,
  selectedCidade,
  selectedBairro
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

  const filteredEcoPontos = ecoPontos.filter(
    (ponto) =>
      (!selectedEstado || ponto.estado === selectedEstado) &&
      (!selectedCidade || ponto.cidade === selectedCidade) &&
      (!selectedBairro || ponto.bairro === selectedBairro) &&
      ponto.horario_seg_sex !== "Não disponível"
  );

  return { estados, cidades, bairros, filteredEcoPontos };
};

// Hook personalizado para lidar com a lógica de paginação
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

export function CardsList() {
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedBairro, setSelectedBairro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const windowWidth = useWindowWidth();

  // Ajusta a quantidade de itens por página com base na largura da janela
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
    selectedBairro
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
              setCurrentPage(1); // Resetar a página ao alterar o estado
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
              setCurrentPage(1); // Resetar a página ao alterar a cidade
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
              setCurrentPage(1); // Resetar a página ao alterar o bairro
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
                <Link className="card__Link" href="/#">
                  Como chegar
                </Link>
                <div className="card__icon_arrow" />
              </div>
            </div>
          </li>
        ))}
      </ul>
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
    </div>
  );
}
