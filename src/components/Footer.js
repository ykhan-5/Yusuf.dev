import React from "react";
import "../CSS/Footer.css";

// https://www.linkedin.com/in/yusufkh/

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">© 2024 Yusuf Khan</div>
      <div className="footer-right">
        <a
          href="https://github.com/ykhan-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yusufkh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
