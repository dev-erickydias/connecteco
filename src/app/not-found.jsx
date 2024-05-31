"use client"
import "@/styles/404.css"
import "../components/banner/banner.css";
import Image from "next/image";
import CustomButton from "@/components/CustomButton"
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="banner__not-found">
          <div className="banner__texts">
              <h2 className="banner__texts_title ">404 :(</h2>
              <h3 className="banner__texts_description">Ops! Página não encontrada</h3>
              <CustomButton className={"bannet__not-found__btn"} ><Link href={"/"}>Voltar para página inical</Link></CustomButton>
            </div>
            <div className="banner__image">
              <Image
                src="/BannerOne.png"
                alt="Peneus para reciclar"
                width={607}
                height={811}
                className="banner__image_object-contain"
              />
            </div>
          </div>
  );
}
 