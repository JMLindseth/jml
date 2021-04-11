import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "../components/frontpage/Frontpage";
import SnakePage from "../components/Snake/SnakePage";
import CodeboxPage from "../components/Codebox/CodeboxPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/snake" component={SnakePage} />
        <Route path="/codebox" component={CodeboxPage} />
        <Route path="/" component={Frontpage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
