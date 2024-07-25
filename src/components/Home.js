import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="card0">card0</div>
        <div className="card1">
          <div className="content">
            <div>Image</div>
            <div>title</div>
            <div>Notes</div>
          </div>
        </div>
        <div className="card2">card2</div>
        <div className="card3">card3</div>
        <div className="card4">
          <button class="button-73" role="button">
            <span class="text">See my Resume!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
