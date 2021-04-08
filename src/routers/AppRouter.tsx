import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from '../components/Homepage';
import SnakePage from "../components/Snake/SnakePage";
import CodeboxPage from "../components/Codebox/CodeboxPage";

const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/snake" component={SnakePage} />
            <Route path="/codebox" component={CodeboxPage} />
            <Route path="/" component={Homepage} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
