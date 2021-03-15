import "./App.css";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import LearnStarMap from "./pages/LearnStarMap";
import React from "react";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => (
            <div className="App">
              <header className="App-header">
                <div>
                  <h3>Welcome to</h3>
                  <h1>Stars Aren't Real</h1>
                </div>
                <p>Learn more about the night sky.</p>
                <ConstellationSketcher slideshow={true} />
                <p>
                  Choose one of the learning options below or view your progress
                  in the statistics section.
                </p>
                <button>Constellation List</button>
                <button>Image Matching</button>
                <button>
                  <Link to="/learn-map">Map Search</Link>
                </button>
                <button>Learning Statistics</button>
              </header>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
