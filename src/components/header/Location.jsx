"use client";

import React, { useContext, useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import UserLocationContext from "../../context/UserLocationContext";

export function Location() {
  const { userLocation, locationError, locationLoading, requestLocation } = useContext(UserLocationContext);
  const [location, setLocation] = useState("Obter Localizacao");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const locationFromStorage = localStorage.getItem("location");
    if (locationFromStorage) {
      setLocation(locationFromStorage);
    }
  }, []);

  // When userLocation updates (after requestLocation succeeds), reverse geocode
  useEffect(() => {
    if (userLocation && location === "Obter Localizacao" && !localStorage.getItem("location")) {
      reverseGeocode(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  const getStateAbbreviation = (stateFullName) => {
    const stateAbbreviations = {
      Acre: "AC", Alagoas: "AL", "Amapa": "AP", Amazonas: "AM",
      Bahia: "BA", "Ceara": "CE", "Distrito Federal": "DF",
      "Espirito Santo": "ES", "Goias": "GO", "Maranhao": "MA",
      "Mato Grosso": "MT", "Mato Grosso do Sul": "MS",
      "Minas Gerais": "MG", "Para": "PA", "Paraiba": "PB",
      "Parana": "PR", Pernambuco: "PE", "Piaui": "PI",
      "Rio de Janeiro": "RJ", "Rio Grande do Norte": "RN",
      "Rio Grande do Sul": "RS", "Rondonia": "RO", Roraima: "RR",
      "Santa Catarina": "SC", "Sao Paulo": "SP", Sergipe: "SE",
      Tocantins: "TO",
    };
    return stateAbbreviations[stateFullName] || stateFullName;
  };

  const reverseGeocode = async (latitude, longitude) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      setFetching(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error('Geocoding request failed');

      const data = await response.json();
      const { address } = data;
      const cityName = address.city || address.town || address.village || "";
      const stateFullName = address.state || "";
      const stateAbbreviation = getStateAbbreviation(stateFullName);
      const locationName = `${cityName}, ${stateAbbreviation}`;
      setLocation(locationName);
      localStorage.setItem("location", locationName);
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Erro ao obter o nome do local:", error.message);
    } finally {
      setFetching(false);
    }
  };

  const handleClick = async () => {
    if (userLocation) {
      await reverseGeocode(userLocation.latitude, userLocation.longitude);
    } else {
      // Request location permission on user click
      requestLocation();
    }
  };

  const isLoading = locationLoading || fetching;

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex items-center gap-2 rounded-xl border border-eco-200/50 bg-eco-50/50 px-4 py-2 text-sm font-medium text-eco-700 transition-all duration-200 hover:border-eco-300 hover:bg-eco-50 disabled:opacity-50"
      title={locationError || "Clique para obter sua localização"}
    >
      {isLoading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-eco-500 border-t-transparent" />
      ) : (
        <MapPin size={15} className="flex-shrink-0 text-eco-500" />
      )}
      <span className="truncate max-w-[140px]">
        {locationError ? "Tentar novamente" : location}
      </span>
    </button>
  );
}
