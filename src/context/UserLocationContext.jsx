"use client"

import React, { createContext, useState, useContext, useEffect } from "react";

const UserLocationContext = createContext();

export const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Erro ao obter a localização:", error.message);
        }
      );
    } else {
      console.error("Geolocalização não suportada neste navegador");
    }
  }, []);

  return (
    <UserLocationContext.Provider value={{ userLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationContext;
