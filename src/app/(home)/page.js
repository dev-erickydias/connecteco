import { ButtonsMaterials } from "@/components/buttonMaterials/ButtonsMaterials";

import { CardsList } from "./components/CardsList";
import { Banner } from "./components/banner/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <ButtonsMaterials />
      <CardsList />
    </>
  );
}
