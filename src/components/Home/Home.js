import React, { useState } from "react";
import Honda from "./assets/Honda.jpg";
import {Carousel} from "react-bootstrap"
import BMW from "./assets/moto.jpg";
import Chopper from "./assets/chopper2.jpeg";
import Hdv from "./assets/HDV.jpeg"
import "./Home.css";



const Home = () => {

  return (
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={Chopper}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Hdv}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BMW}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Home;
