import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Jellyfish from "../../../images/bg-imgs/jared-poledna-ULyDZmchhgc-unsplash.jpg";
import "./contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setstatus] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checking to see if all input fields are full
    if (email && name && message) {
      // checking to make sure email is valid
      if (checkEmail(email)) {
        const encodedSubject = "Email From Portfolio";
        const encodedBody = `${message} - from ${name} ${email}`;

        // const link = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=arelyrivera1996@gmail.com&su=${encodedSubject}&body=${encodedBody}`

        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:arelyrivera1996@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        window.location = link;
      } else {
        setstatus("email is invalid");
      }
    } else {
      setstatus("all input fields need to be filled ");
    }
  };

  const checkEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Parallax
      bgImage={Jellyfish}
      bgImageAlt="jellyfish in pink and light blue"
      strength={800}
      className="contact-image"
    >
      <div className="contact-content" id="contact">
        <div className="contact-text">
          <h1 className="text-center">Contact Me</h1>

          <form className="px-5 py-1 text-center">
            <div className="form-group ">
              <label for="name" className="py-1 ">
                Name
              </label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                class="form-control"
              />
            </div>

            <div className="form-group">
              <label for="email" className="py-1 ">
                Email address
              </label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                class="form-control"
              />
            </div>

            <div className="form-group">
              <label for="message" className="py-1 ">
                Message
              </label>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                class="form-control"
                rows="3"
              />
            </div>

            <button
              type="submit"
              onClick={handleFormSubmit}
              class="btn btn-primary w-75 mt-3"
            >
              Submit
            </button>
          </form>

          <p>{status}</p>

          <p className="text-center"><i class="fa-solid fa-envelope"></i> Email: arelyrivera1996@gmail.com</p>
          <p className="text-center"> <i class="fa-solid fa-location-dot"></i> <span className="ml-1">Los Angeles, CA</span></p>
          <p className="text-center"> Want to set up a meeting?</p>
          <p className="text-center"><a href="https://calendly.com/arelyrivera/30min" className="text-center"><i class="fa-solid fa-mug-saucer"></i> Calendly</a></p>


        </div>
      </div>
    </Parallax>
  );
}
