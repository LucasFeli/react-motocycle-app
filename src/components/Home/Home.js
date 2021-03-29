import React  from "react";
import Carousel from "react-bootstrap/Carousel"
import Chopper from "./assets/chopper2.jpeg";
import Chopper2 from "./assets/chopper.jpeg";
import Hdv from "./assets/HDV.jpeg"
import Honda from "./assets/Honda.jpg"
import BMW from "./assets/bmw.jpg"


import "./Home.css";



const Home = () => {

  return (
    <div className="ImageWrapper">
    <Carousel controls={false} fade={true} pause={false}>
<Carousel.Item interval={2000}>
  <img
    className="d-block w-100 "
    src={Chopper}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item >
  <img
    className="d-block w-100"
    src={Hdv}
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src={BMW}
    alt="Third slide"
  />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src={Honda}
    alt="Third slide"
  />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <img
    className="d-block w-100"
    src={Chopper2}
    alt="Third slide"
  />
  </Carousel.Item>
</Carousel>
    
    </div>
  );
}

export default Home;

