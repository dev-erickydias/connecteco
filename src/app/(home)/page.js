import { ButtonsMaterials } from "@/components/buttonMaterials/ButtonsMaterials";
import { Banner } from "./components/Banner";
import { CardsList } from "./components/CardsList";

export default function Home() {
  return (
    <>
      <Banner />
      <ButtonsMaterials />
      <CardsList />
    </>
  );
}
