'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import BannerTexts from './BannerTexts'
import BannerImage from './BannerImage'

export function Banner({ bannerInfo }) {
  return (
    <div className="w-full relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        className="mySwiper"
      >
        {bannerInfo.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[480px] md:h-[580px] w-full overflow-hidden bg-eco-900">
              {/* Background Image */}
              <BannerImage
                src={banner.src}
                alt={banner.alt}
                width={banner.width}
                height={banner.height}
              />

              {/* Gradient Overlay - more ecological/organic */}
              <div className="absolute inset-0 bg-gradient-to-r from-eco-900/85 via-eco-900/50 to-eco-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-900/40 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center">
                <BannerTexts
                  title={banner.title}
                  description={banner.description}
                  btn={banner.button}
                />
              </div>

              {/* Decorative bottom curve */}
              <div className="absolute bottom-0 left-0 right-0 h-8">
                <svg viewBox="0 0 1440 48" fill="none" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z" fill="#FDFCF8" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
