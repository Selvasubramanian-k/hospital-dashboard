import React, { useState } from "react";
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

const pages = {
  dashboard: Dashboard,
  patients: Patients,
  doctors: Doctors,
  appointments: Appointments,
  emergency: Emergency,
  laboratory: Laboratory,
  pharmacy: Pharmacy,
  billing: Billing,
  departments: Departments,
  settings: Settings,
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const PageComponent = pages[activePage] || Dashboard;

  const handleNavigate = (page) => {
    setActivePage(page);
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
        <PageComponent />
      </div>
    </div>
  );
}
