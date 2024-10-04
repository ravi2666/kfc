import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banimg1 from '../images/web_1.webp'
import banimg2 from '../images/head1.jpg'
import banimg3 from '../images/bannerr1.png'

const Banner=() => {
  return (
    <Carousel className = "bannercar">
      <Carousel.Item>
            <img  className="img" src = {banimg1} ></img>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="img" src = {banimg2} ></img>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="img" src = {banimg3}></img>

      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;