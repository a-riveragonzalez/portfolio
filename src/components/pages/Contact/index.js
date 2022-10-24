import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>

      {/* form  */}
      <form>
        {/* label name, input name, label email, input email, label message, input text area, submit btn*/}
        <div className="form-group">
          <label for="name">Name</label>
          <input
            value={name}
            name="name"
            // onChange={handleInputChange}
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
            // onChange={handleInputChange}
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
            // onChange={handleInputChange}
            type="text"
            placeholder="message"
            class="form-control"
            rows="3"
          />
        </div>

        <button
          type="submit"
          // onClick={handleFormSubmit}
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>

      {/* contact information */}
      <p>
        Email :   
        <a 
          href="mailto:arelyrivera1996@gmail.com"
          className="p-3">
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
