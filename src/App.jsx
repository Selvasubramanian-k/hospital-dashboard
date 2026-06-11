import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
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

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Derive activePage from the current URL path
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
        />
        <Routes>
          <Route path="/"             element={<Dashboard />} />
          <Route path="/patients"     element={<Patients />} />
          <Route path="/doctors"      element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/emergency"    element={<Emergency />} />
          <Route path="/laboratory"   element={<Laboratory />} />
          <Route path="/pharmacy"     element={<Pharmacy />} />
          <Route path="/billing"      element={<Billing />} />
          <Route path="/departments"  element={<Departments />} />
          <Route path="/settings"     element={<Settings />} />
          {/* Fallback */}
          <Route path="*"             element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}