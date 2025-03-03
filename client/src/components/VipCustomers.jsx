import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Title from './Title';


import zara from "../assets/zara.jpg";
import american from "../assets/american.jpg";
import tommy from "../assets/tommy.jpg";
import levis from "../assets/levis.jpg";
import uspolo from "../assets/us-polo.jpg";
import calvin from "../assets/calvin.jpg";
import balmain from "../assets/balmain.jpg";



const BrandsColab = () => {

  const customers = [
    { name: "Zara", img: zara },
  { name: "American", img: american },
  { name: "Tommy", img: tommy },
  { name: "Levis", img: levis },
  { name: "US Polo", img: uspolo },
  { name: "Calvin", img: calvin },
  { name: "Balmain", img: balmain },
  ];


  return (
   
    <div className="text-center py-8">
    <Title text1={"COLLABORATED"} text2={"BRANDS"} />
    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-tangerine text-center mb-2">
      Join us in unveiling a new era of style, where trends meet timeless
      elegance ~Fabrix
    </p>

    <div className="flex justify-center items-center">
      <Swiper
        spaceBetween={20}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        grabCursor={true}
        speed={11000} // Makes it smoothly transition without stopping
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 2 }, // Small screens: 3 slides
          640: { slidesPerView: 3 }, // Small screens: 3 slides
          1024: { slidesPerView: 4 }, // Medium & above: 4 slides
        }}
        modules={[Autoplay]}
        className="max-w-[90%] lg:max-w-[70%]" // Centers on large screens
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <img
                src={customer.img}
                alt={customer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}

export default BrandsColab