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

import BannerTexts from "./BannerTexts";
import BannerImage from "./BannerImage";

export function Banner({bannerInfo, className}) {
  return (
    <div className="banner__container">
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        spaceBetween={100}
        className="mySwiper"
        loop={true}
      >
        {bannerInfo.map((banner) => {
          return (
            <SwiperSlide className="banner__slide" key={banner.id}>
              <div className={className}>
                <BannerTexts
                  title={banner.title}
                  description={banner.description}
                /> 
                <div className="banner__image">
                  <BannerImage
                    src={banner.src}
                    alt={banner.alt}
                    width={banner.width}
                    height={banner.height}
                    className={banner.className}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
