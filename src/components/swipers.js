import React from "react";
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import images1 from '../images/cr1.jpg';
import images2 from '../images/cr2.jpg';
import images3 from '../images/cr3.jpg';
import images4 from '../images/cr4.jpg';
import images5 from '../images/cr5.jpg';
import images6 from '../images/cr6.jpg';
import images7 from '../images/cr7.jpg';
import images8 from '../images/cr8.jpg';
const Swipers=(props) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };
    return (
        <Swiper
        breakpoints={{
            576: {
              //width: 576,
              slidesPerView: 2,
            },
            768: {
              //width: 768,
              slidesPerView: 1,
            },
          }}
        
        Autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

        <SwiperSlide>
            <img src = {images1} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images2} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images3} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images4} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images5} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images6} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images7} className="d-block w-100"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images8} className="d-block w-100"></img>
        </SwiperSlide>
      </Swiper>
       
    );
  };

  export default Swipers;
  