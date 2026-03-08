import { NavLink } from "react-router-dom";
import stiler from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={stiler.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${stiler.lenke} ${isActive ? stiler.aktiv : ""}`}
      >
        Forside
      </NavLink>
      <NavLink
        to="/konserter"
        className={({ isActive }) => `${stiler.lenke} ${isActive ? stiler.aktiv : ""}`}
      >
        Konserter
      </NavLink>
    </nav>
  );
};

export default Nav;
