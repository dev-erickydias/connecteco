"use client";

import { useState } from "react";
import { ButtonsMaterials } from "../../components/buttonMaterials/ButtonsMaterials";
import { CardsList } from "../../components/cards/CardsList";
import { Banner } from "../../components/banner/Banner";
import bannerInfo from "../../constants/bannerInfo";

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState("Todos");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedBairro, setSelectedBairro] = useState("");

  return (
    <>
      <Banner bannerInfo={bannerInfo} className={"banner banner__home"} />
      <ButtonsMaterials 
        selectedMaterial={selectedMaterial} 
        setSelectedMaterial={setSelectedMaterial}
        setSelectedEstado={setSelectedEstado}
        setSelectedCidade={setSelectedCidade}
        setSelectedBairro={setSelectedBairro}
      />
      <CardsList 
        selectedMaterial={selectedMaterial} 
        selectedEstado={selectedEstado}
        selectedCidade={selectedCidade}
        selectedBairro={selectedBairro}
        setSelectedEstado={setSelectedEstado}
        setSelectedCidade={setSelectedCidade}
        setSelectedBairro={setSelectedBairro}
      />
    </>
  );
}
