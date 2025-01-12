import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from './header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2>Routing</h2>
      <nav>
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/about">About</NavLink>
        <NavLink className={buildLinkClass} to="/users">Users</NavLink>

      </nav>
    </header>
  );
};
export default Header;
