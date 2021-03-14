
import React, { useState } from "react";
import Slider from "react-slick";
import Honda from "./assets/Honda.jpg";
import Suzuki from "./assets/suzuki.jpg";
import Ktm from "./assets/Ktm.jpg";
import "./Home.css";

const Home = () => {
 
  return (
    <div >
       <h1>Carrousel</h1>
      <img src="../assets/suzuki.jpg"/>
      <span ><img src="./assets/Ktm.jpg"/></span>
      <span ><img src="../assets/Honda.jpg"/></span>
    
    </div>
  );
}

export default Home;
