import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import profileImage from "../../assets/web.jpg";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Service Requests", path: "/admin/service-requests" },
  { name: "Calendar", path: "/admin/calendar" },
  { name: "Services", path: "/admin/services" },
  { name: "Messages", path: "/admin/messages" },
  { name: "Settings", path: "/admin/settings" },
];

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-img"
        />
        <h3 className="profile-name">Ed Lorenz</h3>
        <p className="profile-role">Administrator</p>

        {/* Logout button directly under profile role */}
        <button className="logout-btn">Logout</button>
      </div>

      {/* Navigation */}
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;