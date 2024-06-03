import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/post">Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
