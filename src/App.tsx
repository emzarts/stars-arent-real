import "./App.css";

// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import React from "react";
import logo from "./logo.svg";
import StarMap from "./StarMap";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StarMap></StarMap>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ConstellationSketcher width="500" height="500" slideshow={true} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
