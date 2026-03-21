"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ecoPontos from "../../constants/ecopontos";
import { StaggerContainer, StaggerItem } from "../ui/AnimatedBlock";
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
    <div className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-eco-700 mb-8 text-center">Principais pontos de coleta</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedEstado}
            onChange={(e) => {
              setSelectedEstado(e.target.value);
              setSelectedCidade("");
              setSelectedBairro("");
              setCurrentPage(1);
            }}
            className="px-4 py-3 border-2 border-eco-500 rounded-lg text-eco-700 font-semibold focus:outline-none focus:border-eco-700 focus:ring-2 focus:ring-eco-500"
          >
            <option value="">Estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
          <select
            value={selectedCidade}
            onChange={(e) => {
              setSelectedCidade(e.target.value);
              setSelectedBairro("");
              setCurrentPage(1);
            }}
            disabled={!selectedEstado}
            className="px-4 py-3 border-2 border-eco-500 rounded-lg text-eco-700 font-semibold focus:outline-none focus:border-eco-700 focus:ring-2 focus:ring-eco-500 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">Cidade</option>
            {cidades.map((cidade, index) => (
              <option key={index} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
          <select
            value={selectedBairro}
            onChange={(e) => {
              setSelectedBairro(e.target.value);
              setCurrentPage(1);
            }}
            disabled={!selectedCidade}
            className="px-4 py-3 border-2 border-eco-500 rounded-lg text-eco-700 font-semibold focus:outline-none focus:border-eco-700 focus:ring-2 focus:ring-eco-500 disabled:bg-gray-100 disabled:text-gray-400"
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
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h3 className="text-3xl font-bold text-eco-700 mb-4">Desculpe!</h3>
          <div className="w-32 h-32 bg-gradient-to-br from-eco-200 to-eco-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🌱</span>
          </div>
          <p className="text-lg text-gray-700 mb-2">Não conseguimos encontrar <strong>eco pontos</strong> para o material selecionado.</p>
          <p className="text-gray-600">Estamos trabalhando para manter nossas bases de dados sempre atualizadas.</p>
        </div>
      ) : (
        <>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {currentItems.map((ponto, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden h-full flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-eco-200 to-eco-100 flex items-center justify-center">
                    <span className="text-6xl">📍</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 w-fit">
                      {selectedMaterial !== "Todos" ? selectedMaterial : ponto.tipo_de_material}
                    </span>
                    <h3 className="text-xl font-bold text-eco-700 mb-2">{ponto.local}</h3>
                    <div className="flex gap-2 mb-4 text-gray-600">
                      <span>📮</span>
                      <p className="text-sm">{ponto.endereço} - {ponto.bairro}, {ponto.cidade}, {ponto.estado}</p>
                    </div>
                    <div className="space-y-3 mb-6 text-sm text-gray-700">
                      <div className="flex gap-2">
                        <span>🕐</span>
                        <div>
                          <p className="font-semibold">Seg - Sex</p>
                          <p>{ponto.horario_seg_sex}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span>📅</span>
                        <div>
                          <p className="font-semibold">Sábado</p>
                          <p>{ponto.horario_sab}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={generateGoogleMapsLink(ponto)}
                      target="_blank"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-eco-500 to-agro-leaf text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Como chegar
                      <span>🗺️</span>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </>
      )}
      {filteredEcoPontos.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-eco-500 text-white rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-eco-600 transition-colors"
          >
            &lt;
          </motion.button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
            const pageNumber = currentPage - 1 + index + 1;
            if (pageNumber > totalPages) return null;
            return (
              <motion.button
                key={pageNumber}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(pageNumber)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === pageNumber
                    ? 'bg-eco-500 text-white'
                    : 'bg-white border-2 border-eco-500 text-eco-500 hover:bg-eco-50'
                }`}
              >
                {pageNumber}
              </motion.button>
            );
          })}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-eco-500 text-white rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-eco-600 transition-colors"
          >
            &gt;
          </motion.button>
        </div>
      )}
    </div>
  );
}
