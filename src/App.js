import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

/* ADMIN */
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./routes/AdminRoute";

import Dashboard from "./admin/pages/Dashboard";
import Messages from "./admin/pages/Messages";
import Services from "./admin/pages/Services";
import ServiceRequests from "./admin/pages/ServiceRequests";
import CalendarPage from "./admin/pages/CalendarPage";
import Settings from "./admin/pages/Settings";

function App() {
  return (
    <Router>

      <ScrollToTop />

      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* Default route when visiting /admin */}
          <Route index element={<Dashboard />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="services" element={<Services />} />
          <Route path="service-requests" element={<ServiceRequests />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;