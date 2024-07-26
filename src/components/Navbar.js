import React from "react";
import "../CSS/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="links">
          <div>Home</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
