import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume text-center my-5" id="resume">
      <h1>Skills</h1>

      <article className="row row-cols-1 row-cols-md-3 justify-content-center ">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body ">
              <h5 className="card-title text-dark">Frontend Skills</h5>
              <p className="card-text text-dark">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-dark">Backend Skills</h5>
              <p className="card-text text-dark">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars
              </p>
            </div>
          </div>
        </div>
      </article>

      <a
        href="https://drive.google.com/uc?export=download&id=1DvMTtwreNFTG1Sg9Q9M6F6qT1pVAMGJn"
        className="btn btn-primary btn-block w-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download my resume
      </a>
    </div>
  );
}
