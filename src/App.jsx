import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Patients from "./pages/Patients.jsx";
import Doctors from "./pages/Doctors.jsx";
import Appointments from "./pages/Appointments.jsx";
import Emergency from "./pages/Emergency.jsx";
import Laboratory from "./pages/Laboratory.jsx";
import Pharmacy from "./pages/Pharmacy.jsx";
import Billing from "./pages/Billing.jsx";
import Departments from "./pages/Departments.jsx";
import Settings from "./pages/Settings.jsx";

function AppLayout({ user, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = location.pathname.replace("/", "") || "dashboard";

  const handleNavigate = (page) => {
    navigate(page === "dashboard" ? "/" : `/${page}`);
    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <div
        className={`sidebar-overlay${sidebarOpen ? " active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main-content">
        <Topbar
          activePage={activePage}
          onMenuClick={() => setSidebarOpen(true)}
          user={user}
          onLogout={onLogout}
        />
        <Routes>
          <Route path="/"             element={<Dashboard user={user} />} />
          <Route path="/patients"     element={<Patients />} />
          <Route path="/doctors"      element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/emergency"    element={<Emergency />} />
          <Route path="/laboratory"   element={<Laboratory />} />
          <Route path="/pharmacy"     element={<Pharmacy />} />
          <Route path="/billing"      element={<Billing />} />
          <Route path="/departments"  element={<Departments />} />
          <Route path="/settings"     element={<Settings />} />
          <Route path="*"             element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    // Check sessionStorage first, then localStorage
    const session = sessionStorage.getItem("mmh_user");
    const local = localStorage.getItem("mmh_user");
    if (session) return JSON.parse(session);
    if (local) return JSON.parse(local);
    return null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("mmh_user");
    localStorage.removeItem("mmh_user");
    setUser(null);
  };

  if (!user) {
    return (
      <BrowserRouter>
        <Login onLogin={handleLogin} />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppLayout user={user} onLogout={handleLogout} />
    </BrowserRouter>
  );
}
