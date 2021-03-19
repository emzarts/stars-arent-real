import "./mainPage.css";
// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import { Link } from "react-router-dom";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="mainPage learnPage">
      <header className="App-header">
        <div>
          <h3>Welcome to</h3>
          <h1>Stars Aren't Real</h1>
        </div>
        <p>Learn more about the night sky.</p>
        <ConstellationSketcher className="mainPhoto" slideshow={true} />
        <p>
          Choose one of the learning options below or view your progress in the
          statistics section.
        </p>
        <Link to="/list" className="page-link">
          <button>Constellation List</button>
        </Link>
        <Link to="/learn-multiple-choice" className="page-link">
          <button>Multiple Choice Quiz</button>
        </Link>
        <Link to="/constellation-map" className="page-link">
          <button>Constellation Map</button>
        </Link>
        {/* <button>Learning Statistics</button> */}
      </header>
    </div>
  );
};

export default MainPage;
