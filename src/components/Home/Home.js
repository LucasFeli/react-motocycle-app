import React, { useState } from "react";
import {Carousel} from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BMW from "./assets/moto.jpg";
import Chopper from "./assets/chopper2.jpeg";
import Hdv from "./assets/HDV.jpeg"
import Honda from "./assets/Honda.jpg"
import "./Home.css";



const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };

  return (
    <div className="ImageWrapper">
    <Carousel>
<Carousel.Item interval={1000}>
  <img
    className="d-block w-100 "
    src={Chopper}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item interval={500}>
  <img
    className="d-block w-100"
    src={Hdv}
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={BMW}
    alt="Third slide"
  />
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Home;

