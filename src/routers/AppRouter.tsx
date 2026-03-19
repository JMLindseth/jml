import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forside from "../components/frontpage/Frontpage";
import Konserter from "../components/konserter/Konserter";
import Tull from "../components/tull/Tull";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/konserter" element={<Konserter />} />
        <Route path="/tull" element={<Tull />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
