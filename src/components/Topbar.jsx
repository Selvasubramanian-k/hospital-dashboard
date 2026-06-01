import React, { useState, useEffect } from "react";
import { Search, Bell, Menu, Moon, Sun } from "lucide-react";

const pageTitles = {
  dashboard: "Dashboard Overview",
  patients: "Patients",
  doctors: "Doctors",
  appointments: "Appointments",
  emergency: "Emergency",
  laboratory: "Laboratory",
  pharmacy: "Pharmacy",
  billing: "Billing",
  departments: "Departments",
  settings: "Settings",
};

export default function Topbar({ activePage, onMenuClick }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="topbar">
      <button className="topbar-menu-btn" onClick={onMenuClick} aria-label="Open sidebar">
        <Menu size={20} />
      </button>

      <div className="topbar-title">
        <span>+ </span>{pageTitles[activePage] || "Dashboard"}
      </div>

      <div className="topbar-search">
        <Search className="topbar-search-icon" />
        <input placeholder="Search patient, doctor, ID..." />
      </div>

      <div className="topbar-actions">
        {/* Theme Toggle Button */}
        <button
          className="topbar-btn"
          onClick={() => setIsDark(prev => !prev)}
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button className="topbar-btn">
          <Bell size={16} />
          <span className="topbar-notif-dot" />
        </button>

        <div className="topbar-admin">
          <div className="topbar-admin-avatar">AD</div>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}