import React, { useState } from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import Horizontal from "./Horizontal";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './css/portfolioContainer.css';


export default function PortfolioContainer() {

  return (
    <div>
      
      {<NavBar />}

      {<Home />}
      
      {<Portfolio />} 
      {<Horizontal />} 

      {<About />}
      {<Resume />}
      {<Contact />}

      {<Footer />}
    </div>
  );
}
