import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Frontpage from "../components/frontpage/Frontpage";
import SnakePage from "../components/Snake/SnakePage";
import CodeboxPage from "../components/Codebox/CodeboxPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/snake" element={<SnakePage/>}/>
        <Route path="/codebox" element={<CodeboxPage/>}/>
        <Route path="/" element={<Frontpage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
