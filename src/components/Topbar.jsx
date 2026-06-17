import React, { useState, useEffect, useRef } from "react";
import { Search, Bell, Menu, Moon, Sun, LogOut, User, ChevronDown } from "lucide-react";

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

export default function Topbar({ activePage, onMenuClick, user, onLogout }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const displayName = user?.name || "Admin";
  const displayRole = user?.role || "Super Admin";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
        {/* Theme Toggle */}
        <button
          className="topbar-btn"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Notification Bell */}
        <button className="topbar-btn">
          <Bell size={16} />
          <span className="topbar-notif-dot" />
        </button>

        {/* User Avatar Dropdown */}
        <div className="topbar-user-wrap" ref={dropdownRef}>
          <button
            className="topbar-admin"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-label="User menu"
          >
            <div className="topbar-admin-avatar">{initials}</div>
            <span>{displayName}</span>
            <ChevronDown size={14} className={`topbar-chevron${dropdownOpen ? " open" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="topbar-dropdown">
              <div className="topbar-dropdown-user">
                <div className="topbar-dropdown-avatar">{initials}</div>
                <div>
                  <div className="topbar-dropdown-name">{displayName}</div>
                  <div className="topbar-dropdown-role">{displayRole}</div>
                </div>
              </div>
              <div className="topbar-dropdown-divider" />
              <button
                className="topbar-dropdown-item"
                onClick={() => { setDropdownOpen(false); }}
              >
                <User size={14} />
                <span>My Profile</span>
              </button>
              <button
                className="topbar-dropdown-item danger"
                onClick={() => { setDropdownOpen(false); onLogout(); }}
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
