import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import HeroImage from "./images/serving.jpg";
import users1 from "./images/customers/gallery-4.jpg";
import users2 from "./images/customers/gallery-2.jpg";
import users3 from "./images/customers/gallery-3.jpg";
import users4 from "./images/customers/gallery-7.jpg";
import users5 from "./images/customers/gallery-6.jpg";
import users6 from "./images/customers/gallery-1.jpg";

const Hero = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          {/* <h1>Little Lemon</h1>
          <h2>Chicago</h2> */}
          <h1 className="heading-primary">
            Treat yourself to <br />a healthy and delicious meal <br />
            at our restaurant
          </h1>

          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Tailored to your
            personal tastes and nutritional needs.
          </p>
          <NavLink to="/reservetable">
            <button className="hero-btn">Reserve a Table</button>
          </NavLink>
          <NavLink to="/specials">
            <button className="hero-btn second-btn">Learn more &darr; </button>
          </NavLink>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={users1} alt="usesSamoleimage1" />
              <img src={users2} alt="usesSamoleimage2" />
              <img src={users3} alt="usesSamoleimage3" />
              <img src={users4} alt="usesSamoleimage4" />
              <img src={users5} alt="usesSamoleimage5" />
              <img src={users6} alt="usesSamoleimage6" />
            </div>
            <p className="delivered-text">
              <span>17,000+</span> meals delivered in last 30 days!
            </p>
          </div>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
