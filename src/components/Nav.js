import React from "react";
import './css/nav.css';

function Nav() {
  return (
    <div className="side-nav">
      <ul className="nav-ul m-3 p-0 text-center">
        <li className="nav-li my-3">
          <a
            href="#home"
            className="nav-a nav-home"
          >
            Home 
            <i class="fa-solid fa-house fa-2x nav-i"></i>
          </a>
        </li>
        <li className="nav-li mb-3">
          <a
            href="#portfolio"
            className="nav-a nav-port"
          >
            Projects
            <i class="fa-solid fa-table-cells fa-2x nav-i"></i>
          </a>
        </li>
        <li className="nav-li mb-3">
          <a
            href="#about"
            className="nav-a nav-about"
          >
            About
            <i class="fa-solid fa-user fa-2x nav-i"></i>
          </a>
        </li>
        <li className="nav-li mb-3">
          <a
            href="#resume"
            className="nav-a nav-skill"
          >
            Skills
            <i class="fa-solid fa-file-lines fa-2x nav-i"></i>
          </a>
        </li>
        <li className="nav-li mb-3">
          <a
            href="#contact"
            className="nav-a nav-contact-me"
            id="nav-contact-me"
          >
            Contact
            <i class="fa-solid fa-envelope fa-2x nav-i"></i>
          </a>
        </li>
      </ul>
    </div>
    
  );
}

export default Nav;
