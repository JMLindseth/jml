import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Frontpage from "../components/frontpage/Frontpage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
