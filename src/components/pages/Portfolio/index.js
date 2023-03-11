import React from "react";
import "./portfolio.css";
import Carousel from "react-bootstrap/Carousel";

import IchooseyouBattle from "../../../images/portfolio-imgs/ichooseyoubattlemenu.jpg";
import IchooseyouMatches from "../../../images/portfolio-imgs/ichooseyoumatches.jpg";
import IchooseyouMessages from "../../../images/portfolio-imgs/ichooseyoumessages.jpg";
import IchooseyouProfile from "../../../images/portfolio-imgs/ichooseyouprofile.jpg";
import IchooseyouSignup from "../../../images/portfolio-imgs/ichooseyousignup.jpg";
import Impulse from "../../../images/portfolio-imgs/impulsestartgame.png";
import EventFanFollow from "../../../images/portfolio-imgs/eventfanfollow.png";
import Techblog from "../../../images/portfolio-imgs/techblog.png";
import Pokestats from "../../../images/portfolio-imgs/pokestats.png";
import ReduxStore from "../../../images/portfolio-imgs/shop-shop.png";

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio text-center ">
      <div className="diagonal-line"> </div>
      <h2 className="mb-3 ">Projects</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
        {/* *********** 1st item *********** */}
        <div className="col mb-4">
          <div className="card flip-card h-100">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Carousel fade interval={null}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouMessages}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouMatches}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouBattle}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouSignup}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                </Carousel>
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
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 2nd item *********** */}
        <div className="col mb-4">
          <div className="card flip-card h-100">
            <div className="flip-card-inner ">
              <div className="flip-card-front">
                <Carousel fade interval={null}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Impulse The Game</h5>
                  <p className="card-text text-dark">
                    A full stack board game where your character advances and is
                    compelled to buy an Item card or choose a Life Event Card
                    that will impact your total Money and Mood Levels.
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
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 3rd item *********** */}
        <div className="col mb-4">
          <div className="card flip-card  h-100">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <Carousel fade interval={null}>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={ReduxStore}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Redux Store</h5>
                  <p className="card-text text-dark">
                    A full stack responsive MERN e-commerce web application that
                    uses Redux to allow users to log in, browse products, add
                    products to a cart, and checkout with stripe.
                  </p>
                  <a
                    href="https://random-store-redux.herokuapp.com/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/a-riveragonzalez/redux-store"
                    className="btn btn-primary"
                  >
                    {" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 4th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card h-100">
            <div className="flip-card-inner ">
              <div className="flip-card-front">
              <Carousel fade interval={null}>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Pokestats}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Pokemon Type Stats</h5>
                  <p className="card-text text-dark">
                    A responsive web application that uses React and the Pokemon
                    API to allow users to search for a Pokemon and view its
                    sprite, shiny form, defensive and offensive stats.
                  </p>
                  <a
                    href="https://pokemon-stats.herokuapp.com/"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Demo{" "}
                  </a>
                  <a
                    href="https://github.com/mladame/pokemon-type-index"
                    className="btn btn-primary"
                  >
                    {" "}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 5th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card  h-100">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <Carousel fade interval={null}>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={EventFanFollow}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Event Fan Follow</h5>
                  <p className="card-text text-dark">
                    A web application that uses Ticket Master and Google Maps
                    API to make a user-friendly method to simultaneously display
                    event ticket information with geolocation.
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
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********** 6th item *********** */}
        <div className="col mb-4">
          <div className="card flip-card  h-100">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <Carousel fade interval={null}>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Techblog}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={Impulse}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={IchooseyouProfile}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title text-dark">Tech Blog</h5>
                  <p className="card-text text-dark">
                    A web application, similar to a Wordpress site, where
                    developers can create an account, publish their blog posts,
                    and comment on other developers posts as well.
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
                    GitHub
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
