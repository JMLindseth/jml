import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from '../Homepage';
import Snake from "../Snake";

const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/snake" component={Snake} />
            <Route path="/" component={Homepage} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
