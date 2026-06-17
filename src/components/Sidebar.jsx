import React from "react";
import {
  LayoutDashboard, Users, Stethoscope, Calendar,
  AlertTriangle, FlaskConical, Pill, Receipt,
  Building2, Settings, X,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",    key: "dashboard" },
  { icon: Users,           label: "Patients",     key: "patients" },
  { icon: Stethoscope,     label: "Doctors",      key: "doctors" },
  { icon: Calendar,        label: "Appointments", key: "appointments" },
  { icon: AlertTriangle,   label: "Emergency",    key: "emergency", badge: "12" },
  { icon: FlaskConical,    label: "Laboratory",   key: "laboratory" },
  { icon: Pill,            label: "Pharmacy",     key: "pharmacy" },
  { icon: Receipt,         label: "Billing",      key: "billing" },
  { icon: Building2,       label: "Departments",  key: "departments" },
  { icon: Settings,        label: "Settings",     key: "settings" },
];

export default function Sidebar({ activePage, onNavigate, isOpen, onClose, user }) {
  const displayName = user?.name || "Admin";
  const displayRole = user?.role || "Super Admin";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className={`sidebar${isOpen ? " open" : ""}`}>
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🏥</div>
        <div className="sidebar-logo-text">
          <h2>Meenakshi</h2>
          <span>Medical Hospital</span>
        </div>
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar">
          <X size={18} />
        </button>
      </div>

      <div className="sidebar-badge">✓ NABH Accredited Hospital</div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-title">Main Menu</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className={`nav-item${activePage === item.key ? " active" : ""}`}
              onClick={() => onNavigate(item.key)}
            >
              <span className="nav-icon"><Icon size={18} /></span>
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">{initials}</div>
          <div className="sidebar-user-info">
            <h4>{displayName}</h4>
            <span>{displayRole}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
