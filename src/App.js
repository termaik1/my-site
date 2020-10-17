import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Progress from "./pages/progress";
import Home from "./pages/home";
import MyProjects from "./pages/myProjects";
import Materials from "./pages/materials"

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/my-projects" component={MyProjects} />
          <Route exact path="/materials" component={Materials} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
