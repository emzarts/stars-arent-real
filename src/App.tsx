import "./App.css";

import { Route, Router, Switch } from "react-router-dom";

import ConstellationInfo from "./pages/constellationInfo/ConstellationInfo";
import ConstellationMap from "./pages/constellationMap/ConstellationMap";
import LearnMultipleChoice from "./pages/LearnMultipleChoice";
import LearnStarMap from "./pages/LearnStarMap";
import ListPage from "./pages/constellationList/ConstellationList";
import MainPage from "./pages/mainPage/MainPage";
import React from "react";
import history from "./utils/history";

const App: React.FC = () => {
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
        <Route path={"/list"} component={ListPage} />
        <Route path={"/:name"} component={ConstellationInfo} />
      </Switch>
    </Router>
  );
};

export default App;
