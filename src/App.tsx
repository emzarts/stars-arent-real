import "./App.css";

import { Link, Route, Router, Switch } from "react-router-dom";
// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import LearnMultipleChoice from "./pages/LearnMultipleChoice";
import LearnStarMap from "./pages/LearnStarMap";
import MainPage from "./pages/MainPage";
import React from "react";
import { createBrowserHistory } from "history";
import { exampleSearch } from "./utils/wiki-test";

const history = createBrowserHistory();

const App: React.FC = () => {
  exampleSearch();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"}>
          <MainPage />
        </Route>
        <Route path="/learn-map">
          <LearnStarMap />
        </Route>
        <Route path="/learn-multiple-choice">
          <LearnMultipleChoice />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
