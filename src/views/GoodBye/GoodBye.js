import React from "react";
import "./GoodBye.css";
import { Link } from "react-router-dom";
import moto from "./bye.gif";
export const GoodBye = () => {
  return (
    <section className="goodBye">
      <div className="message">
        <Link to="/">
            <img src={moto} alt="this is moto image" width="700" height="700" />
        </Link>
        
      </div>
    </section>
  );
};
