import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/cr1.jpg';
import img2 from '../images/cr2.jpg';
import img3 from '../images/cr3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



function Foodlist() {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <img src = {img1}></img>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <img src = {img2}></img>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <img src = {img3}></img>
                    
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  );
}

export default Foodlist;