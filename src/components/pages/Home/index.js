import React from "react";
import { Parallax } from "react-parallax";
import CyberCity from "../../bg-imgs/damiano-ferrante-gS5GbmoUUnc-unsplash1.jpg";
import "./home.css";

export default function Home() {
  return (
    // <section className="home" id="home">
    <Parallax
      bgImage={CyberCity}
      bgImageAlt="city that glows in pink and light blue"
      strength={800}
      className="home-image"
      id="home"
    >
      <div className="home-content ">
        <div className="home-text text-center">
          <h1>Hi, I'm Arely</h1>
          <h4>I'm a full stack developer from Los Angeles, CA </h4>
        </div>
      </div>
    </Parallax>

    /* <article className="content-container row">
        <div className="col-sm-12 col-md-6 first-box">
          <div className="inner-first-box">
            
          </div>
        </div>

        <div className="col-sm-12 col-md-6 second-box">
          <div className="inner-second-box">
            <h2 className="pt-5">Hello!</h2>
            <p>
              I'm a <b>Full Stack Developer</b> from Los Angeles, CA with
              extensive experience in responsive web development.
            </p>
          </div>
        </div>
      </article> */
    // </section>
  );
}
