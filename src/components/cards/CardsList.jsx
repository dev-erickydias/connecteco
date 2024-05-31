"use client";

import "./cardsList.css";
import Link from "next/link";
import { useState } from "react";

function formatHour(hour) {
  let h = parseInt(hour.replace("h", ""), 10);
  return `${h}:00h`;
}

function transformHorario(horario) {
  let [inicio, fim] = horario.split("-");
  let inicioFormatado = formatHour(inicio);
  let fimFormatado = formatHour(fim);
  return `${inicioFormatado}-${fimFormatado}`;
}

export function CardsList() {
  const ecoPontos = [
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Gopoúva",
      endereço: "Rua Guarulhos, 34",
      bairro: "Gopoúva",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jardim Leila (próximo ao CIESP)",
      endereço: "Rua Apolônia Vieira de Jesus, 91",
      bairro: "Paraventi",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Parque Continental II",
      endereço: "Rua Valdimiro Laurentino Pêssoa, 655I",
      bairro: "Continental",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Parque Santo Antonio",
      endereço: "Rua Ouvidor 337",
      bairro: "Torres Tibagy",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Vila Galvão",
      endereço: "Avenida Faustino Ramalho, 977",
      bairro: "Timóteo Penteado",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jd. Luciara",
      endereço: "Rua Adélia Sadalla, 166",
      bairro: "Iporanga",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jardim Divinolândia",
      endereço: "Rua São Tomás de Aquino, 61",
      bairro: "João do Pulo",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Santos Dumont",
      endereço: "Estrada do Saboó, 795",
      bairro: "Santos Dumont",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jd. Presidente Dutra",
      endereço: "Avenida João Bassi, 707",
      bairro: "Presidente Dutra",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jurema",
      endereço: "Rua Jacutinga, 470",
      bairro: "Jurema",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },{
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jardim Divinolândia",
      endereço: "Rua São Tomás de Aquino, 61",
      bairro: "João do Pulo",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Santos Dumont",
      endereço: "Estrada do Saboó, 795",
      bairro: "Santos Dumont",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jd. Presidente Dutra",
      endereço: "Avenida João Bassi, 707",
      bairro: "Presidente Dutra",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jurema",
      endereço: "Rua Jacutinga, 470",
      bairro: "Jurema",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },{
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jardim Divinolândia",
      endereço: "Rua São Tomás de Aquino, 61",
      bairro: "João do Pulo",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Santos Dumont",
      endereço: "Estrada do Saboó, 795",
      bairro: "Santos Dumont",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jd. Presidente Dutra",
      endereço: "Avenida João Bassi, 707",
      bairro: "Presidente Dutra",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jurema",
      endereço: "Rua Jacutinga, 470",
      bairro: "Jurema",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },{
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jardim Divinolândia",
      endereço: "Rua São Tomás de Aquino, 61",
      bairro: "João do Pulo",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Santos Dumont",
      endereço: "Estrada do Saboó, 795",
      bairro: "Santos Dumont",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jd. Presidente Dutra",
      endereço: "Avenida João Bassi, 707",
      bairro: "Presidente Dutra",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
    {
      estado: "SP",
      cidade: "GUARULHOS",
      local: "Jurema",
      endereço: "Rua Jacutinga, 470",
      bairro: "Jurema",
      tipo_de_material:
        "Coleta seletiva, obras e materiais, líquidos, borracha",
      "horário_seg-sex": "7h-19h",
      "horário_sab-dom": "7h-19h",
      tipo: "ecoponto",
    },
  ];

  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedBairro, setSelectedBairro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [visibleCards, setVisibleCards] = useState(3);

  const estados = [...new Set(ecoPontos.map((ponto) => ponto.estado))];
  const cidades = [...new Set(ecoPontos.filter((ponto) => ponto.estado === selectedEstado).map((ponto) => ponto.cidade))];
  const bairros = [...new Set(ecoPontos.filter((ponto) => ponto.cidade === selectedCidade).map((ponto) => ponto.bairro))];

  const filteredEcoPontos = ecoPontos.filter(
    (ponto) =>
      (!selectedEstado || ponto.estado === selectedEstado) &&
      (!selectedCidade || ponto.cidade === selectedCidade) &&
      (!selectedBairro || ponto.bairro === selectedBairro)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEcoPontos.slice(indexOfFirstItem, indexOfLastItem);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  const totalPages = Math.ceil(filteredEcoPontos.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="cards">
      <div className="cards__container_search">
        <h3 className="cards__title_search">Principais pontos de coleta</h3>
        <div className="cards__container_select">
          <select className="cards__select cards__select_state"
            value={selectedEstado}
            onChange={(e) => {
              setSelectedEstado(e.target.value);
              setSelectedCidade("");
              setSelectedBairro("");
            }}
          >
            <option value="">Estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
          <select className="cards__select cards__select_city"
            value={selectedCidade}
            onChange={(e) => {
              setSelectedCidade(e.target.value);
              setSelectedBairro("");
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
          <select className="cards__select_neighborhoods"
            value={selectedBairro}
            onChange={(e) => setSelectedBairro(e.target.value)}
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
        {currentItems.slice(0, visibleCards).map((ponto, index) => (
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
                  <p className="card__office-hour">
                    {transformHorario(ponto["horário_seg-sex"])}
                  </p>
                </div>
                <div className="card__container_schedules">
                  <p className="card__office-date">Sáb - Dom</p>
                  <p className="card__office-hour">
                    {transformHorario(ponto["horário_sab-dom"])}
                  </p>
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
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination__button ${currentPage === index + 1 ? "pagination__button--active" : ""}`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="load-more">
        <button className="load-more__button" onClick={handleLoadMore}>Carregar Mais</button>
      </div>
    </div>
  );
}
