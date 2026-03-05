import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Topbar.css";

function Topbar({ darkMode, setDarkMode }) {
  return (
    <div className="topbar">
      <h2>Admin Panel</h2>
      
      {/* Icon Button */}
      <button className="darkmode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
}

export default Topbar;