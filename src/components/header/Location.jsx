"use client"

import React, { useContext, useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import CustomButton from "../CustomButton";
import UserLocationContext from "../../context/UserLocationContext";

export function Location() {
  const { userLocation } = useContext(UserLocationContext);
 const [location, setLocation] = useState("Obter Localização")

 useEffect(() => {
  const locationFromStorage = localStorage.getItem("location");
  if (locationFromStorage) {
    setLocation(locationFromStorage);
  } else {
    console.log("Local não encontrado no localStorage");
  }
}, []);

  const getLocationName = async (latitude, longitude) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    const { address } = data;
    const cityName = address.city || "";
    const stateFullName = address.state || "";
    const stateAbbreviation = getStateAbbreviation(stateFullName);
    return `${cityName}, ${stateAbbreviation}`;
  };

  const getStateAbbreviation = (stateFullName) => {
    const stateAbbreviations = {
      'Acre': "AC",
      "Alagoas": "AL",
      "Amapá": "AP",
      "Amazonas": "AM",
      'Bahia': "BA",
      "Ceará": "CE",
      "Distrito Federal": "DF",
      "Espírito Santo": "ES",
      "Goiás": "GO",
      "Maranhão": "MA",
      "Mato Grosso": "MT",
      "Mato Grosso do Sul": "MS",
      "Minas Gerais": "MG",
      "Pará": "PA",
      "Paraíba": "PB",
      "Paraná": "PR",
      "Pernambuco": "PE",
      "Piauí": "PI",
      "Rio de Janeiro": "RJ",
      "Rio Grande do Norte": "RN",
      "Rio Grande do Sul": "RS",
      'Rondônia': "RO",
      'Roraima': "RR",
      "Santa Catarina": "SC",
      "São Paulo": "SP",
      'Sergipe': "SE",
      'Tocantins': "TO",
    };

    return stateAbbreviations[stateFullName] || stateFullName;
  };

  const handleClick = async () => {
    if (userLocation) {
      try {
        const locationName = await getLocationName(userLocation.latitude, userLocation.longitude);
        setLocation(locationName)
        localStorage.setItem("location", locationName)
      } catch (error) {
        console.error("Erro ao obter o nome do local:", error.message);
      }
    } else {
      console.error("Localização do usuário não disponível");
    }
  };

  return (
    <CustomButton className={"button"} onClick={handleClick}>
      <MapPin size={16} />
      <span className="text-base">{location}</span>
    </CustomButton>
  );
}
