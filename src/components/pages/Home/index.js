import React from "react";
import { Parallax } from "react-parallax";
import CyberCity from "../../../images/bg-imgs/damiano-ferrante-gS5GbmoUUnc-unsplash1.jpg";
import "./home.css";

export default function Home() {
  return (
    <Parallax
      bgImage={CyberCity}
      bgImageAlt="city that glows in pink and light blue"
      strength={800}
      className="home-image"
      
    >
      <div className="home-content " id="home">
        <div className="home-text text-center">
          <h1>Hi, I'm Arely</h1>
          <h4>I'm a full stack developer from Los Angeles, CA </h4>
        </div>
      </div>
    </Parallax>
  );
}
