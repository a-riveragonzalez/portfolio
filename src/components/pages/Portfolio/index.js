import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <Carousel fade>
      {/* ********************* Item 1 ************************ */}
      <Carousel.Item>
        <a href="https://ichooseyou.herokuapp.com">
          <img
            className="d-block w-100"
            src="./assets/poke-battle-2.png"
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3>I Choose You</h3>
          <p>
            A responsive MERN dating web application that allows users to create
            Pokemon-themed profiles, take a quiz to determine their Pokemon, and
            match with other users to chat.
          </p>
          <p>
            <strong>Tools Used : </strong>Javascript, React, GraphQL, Node.js,
            Express.js, MongoDB, Mongoose ODM, JWT, CSS, Bootstrap
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/a-riveragonzalez/i-choose-you"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 2 ************************ */}
      <Carousel.Item>
        <a href="https://impulse-the-game.herokuapp.com/">
          <img
            className="d-block w-100"
            src="./assets/impulsescreenshot.png"
            alt="Second slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Impulse: The Game</h3>
          <p>
            {" "}
            A full stack browser-board-game where your character advances
            through game squares upon which they are compelled to Buy an Item or
            choose a Life Event Card that will impact your total Money and Mood
            Levels.
          </p>
          <p>
            <strong>Tools Used : </strong>JavaScript, Node.js, Express,
            Sequelize, Handlebars, MVC structure, Cloudinary, Bcrypt, .ENV,
            jQuery, Bootstrap, HTML, CSS, Google Fonts
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/LujanSolo/Impulse"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 3 ************************ */}
      <Carousel.Item>
        <a href="https://aasports89.github.io/Event-Fan-Follow/">
          <img
            className="d-block w-100"
            src="./assets/event-fan-follow.gif"
            alt="Third slide"
          />
        </a>
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
          <p>
            <strong>Tools Used : </strong>HTML, CSS, JavaScript, jQuery,
            Bootstrap, MomentJS, Google Fonts, TicketMaster API, Google Maps API
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/AASports89/Event-Fan-Follow"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 4 ************************ */}
      <Carousel.Item>
        <a href="https://tech-blog-6.herokuapp.com/">
          <img
            className="d-block w-100"
            src="./assets/techblog-homepage.png"
            alt="Fourth slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Tech Blog</h3>
          <p>
            A web application, similar to a Wordpress site, where developers can
            publish their blog posts and comment on other developers posts as
            well.
          </p>
          <p>
            <strong>Tools Used : </strong>JavaScript, CSS, MVC, MySql,
            Express.js, Node.js, Sequelize, Handlebars, Bootstrap, Google Fonts,
            and bcrypt
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/a-riveragonzalez/tech-blog"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 5 ************************ */}
      <Carousel.Item>
        <a href="https://a-riveragonzalez.github.io/weather-dashboard/">
          <img
            className="d-block w-100"
            src="./assets/1weather.png"
            alt="Fifth slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Weather Dashboard</h3>
          <p>
            A weather dashboard that allows users to search for a city and get
            its current weather and a five day forecast.
          </p>
          <p>
            <strong>Tools Used : </strong>HTML, CSS, JavaScript, jQuery,
            Bootstrap, MomentJS, Google Fonts, OpenWeather API
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/a-riveragonzalez/weather-dashboard"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* TODO Item 6 ************************ */}
      <Carousel.Item>
        <a href="https://rocky-headland-83783.herokuapp.com/">
          <img
            className="d-block w-100"
            src="./assets/note-taker.gif"
            alt="Sixth slide"
          />
        </a>
        <Carousel.Caption>
          <h3>Note Taker</h3>
          <p>
            An application that can be used to write, save, and delete notes.
          </p>
          <p>
            <strong>Tools Used : </strong>Express.js, JavaScript, HTML, CSS,
            Bootstrap, and FontAwesome
          </p>
          <p>
            GitHub :{" "}
            <a
              href="https://github.com/a-riveragonzalez/note-taker"
              className="fa-solid fa-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
