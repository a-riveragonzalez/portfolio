import React, { useState } from "react";
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
        const encodedSubject = "Email From Portfolio"
        const encodedBody = `${message} - from ${name} ${email}`

        // const link = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=arelyrivera1996@gmail.com&su=${encodedSubject}&body=${encodedBody}`

        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:arelyrivera1996@gmail.com?
        subject=${encodedSubject}&amp;
        body=${encodedBody}`

        window.location = link;

      } else {
        setstatus("email is invalid")
      }
    } else {
      setstatus("all input fields need to be filled ")
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
    <div className="contact-me">
      <h1 className="">Contact Me</h1>

      {/* form  */}
      <form>
        {/* label name, input name, label email, input email, label message, input text area, submit btn*/}
        <div className="form-group">
          <label for="name">Name</label>
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
          <label for="email">Email address</label>
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
          <label for="message">Message</label>
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
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <p>{status}</p>

      {/* contact information */}
      <p>
        Email :
        <a href="mailto:arelyrivera1996@gmail.com" className="p-3">
          arelyrivera1996@gmail.com
        </a>
      </p>
      <p>
        LinkedIn :
        <a
          href="https://www.linkedin.com/in/arelyriveragonzalez"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          https://www.linkedin.com/in/arelyriveragonzalez
        </a>
      </p>
      <p>
        GitHub :
        <a
          href="https://github.com/a-riveragonzalez"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          https://github.com/a-riveragonzalez
        </a>
      </p>
    </div>
  );
}
