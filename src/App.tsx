import "./App.css";

import { Route, Router, Switch } from "react-router-dom";

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
