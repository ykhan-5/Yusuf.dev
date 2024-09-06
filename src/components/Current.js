import React from "react";
import "../CSS/Current.css";
import curly from "../assets/Curly.png";
import codepath from "../assets/code.png";
import ion from "../assets/Ion.png";
import dsa from "../assets/DSA.png";

const Current = () => {
  return (
    <div className="Current-container" id="current">
      <div className="Current-title">Currently..</div>
      <div className="Current-card">
        <img className="icon" src={curly} alt="3D Icon" />
        <div className="Current-card-title">HCSS API Intern</div>
        <div className="Current-card-text">
          In my role as an API Intern at HCSS, I'll be developing and updating
          API documentation, working closely with developers and product
          managers to ensure accuracy, and expanding my knowledge base in API
          documentation and technical writing.
        </div>
      </div>

      <div className="Current-card">
        <img className="icon" src={ion} alt="3D Icon" />
        <div className="Current-card-title">Ion Student Ambassador</div>
        <div className="Current-card-text">
          Serve as a representative of the University of Houston within the Ion
          community, helping to bridge the gap between the academic institution
          and the Ion’s resources.
        </div>
      </div>
      <div className="Current-card">
        <img className="icon" src={dsa} alt="3D Icon" />
        <div className="Current-card-title">
          Data Structures SEP Facilitator
        </div>
        <div className="Current-card-text">
          As a workshop facilitator for over 30 students, I provide interactive
          sessions to reinforce Data Structures concepts. I offer tailored
          support to address individual learning obstacles, contributing to a
          10% increase in exam averages.
        </div>
      </div>
      <div className="Current-card">
        <img className="icon" src={codepath} alt="3D Icon" />
        <div className="Current-card-title">Codepath Fellow</div>
        <div className="Current-card-text">
          Enrolled in a 10-week Advanced Software Engineering course designed to
          excel in technical interviews. The course focuses on core and complex
          data structures, search and sorting algorithms, recursion, dp, and
          greedy.
        </div>
      </div>
    </div>
  );
};

export default Current;
