import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import images1 from '../images/cr1.jpg';
import images2 from '../images/cr2.jpg';
import images3 from '../images/cr3.jpg';
import images4 from '../images/cr4.jpg';
import images5 from '../images/cr5.jpg';
import images6 from '../images/cr6.jpg';
import images7 from '../images/cr7.jpg';
import images8 from '../images/cr8.jpg';

export default function Scroller() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <Swiper src = "imgresponsive"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src = {images1}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images2}></img>
        </SwiperSlide>
        <SwiperSlide>
             <img src = {images3}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images4}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images5}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images6}></img>
        </SwiperSlide>
        <SwiperSlide>
             <img src = {images7}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src = {images8}></img>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}