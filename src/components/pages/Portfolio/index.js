import React from "react";
import './portfolio.css';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <section className="cards">
          <article className="first-card">
            <a href="https://impulse-the-game.herokuapp.com/">
              <img
                src="./assets/impulsescreenshot.png"
                alt="impulse the game homescreen"
            /></a>
            <div>
              <h3>Impulse: The Game</h3>
              <p>
                JavaScript, Node.js, Express, Sequelize, Handlebars, MVC
                structure, Cloudinary, Bcrypt, .ENV, jQuery, Bootstrap, HTML,
                CSS, Google Fonts
              </p>
              <p className="project-summary">
                GitHub Repository :
                {/* <a href="https://github.com/LujanSolo/Impulse"
                  >https://github.com/LujanSolo/Impulse</a
                > */}
                <br />
                <br />
                A full stack browser game that allows you to go through a game
                board each turn and either purchase an item or choose a random
                life event card that will impact your total money and total mood
                level.
              </p>
            </div>
          </article>

          <article>
            <a href="https://aasports89.github.io/Event-Fan-Follow/">
              <img
                src="./assets/event-fan-follow.gif"
                alt="Event Fan Follow Gif"
            /></a>
            <div>
              <h3>Event Fan Follow</h3>
              <p>
                HTML, CSS, JavaScript, jQuery, Bootstrap, MomentJS, Google
                Fonts, TicketMaster API, Google Maps API
              </p>
              <p className="project-summary">
                GitHub Repository :
                {/* <a href="https://github.com/AASports89/Event-Fan-Follow"
                  >https://github.com/AASports89/Event-Fan-Follow</a
                > */}
                <br />
                <br />
                A web application that allows a user to search for a city, date,
                and event type then be presented with a list of events that meet
                the criteria along with links to purchase tickets. A map will
                also be displayed with the location of the events venues.
              </p>
            </div>
          </article>

          <article>
            <a href="https://a-riveragonzalez.github.io/weather-dashboard/">
              <img
                src="./assets/1weather.png"
                alt="Weather Dashboard Gif"
            /></a>
            <div>
              <h3>Weather Dashboard</h3>
              <p>
                HTML, CSS, JavaScript, jQuery, Bootstrap, MomentJS, Google
                Fonts, OpenWeather API
              </p>
              <p className="project-summary">
                GitHub Repository :
                {/* <a href="https://github.com/a-riveragonzalez/weather-dashboard"
                  >https://github.com/a-riveragonzalez/weather-dashboard</a
                > */}
                <br />
                <br />
                A weather dashboard that allows users to search for a city and
                get its current weather and a five day forecast.
              </p>
            </div>
          </article>
        </section>
    </div>
  );
}
