"use client";
import "swiper/css";
import "swiper/css/bundle";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

const Carousel = ({ images }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span className="' + className + '">' + (className + index + 1) + "</span>"
      );
    },
  };
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      centeredSlides={true}
      autoplay={true}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      loop={true}
      spaceBetween={10}
      modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.img} alt={image.alt} />
          </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
