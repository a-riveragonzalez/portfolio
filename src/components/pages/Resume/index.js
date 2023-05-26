import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume text-center my-5" id="resume">
      <h1 className="mb-4">Resume</h1>

      <article className="row row-cols-1 row-cols-md-2 justify-content-center ">
        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body ">
              <h5 className="card-title ">Languages</h5>
              <hr></hr>
              <p className="card-text ">
              JavaScript ES6+ | HTML5 | CSS3
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body">
              <h5 className="card-title ">Frameworks</h5>
              <hr></hr>
              <p className="card-text ">
              React.js | Node.js | Next.js | Express.js | Tailwind CSS | Redux | JQuery | Bootstrap | Handlebars
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body">
              <h5 className="card-title ">Databases</h5>
              <hr></hr>
              <p className="card-text ">
              MySQL | NoSQL | MongoDB | GraphQL
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100 inverted-2">
            <div className="card-body">
              <h5 className="card-title ">Tools</h5>
              <hr></hr>
              <p className="card-text ">
              Git | GitHub | Figma
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
                href="https://drive.google.com/uc?export=download&id=1Cny5fTwkWg7rbOIYeQIE52NSzflQR2_6"
                className="btn btn-primary btn-block w-100"
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
