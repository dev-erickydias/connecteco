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
    <>
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
      >
        {bannerInfo.map((banner) => {
          return (
            <SwiperSlide className="banner__slide" key={banner.id}>
              <div className={className}>
                <BannerTexts
                  title={banner.texts.title}
                  description={banner.texts.description}
                />
                <div className="banner__image">
                  <BannerImage
                    src={banner.image.src}
                    alt={banner.image.alt}
                    width={banner.image.width}
                    height={banner.image.height}
                    className={banner.image.className}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
