"use client";

import "./banner.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export function Banner() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner">
          <div className="banner__texts">
              <h2 className="banner__texts_title">Encontre pontos de reciclagem perto de você!</h2>
              <h3 className="banner__texts_description">Para um futuro sustentável. Veja onde reciclar!</h3>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner__texts">
              <h2 className="banner__texts_title">Encontre pontos de reciclagem perto de você!</h2>
              <h3 className="banner__texts_description">Para um futuro sustentável. Veja onde reciclar!</h3>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner__texts">
              <h2 className="banner__texts_title">Encontre pontos de reciclagem perto de você!</h2>
              <h3 className="banner__texts_description">Para um futuro sustentável. Veja onde reciclar!</h3>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
