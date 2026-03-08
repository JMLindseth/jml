import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forside from "../components/frontpage/Frontpage";
import Konserter from "../components/konserter/Konserter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/konserter" element={<Konserter />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
