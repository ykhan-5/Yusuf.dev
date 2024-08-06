import React, { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo">YK</div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Current
        </a>
        <a href="#" className="nav-link">
          Work+Skills
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
