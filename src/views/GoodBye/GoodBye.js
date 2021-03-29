import React from "react";
import "./GoodBye.css";
import { Link } from "react-router-dom";
import moto from "./bye.gif";
export const GoodBye = () => {
  return (
    <section className="goodBye">
       <div className = "container mt-5" >
       <div className = "card">
         <Link to="/">
            <img  className="img-fluid" src={moto} alt="moto gif " width="700" height="700" />
        </Link>
        
        </div>
      </div>
    </section>
  );
};
