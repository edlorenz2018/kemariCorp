import "./Header.css";
import logo from "../assets/kemarilogo.png";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Home should stay active on / and /view
  const isHomeActive =
    location.pathname === "/" || location.pathname.startsWith("/view");

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kemari Technology Corporation" />
      </div>

      <nav className="nav">
        <NavLink
          to="/"
          className={isHomeActive ? "active" : ""}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </nav>

      <button className="header-btn">Get Started</button>
    </header>
  );
}

export default Header;
