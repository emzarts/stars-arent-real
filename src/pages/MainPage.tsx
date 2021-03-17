import "./learnPage.css";

// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import { Link } from "react-router-dom";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="MainPage learnPage">
      <header className="App-header">
        <h1>Welcome to Stars Aren't Real</h1>
        <ConstellationSketcher width="500" height="500" slideshow={true} />
        <Link to="/">Home</Link>
        <Link to="/learn-map">Learn Constellation Map</Link>
        <Link to="/learn-multiple-choice">Learn Multiple Choice</Link>
        <Link to="/list">Constellation List</Link>
      </header>
    </div>
  );
};

export default MainPage;
