import React from "react";
import { Button } from "@mui/material";
import image from "../../Assets/Image/HeroImage.jpg";
import "./Hero.css";
import { HashLink  } from "react-router-hash-link";

function Hero() {
  return (
    <div className="container">
      <div className="hero__container-left">
        <div className="hero__text-wrap">
          <h3>Hello world,</h3>
          <h3>I am Raunak Gurud</h3>
          <h1>WEB DEVELOPER AND FREENACER</h1>
          <p>Looking for collaboration and working on your dream project.</p>
        </div>
        <HashLink className="NavLink" to="/#contact">
        <Button variant="outlined" size="large">
            Get in Touch
          </Button>
        </HashLink>
      </div>
      <div className="hero__container-right">
        <img src={image} alt="Full stack web developer" />
      </div>
    </div>
  );
}

export default Hero;
