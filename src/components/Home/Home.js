import "./Home.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Honda from "./assets/Honda.jpg";
import Suzuki from "./assets/suzuki.jpg";
import Ktm from "./assets/Ktm.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const images = [Honda, Suzuki, Ktm];

const Home = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="home">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
             <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
