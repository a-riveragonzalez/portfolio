import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <article className="row justify-content-around">
        <img
          src="./assets/arg-face.png"
          alt="picture of Arely Rivera"
          className="col-5"
        />
        <p className="col-5">
          I'm a Full Stack Developer with a
          Bachelor's Degree in Psychology from Antioch University. I recently
          earned a certificate in Full Stack Development at UCLA Extension,
          acquiring skills in JavaScript, CSS, React.js, and responsive web
          design. I am passionate about creating efficient applications with an
          intuitive, user friendly interface. I have been recognized as
          proactive, collaborative, and a persistent problem-solver. I am also
          an excellent communicator with experience in effective client
          relationship-building skills.
        </p>
      </article>
    </section>
  );
}
