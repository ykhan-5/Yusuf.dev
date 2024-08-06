import React from "react";
import "../CSS/About.css";
import codep from "../assets/code.png";
import computer from "../assets/computer.png";
import math from "../assets/math.png";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          Yusuf is a developer{" "}
          <img className="icon" src={computer} alt="3D Icon" />
          &nbsp;and a student based in Houston. He is a Facilitator for a Data
          Structures Workshop at UH{" "}
          <img className="icon" src={math} alt="3D Icon" /> as well as an intern
          at <span className="HCSS">HCSS</span>.{" "}
          {/*In his free time, he designs 3D
          icons such as these &rarr; and works on technical interviewing through
          being a Codepath Fellow&nbsp;
          <img className="icon" src={codep} alt="3D Icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <video
src={star}
autoPlay
loop
muted
style={{ width: "200px", height: "auto" }}
></video> */
}
