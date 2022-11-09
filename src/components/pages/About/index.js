import React from "react";
import { Parallax } from "react-parallax";
import PuzzleBrain from "../../../images/bg-imgs/taras-hrytsak-VIEfAkW-9c0-unsplash.jpg";
import ArgFace from "../../../images/portfolio-imgs/arg-face.png";
import "./about.css";

export default function About() {
  return (
    <Parallax
      bgImage={PuzzleBrain}
      bgImageAlt="puzzle pieces colored pink and light blue"
      strength={800}
      className="about-image"
    >
      <section className="about-content" id="about">
        <div className="about-text text-center">
          <h2 className="mb-3">About Me</h2>
          <article className="row justify-content-around ">
            <figure className="snip1033 col-xl-3 col-lg-4 col-md-5 col-sm-12 arg-img">
              <img src={ArgFace} alt="picture of Arely Rivera" />
              <figcaption>
                <div className="left">
                  <a href="https://github.com/a-riveragonzalez">
                    <h3>Github <i class="fa-brands fa-github"></i></h3>
            
                  </a>
                </div>
                <div className="right">
                  <a href="https://www.linkedin.com/in/arelyriveragonzalez/">
                    <h3 className="white">LinkedIn <i class="fa-brands fa-linkedin text-dark"></i></h3>

                  </a>
                </div>
              </figcaption>
              <div className="center">
                <i className="ion-ios-loop-strong fa-solid fa-rotate"></i>
              </div>
            </figure>

            <p className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
              I'm a Full Stack Developer with a Bachelor's Degree in Psychology
              from Antioch University. I recently earned a certificate in Full
              Stack Development at UCLA Extension, acquiring skills in
              JavaScript, CSS, React.js, and responsive web design. I am
              passionate about creating efficient applications with an
              intuitive, user friendly interface. I have been recognized as
              proactive, collaborative, and a persistent problem-solver. I am
              also an excellent communicator with experience in effective client
              relationship-building skills.
            </p>
          </article>
        </div>
      </section>
    </Parallax>
  );
}
