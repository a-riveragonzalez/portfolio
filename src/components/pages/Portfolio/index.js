import React from "react";
import "./portfolio.css";
import Carousel from "react-bootstrap/Carousel";

import IchooseyouBattle from "../../../images/portfolio-imgs/ichooseyoubattlemenu.jpg";
import IchooseyouMatches from "../../../images/portfolio-imgs/ichooseyoumatches.jpg";
import IchooseyouMessages from "../../../images/portfolio-imgs/ichooseyoumessages.jpg";
import IchooseyouProfile from "../../../images/portfolio-imgs/ichooseyouprofile.jpg";
import IchooseyouSignup from "../../../images/portfolio-imgs/ichooseyousignup.jpg";
import ImpulseGameover from "../../../images/portfolio-imgs/impulsegameover.jpg";
import ImpulseHomepage from "../../../images/portfolio-imgs/impulsehomepage.jpg";
import ImpulsePickcard from "../../../images/portfolio-imgs/impulsepickcard.jpg";
import ImpulsePickedbuy from "../../../images/portfolio-imgs/impulsepickedbuy.jpg";
import ImpulseStartgame from "../../../images/portfolio-imgs/impulsestartgame.jpg";
import EventFanFollow from "../../../images/portfolio-imgs/eventfanfollow.png";
import EventFanFollowHomepage from "../../../images/portfolio-imgs/eventfanfollowHomepage.jpg";
import Techblog from "../../../images/portfolio-imgs/techblog.png";
import TechblogDashboard from "../../../images/portfolio-imgs/techblogDashboard.jpg";
import TechblogPost from "../../../images/portfolio-imgs/techblogPost.jpg";
import TechblogSignup from "../../../images/portfolio-imgs/techblogSignup.jpg";
import PoketypeHomepage from "../../../images/portfolio-imgs/poketypeHomepage.jpg";
import PoketypeShiny from "../../../images/portfolio-imgs/poketypeShiny.jpg";
import PoketypeWooper from "../../../images/portfolio-imgs/poketypeWooper.jpg";
import ReduxCart from "../../../images/portfolio-imgs/reduxCart.jpg";
import ReduxCheckout from "../../../images/portfolio-imgs/reduxCheckout.jpg";
import ReduxHomepage from "../../../images/portfolio-imgs/reduxHomepage.jpg";
import ReduxProduct from "../../../images/portfolio-imgs/reduxProduct.jpg";
import ReduxSelect from "../../../images/portfolio-imgs/reduxSelect.jpg";

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
                      src={ImpulseHomepage}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ImpulseStartgame}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ImpulsePickcard}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ImpulsePickedbuy}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ImpulseGameover}
                      alt="Fifth slide"
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
                      src={ReduxHomepage}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={ReduxCheckout}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={ReduxCart}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={ReduxSelect}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={ReduxProduct}
                      alt="Fifth slide"
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
                      src={PoketypeWooper}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={PoketypeShiny}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={PoketypeHomepage}
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
                      src={EventFanFollowHomepage}
                      alt="Second slide"
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
                      src={TechblogDashboard}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={TechblogPost}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={TechblogSignup}
                      alt="Fourth slide"
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
