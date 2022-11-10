import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./portfolio.css";

import Ichooseyou from "../../../images/portfolio-imgs/ichooseyoumatchpage.png";
import Impulse from "../../../images/portfolio-imgs/impulsestartgame.png";
import EventFanFollow from "../../../images/portfolio-imgs/eventfanfollow.png";
import Techblog from "../../../images/portfolio-imgs/techblog.png";
import WeatherDashboard from "../../../images/portfolio-imgs/weatherdashboardpage.png";
import Notetaker from "../../../images/portfolio-imgs/note-taker.png";

const projectArray = [
  {
    name: "I Choose You",
    liveLink: "https://ichooseyou.herokuapp.com",
    githubLink: "https://github.com/a-riveragonzalez/i-choose-you",
    imgSrc: Ichooseyou,
    description:
      "A responsive MERN dating web application that allows users to create Pokemon-themed profiles, take a quiz to determine their Pokemon, and match with other users to chat.",
  },
  {
    name: "Impulse: The Game",
    liveLink: "https://impulse-the-game.herokuapp.com/",
    githubLink: "https://github.com/LujanSolo/Impulse",
    imgSrc: Impulse,
    description:
      "A full stack browser-board-game where your character advances through game squares upon which they are compelled to Buy an Item or choose a Life Event Card that will impact your total Money and Mood Levels.",
  },
  {
    name: "Event Fan Follow",
    liveLink: "https://aasports89.github.io/Event-Fan-Follow/",
    githubLink: "https://github.com/AASports89/Event-Fan-Follow",
    imgSrc: EventFanFollow,
    description:
      "A web-based application that centers on retrieving and processing data from the API URLs, making it a user-friendly method to simultaneously display event ticket information combined with geolocation directly on the client side.",
  },
  {
    name: "Tech Blog",
    liveLink: "https://tech-blog-6.herokuapp.com/",
    githubLink: "https://github.com/a-riveragonzalez/tech-blog",
    imgSrc: Techblog,
    description:
      "A web application, similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.",
  },
  {
    name: "Weather Dashboard",
    liveLink: "https://a-riveragonzalez.github.io/weather-dashboard/",
    githubLink: "https://github.com/a-riveragonzalez/weather-dashboard",
    imgSrc: WeatherDashboard,
    description:
      "A weather dashboard that allows users to search for a city and get its current weather and a five day forecast.",
  },
  {
    name: "Note Taker",
    liveLink: "https://rocky-headland-83783.herokuapp.com/",
    githubLink: "https://github.com/a-riveragonzalez/note-taker",
    imgSrc: Notetaker,
    description:
      "A web application that can be used to write, save, and delete notes.",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio text-center ">
      <div className="diagonal-line"> </div>
      <h2 className="mb-3 ">Projects</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
        {/* *********** 1st item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Ichooseyou} className="card-img-top" alt="..."></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">I Choose You</h5>
                  <p className="card-text text-dark">
                    A responsive MERN dating web application that allows users
                    to create Pokemon-themed profiles, take a quiz to determine
                    their Pokemon, and match with other users to chat.
                  </p>
                  <a
                    href="https://ichooseyou.herokuapp.com"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/a-riveragonzalez/i-choose-you"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 2nd item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Impulse} className="card-img-top" alt="..."></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Impulse: The Game</h5>
                  <p className="card-text text-dark">
                    A full stack browser-board-game where your character
                    advances through game squares upon which they are compelled
                    to Buy an Item or choose a Life Event Card that will impact
                    your total Money and Mood Levels.
                  </p>
                  <a
                    href="https://impulse-the-game.herokuapp.com/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/LujanSolo/Impulse"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 3rd item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={EventFanFollow}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Event Fan Follow</h5>
                  <p className="card-text text-dark">
                    A web-based application that centers on retrieving and
                    processing data from the API URLs, making it a user-friendly
                    method to simultaneously display event ticket information
                    combined with geolocation directly on the client side.
                  </p>
                  <a
                    href="https://aasports89.github.io/Event-Fan-Follow/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/AASports89/Event-Fan-Follow"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 4th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Techblog} className="card-img-top" alt="..."></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Tech Blog</h5>
                  <p className="card-text text-dark">
                    A web application, similar to a Wordpress site, where
                    developers can publish their blog posts and comment on other
                    developers posts as well.
                  </p>
                  <a
                    href="https://tech-blog-6.herokuapp.com/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/a-riveragonzalez/tech-blog"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 5th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={WeatherDashboard}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Weather Dashboard</h5>
                  <p className="card-text text-dark">
                    A weather dashboard that allows users to search for a city
                    and get its current weather and a five day forecast.
                  </p>
                  <a
                    href="https://a-riveragonzalez.github.io/weather-dashboard/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/a-riveragonzalez/weather-dashboard"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 6th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Notetaker} className="card-img-top" alt="..."></img>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Note Taker</h5>
                  <p className="card-text text-dark">
                    A web application that can be used to write, save, and
                    delete notes.
                  </p>
                  <a
                    href="https://rocky-headland-83783.herokuapp.com/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/a-riveragonzalez/note-taker"
                    className="btn btn-primary"
                  >
                    {" "}
                    <i className="fa-solid fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
