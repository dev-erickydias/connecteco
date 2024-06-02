import SlideIntegrants from "@/components/CardsAbout/SlideIntegrants";
import { Banner } from "@/components/banner/Banner";
import CompanyInfo from "@/components/companyInfo/CompanyInfo";
import bannerInfo from "@/constants/bannerInfo";

export default function AboutPage() {
  return (
    <>
      <Banner bannerInfo={bannerInfo} className={"banner banner__home"} />
      <CompanyInfo />
      <SlideIntegrants />
    </>
  );
}
