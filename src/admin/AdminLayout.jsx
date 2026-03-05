import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; // ← ADD THIS
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function AdminLayout() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) document.body.classList.add("dark");
  else document.body.classList.remove("dark");
}, [darkMode]);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
     <div style={{ flex: 1, marginLeft: "230px" }}>
        <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div style={{ padding: "20px" }}>
          <Outlet /> {/* Renders nested admin routes */}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;