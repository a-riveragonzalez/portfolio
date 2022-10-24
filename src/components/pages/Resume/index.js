import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>

      {/* todo : Link to download resume  */}
      <button type="button" className="btn btn-primary btn-block w-50">Download my resume</button>

      <h4>
        Technical Skills
      </h4>

      <article className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Frontend Skills</h5>
              <p className="card-text">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap
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
