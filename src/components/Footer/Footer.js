import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
             <Link to="/"><h2>About Us</h2></Link>
           </div>
        </div>
       
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              MTCF
              <i className="fas fa-typo3    " />
            </Link>
          </div>
          <small className="website-rights">MTCF © 2020</small>
          <div className="social-icons">
          <h6>En construccion</h6>
            <Link
              className="social-icon-link facebook"
              to="/"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
            
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />  
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
};
