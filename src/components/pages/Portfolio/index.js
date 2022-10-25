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
          src="./assets/impulsescreenshot.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 2 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/event-fan-follow.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* ********************* Item 3 ************************ */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/1weather.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
