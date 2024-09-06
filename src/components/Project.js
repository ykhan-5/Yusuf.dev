import React from "react";
import "../CSS/Project.css";
import box from "../assets/box.png";
import codepath from "../assets/code.png";
import plant from "../assets/plant.png";
import dsa from "../assets/DSA.png";
import conoco from "../assets/conoco.png";

const Project = () => {
  return (
    <div className="Project-container" id="projects">
      <div className="Project-title">Past Work</div>
      <div className="Project-card">
        <img className="icon" src={box} alt="3D Icon" />
        <div className="Project-card-title">
          DropAwf - Fullstack Database Project
        </div>
        <div className="Project-card-text">
          <ul>
            <li>Developed a postal Database using Azure-hosted MySQL</li>
            <li>
              Collaborated with team members using Git for version control
            </li>
            <li>
              Developed a full-stack application, leveraging React.js and
              JavaScript.
            </li>
          </ul>
        </div>
      </div>
      <div className="Project-card">
        <img className="icon" src={conoco} alt="3D Icon" />
        <div className="Project-card-title">
          Conoco Phillips Innovation Challenge 2024
        </div>
        <div className="Project-card-text">
          <ul>
            <li>
              Selected to tackle the challenge of optimizing drilling operations
              by determining when to drill or repair oil wells.
            </li>
            <li>
              Utilized a supervised binary classification approach with SVC and
              Logistic Regression to predict equipment failures.
            </li>
            <li>
              Integrated ConocoPhillips' REST API to retrieve and process large
              datasets, ensuring efficient model training.
            </li>
          </ul>
        </div>
      </div>
      <div className="Project-card">
        <img className="icon" src={plant} alt="3D Icon" />
        <div className="Project-card-title">
          WM Buisness Optimization and Data Intern
        </div>
        <div className="Project-card-text">
          <ul>
            <li>
              Validated bulk ordering eligibility for 1,500+ zones on WM.com
            </li>
            <li>
              Utlized AWS Lex for intent/response control and Snowflake for data
              analytics.
            </li>
            <li>
              Created 50+ SQL scripts and comprehensive documentation for the
              chatbot team
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
