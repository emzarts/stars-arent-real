import "./App.css";

import { Route, Router, Switch } from "react-router-dom";
import ConstellationMap from "./pages/constellationMap/ConstellationMap";
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
        <Route path="/constellation-map" component={ConstellationMap} />
      </Switch>
    </Router>
  );
};

export default App;
