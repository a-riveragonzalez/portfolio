import React from "react";
import './portfolio.css';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      {/* ************************* Carousel ***************************** */}
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      {/* ***************************************************************************** */}
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
