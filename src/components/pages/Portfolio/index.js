import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./portfolio.css";

const projectArray = [
  {
    name: "I Choose You",
    liveLink: "https://ichooseyou.herokuapp.com",
    githubLink: "https://github.com/a-riveragonzalez/i-choose-you",
    imgSrc: "",
    description:
      "A responsive MERN dating web application that allows users to create Pokemon-themed profiles, take a quiz to determine their Pokemon, and match with other users to chat.",
  },
  {
    name: "Impulse: The Game",
    liveLink: "https://impulse-the-game.herokuapp.com/",
    githubLink: "https://github.com/LujanSolo/Impulse",
    imgSrc: "",
    description:
      "A full stack browser-board-game where your character advances through game squares upon which they are compelled to Buy an Item or choose a Life Event Card that will impact your total Money and Mood Levels.",
  },
  {
    name: "Event Fan Follow",
    liveLink: "https://aasports89.github.io/Event-Fan-Follow/",
    githubLink: "https://github.com/AASports89/Event-Fan-Follow",
    imgSrc: "",
    description:
      "Event-Fan-Follow is a web-based application utilizing HTML, CSS, JavaScript, JQuery, TicketMaster, and Google Maps APIs. This application centers on retrieving and processing data from the API URLs, making it a user-friendly method to simultaneously display event ticket information combined with geolocation directly on the client side.",
  },
  {
    name: "Tech Blog",
    liveLink: "https://tech-blog-6.herokuapp.com/",
    githubLink: "https://github.com/a-riveragonzalez/tech-blog",
    imgSrc: "",
    description:
      "A web application, similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.",
  },
  {
    name: "Weather Dashboard",
    liveLink: "https://a-riveragonzalez.github.io/weather-dashboard/",
    githubLink: "https://github.com/a-riveragonzalez/weather-dashboard",
    imgSrc: "",
    description:
      "A weather dashboard that allows users to search for a city and get its current weather and a five day forecast.",
  },
  {
    name: "Note Taker",
    liveLink: "https://rocky-headland-83783.herokuapp.com/",
    githubLink: "https://github.com/a-riveragonzalez/note-taker",
    imgSrc: "",
    description:
      "An application that can be used to write, save, and delete notes.",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio">
      <Row xs={1} md={2} className="g-4 card-container">
        {projectArray.map((project) => (
          <Col key={project.name}>
            <Card>
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title> {project.name}</Card.Title>
                <Card.Text>
                  {project.description}
                  <a href={project.liveLink} className=""> Demo </a>
                  <a href={project.githubLink} className=""><i class="fa-solid fa-code"></i></a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
