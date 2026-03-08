import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forside from "../components/frontpage/Frontpage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forside />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
