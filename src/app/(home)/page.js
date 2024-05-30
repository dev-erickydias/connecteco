import { ButtonsMaterials } from "@/components/buttonMaterials/ButtonsMaterials";

import { CardsList } from "../../components/CardsList";
import { Banner } from "@/components/banner/Banner";

import bannerInfo from "@/constants/bannerInfo";
export default function Home() {
  return (
    <>
      <Banner bannerInfo={bannerInfo} className={"banner banner__home"}/>
      <ButtonsMaterials  />
      <CardsList />
    </>
  );
}
