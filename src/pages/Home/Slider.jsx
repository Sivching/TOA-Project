import sliderImage1 from "../../assets/image/slideImage.jpg";
import sliderImage2 from "../../assets/image/slideImage2.jpg";
import sliderImage3 from "../../assets/image/slideImage3.jpg";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../Style.css";
import Slider2 from "./Slider2";
const Slider = () => {
  return (
    <>
      <div className="w-[100%] xl:h-[50vh] lg:h-[40vh] mt-5 xl:mt-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={sliderImage3}
              className="h-80 w-56 flex justify-center items-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage3} className="h-80 w-56" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage3} className="h-80 w-56" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Slider2 />
    </>
  );
};

export default Slider;
