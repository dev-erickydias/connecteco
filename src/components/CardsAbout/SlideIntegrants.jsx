"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import postIntegrants from "../../constants/postIntegrantes";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

export default function SlideIntegrants() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-eco-700 text-center mb-12"
      >
        Integrantes
      </motion.h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#348B61",
          "--swiper-pagination-color": "#348B61",
        }}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {postIntegrants.map((integrante) => {
          if (integrante.descricao) {
            return (
              <SwiperSlide key={integrante.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg h-full"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-eco-500 shadow-lg">
                      <img
                        src={integrante.imagem}
                        alt={integrante.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {integrante.cargo && (
                    <h2 className="text-sm font-semibold text-eco-500 uppercase tracking-widest mb-2">
                      {integrante.cargo}
                    </h2>
                  )}

                  <h4 className="text-2xl font-bold text-eco-700 mb-4">
                    {integrante.nome}
                  </h4>

                  <div className="text-gray-700 text-sm leading-relaxed mb-6 max-h-24 overflow-y-auto">
                    {integrante.descricao && (
                      <p>{integrante.descricao}</p>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {integrante.linkLinkedin && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={integrante.linkLinkedin}
                          target="_blank"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                        >
                          LinkedIn
                        </Link>
                      </motion.div>
                    )}
                    {integrante.linkGithub && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={integrante.linkGithub}
                          target="_blank"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors text-sm"
                        >
                          GitHub
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
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
