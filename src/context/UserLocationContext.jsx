"use client"

import React, { createContext, useState, useCallback } from "react";

const UserLocationContext = createContext();

export const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocalização não suportada neste navegador.");
      return;
    }

    setLocationLoading(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setLocationLoading(false);
      },
      (error) => {
        let message = "Não foi possível obter sua localização.";
        if (error.code === 1) {
          message = "Permissão de localização negada. Habilite nas configurações do navegador.";
        } else if (error.code === 2) {
          message = "Localização indisponível no momento.";
        } else if (error.code === 3) {
          message = "Tempo esgotado ao obter localização.";
        }
        setLocationError(message);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  return (
    <UserLocationContext.Provider value={{ userLocation, locationError, locationLoading, requestLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationContext;
