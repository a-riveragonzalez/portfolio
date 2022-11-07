import React from "react";
import './css/nav.css';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <div className="side-nav">
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#home" className="">Home</Nav.Link>

        <Nav.Link href="#portfolio">Projects</Nav.Link>

        <Nav.Link href="#about">About</Nav.Link>

        <Nav.Link href="#resume">Skills</Nav.Link>

        <Nav.Link href="#contact">Contact</Nav.Link>

        </Nav> 
     {/* <ul className="nav-ul m-3 p-0 text-center">
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
          >
            Contact
            <i class="fa-solid fa-envelope fa-2x nav-i"></i>
          </a>
        </li> 
    
      </ul>  */}
    </div>
    
  );
}

export default NavBar;
