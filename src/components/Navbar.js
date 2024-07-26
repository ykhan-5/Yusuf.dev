import React from "react";
import "../CSS/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
