import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume text-center">
      <h1>Resume</h1>

      {/* todo : Link to download resume  */}
      <a
        href="https://drive.google.com/file/d/1LIkMVGFRjzN_IkHq7whMZ7kvvePBg1W0/view?usp=sharing"
        className="btn btn-primary btn-block w-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download my resume
      </a>

      <h4 className="my-3">Technical Skills</h4>

      <article className="row row-cols-1 row-cols-md-3 justify-content-center">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Frontend Skills</h5>
              <p className="card-text">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Backend Skills</h5>
              <p className="card-text">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
