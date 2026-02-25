import "./Header.css";
import logo from "../assets/kemarilogohero.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

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
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </nav>

      <button
        className="header-btn"
        onClick={() => {
          if (location.pathname !== "/") {
            navigate("/#hero-section");
          } else {
            const hero = document.getElementById("hero-section");
            if (hero) {
              hero.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      >
        Get Started
      </button>
    </header>
  );
}

export default Header;