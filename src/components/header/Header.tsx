import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="container">
        <div className="headerBlock">
          <h1 className="headerLogo">MARVEL</h1>
          <nav className="headerNav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActive" : undefined
              }
              to="/"
            >
              Герои
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActive" : undefined
              }
              to="/comics"
            >
              Комисы
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
