import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./portfolio.css";

const projectArray = [
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
  {
    name : "", 
    liveLink: "", 
    githubLink: "", 
    imgSrc: "", 
    description: ""
  }, 
]

export default function Portfolio() {
  return (
    <div id="portfolio">
      <Row xs={1} md={2} className="g-4 card-container">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
