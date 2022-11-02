import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <Carousel fade>
      {/* ********************* Item 1 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/poke-battle-2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>I Choose You</h3>
          <p>
            A responsive MERN dating web application that allows users to create
            Pokemon-themed profiles, take a quiz to determine their Pokemon, and
            match with other users to chat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 2 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/impulsescreenshot.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Impulse: The Game</h3>
          <p>
            {" "}
            A full stack browser-board-game where your character advances
            through game squares upon which they are compelled to Buy an Item or
            choose a Life Event Card that will impact your total Money and Mood
            Levels.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 3 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/event-fan-follow.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Event Fan Follow</h3>
          <p>
            Event-Fan-Follow is a web-based application utilizing HTML, CSS,
            JavaScript, JQuery, TicketMaster, and Google Maps APIs. This
            application centers on retrieving and processing data from the API
            URLs, making it a user-friendly method to simultaneously display
            event ticket information combined with geolocation directly on the
            client side.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 4 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/techblog-homepage.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Tech Blog</h3>
          <p>
            A web application,, similar to a Wordpress site, where developers
            can publish their blog posts and comment on other developers posts
            as well.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 5 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/1weather.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Weather Dashboard</h3>
          <p>
            A weather dashboard that allows users to search for a city and get
            its current weather and a five day forecast.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 6 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/note-taker.gif"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3>Note Taker</h3>
          <p>
            A web application,, similar to a Wordpress site, where developers
            can publish their blog posts and comment on other developers posts
            as well.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
