import "./App.css";

import { Route, Router, Switch } from "react-router-dom";

// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import LearnStarMap from "./pages/LearnStarMap";
import React from "react";
import { createBrowserHistory } from "history";
import { exampleSearch } from "./utils/wiki-test";

const history = createBrowserHistory();

const App: React.FC = () => {
  exampleSearch();
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => (
            <div className="App">
              <header className="App-header">
                <h1>Welcome to Stars Aren't Real</h1>
                <ConstellationSketcher
                  width="500"
                  height="500"
                  slideshow={true}
                />
              </header>
            </div>
          )}
        />
        <Route path="/learn-map">
          <LearnStarMap />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
