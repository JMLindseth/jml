import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from '../Homepage';
import SnakePage from "../Snake/SnakePage";

const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/snake" component={SnakePage} />
            <Route path="/" component={Homepage} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
