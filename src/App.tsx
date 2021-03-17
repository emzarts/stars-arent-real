import "./App.css";

import { Link, Route, Router, Switch } from "react-router-dom";
// @ts-ignore
import ConstellationSketcher from "react-constellation-sketcher";
import LearnMultipleChoice from "./pages/LearnMultipleChoice";
import LearnStarMap from "./pages/LearnStarMap";
import MainPage from "./pages/MainPage";
import React from "react";
import { exampleSearch } from "./utils/wiki-test";
import history from "./utils/history";

const App: React.FC = () => {
  exampleSearch();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/learn-map"} component={LearnStarMap} />
        <Route
          path={"/learn-multiple-choice"}
          component={LearnMultipleChoice}
        />
      </Switch>
    </Router>
  );
};

export default App;
