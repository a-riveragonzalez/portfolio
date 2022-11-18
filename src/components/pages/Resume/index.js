import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume text-center my-5" id="resume">
      <h1 className="mb-4">Resume</h1>

      <article className="row row-cols-1 row-cols-md-3 justify-content-center ">
        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body ">
              <h5 className="card-title ">Frontend Skills</h5>
              <hr></hr>
              <p className="card-text ">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body">
              <h5 className="card-title ">Backend Skills</h5>
              <hr></hr>
              <p className="card-text ">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars
              </p>
            </div>
          </div>
        </div>
      </article>

      <hr></hr>

      <div>
        <h3>Like what you see? </h3>

        <div className="d-flex justify-content-center">
          <div className="card h-100 w-50 inverted-2">
            <div className="card-body">
              <a
                href="https://drive.google.com/uc?export=download&id=1DvMTtwreNFTG1Sg9Q9M6F6qT1pVAMGJn"
                className="btn btn-primary btn-block w-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
