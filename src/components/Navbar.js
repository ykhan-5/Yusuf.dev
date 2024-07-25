import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div>Yusuf Khan</div>
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
