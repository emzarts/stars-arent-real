import "./App.css";

import { Route, Router, Switch } from "react-router-dom";

// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import React from "react";
import { createBrowserHistory } from "history";
import StarMap from "./StarMap";
import MultipleChoice from "./MultipleChoice";
import logo from "./logo.svg";

const history = createBrowserHistory();

const App: React.FC = () => {
  const learnReactString = "Learn React";

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => (
            <div className="App">
              <header className="App-header">
                <StarMap></StarMap>
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <ConstellationSketcher
                  width="500"
                  height="500"
                  slideshow={true}
                />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {learnReactString}
                </a>
              </header>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
