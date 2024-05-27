import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles.css";

import { Pagination, Navigation } from "swiper/modules";

const Slider2 = () => {
  return (
    <div className="xl:w-[80%]  lg:w-[90%] mx-auto md:w-[90%] md:mx-auto ">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1328: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 lg:font-bold   hover:bg-gray-400 transition-all ease-in-out duration-500 rounded-md text-sm xl:text-lg xl:px-9 xl:py-[17px] bg-black text-white">
            Decorative Coating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 lg:font-bold hover:bg-gray-400 transition-all ease-in-out duration-500  rounded-md text-sm bg-red-400 text-white xl:text-lg xl:px-5">
            Construction Chemicals
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-4 py-[4px] md:px-10 md:py-[14px] xl:px-[61px] xl:py-[17px] lg:px-14 lg:py-1 lg:font-bold hover:bg-gray-400 transition-all ease-in-out duration-500  rounded-md text-sm bg-green-500 text-white xl:text-lg  ">
            Special Paint
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 lg:font-bold xl:px-[50px] xl:py-[3px] hover:bg-gray-400 transition-all ease-in-out duration-500  rounded-md text-sm bg-sky-500 text-white xl:text-lg ">
            Heavy Duty Coating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-[23.5px] py-[4px] xl:px-[70px] xl:py-4 lg:font-bold md:px-10 lg:px-20 hover:bg-gray-400 transition-all ease-in-out duration-500  rounded-md text-sm bg-orange-400 text-white xl:text-lg  ">
            Metal Paint
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 xl:px-9 xl:py-[16px] hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-gray-500 text-white lg:text-lg lg:px-5">
            Decorative Coating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10  hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500 rounded-md text-sm lg:text-lg lg:px-5 xl:px-7 xl:py-[17px] bg-black text-white">
            Decorative Coating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-red-400 text-white lg:text-lg lg:px-5">
            Construction Chemicals
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-4 py-[4px] md:px-10 lg:px-14 xl:px-[60px] xl:py-[17px] hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-green-500 text-white lg:text-lg  ">
            Special Paint
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 xl:px-[50px] xl:py-[3px] hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-sky-500 text-white lg:text-lg lg:px-5">
            Heavy Duty Coating
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-[23.5px] py-[4px] md:px-10 lg:px-20 hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-orange-400 text-white lg:text-lg  ">
            Metal Paint
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="px-1 py-1 md:px-10 hover:bg-gray-400 lg:font-bold transition-all ease-in-out duration-500  rounded-md text-sm bg-gray-500 text-white lg:text-lg lg:px-5">
            Decorative Coating
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
