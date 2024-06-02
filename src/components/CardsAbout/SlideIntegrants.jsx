"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./cardsIntegrantes.css";
import CustomButton from "../CustomButton";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import postIntegrants from "../../constants/postIntegrantes";

// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";
import CustomImage from "../CustomImage";

export default function SlideIntegrants() {
  return (
    <>
    <h1 className="title">Integrantes</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        speed={600}
        parallax={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={500}
        navigation={true}
        className="mySwiper"
      >
        
        {postIntegrants.map((integrante) => {
          if (integrante.descricao) {
            return (
              <SwiperSlide key={integrante.id}>
                <div
                  className="card">
                  <div className="card__texts">
                    {integrante.cargo ? (
                      <h2 className="card__cargo">{integrante.cargo}</h2>
                    ) : null}
                    <div>
                      <h4 className="card__title">{integrante.nome}</h4>
                      <div>
                        {integrante.descricao ? (
                          <p className="card__descricao">
                            {integrante.descricao}
                          </p>
                        ) : null}
                        
                      </div>
                    </div>
                    
                    
                   
                    
                      <div className="card__btns">
                        {integrante.linkLinkedin ? (
                          <CustomButton className={"card-about__btn"}>
                            <Link href={integrante.linkLinkedin} target="_blank">
                              Linkedin
                            </Link>
                          </CustomButton>
                        ) : null}
                        {integrante.linkGithub ? (
                          <CustomButton className={"card-about__btn"}>
                            <Link href={integrante.linkGithub} target="_blank">
                              GitHub
                            </Link>
                          </CustomButton>
                        ) : null}
                      </div>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
            );
          } else {
            return null;
          }
        })}
      </Swiper>
    </>
  );
}
