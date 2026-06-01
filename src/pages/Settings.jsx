import React, { useState } from "react";
import { User, Bell, Shield, Building2, Palette } from "lucide-react";

const settingsNav = [
  { icon: User, label: "Profile", key: "profile" },
  { icon: Bell, label: "Notifications", key: "notifications" },
  { icon: Shield, label: "Security", key: "security" },
  { icon: Building2, label: "Hospital Info", key: "hospital" },
  { icon: Palette, label: "Appearance", key: "appearance" },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [toggles, setToggles] = useState({ email: true, sms: false, emergency: true, reports: true });

  const toggle = (key) => setToggles((t) => ({ ...t, [key]: !t[key] }));

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage hospital and account settings</p>
      </div>

      <div className="settings-grid">
        <div className="settings-nav-card">
          {settingsNav.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.key}
                className={`settings-nav-item${activeSection === s.key ? " active" : ""}`}
                onClick={() => setActiveSection(s.key)}
              >
                <Icon size={16} />
                {s.label}
              </div>
            );
          })}
        </div>

        <div className="settings-content">
          {activeSection === "profile" && (
            <>
              <div className="settings-section-title">Profile Settings</div>
              <div className="settings-section-sub">Update your personal information</div>
              <div className="settings-row">
                <div className="settings-form-group">
                  <label className="settings-label">First Name</label>
                  <input className="settings-input" defaultValue="Admin" />
                </div>
                <div className="settings-form-group">
                  <label className="settings-label">Last Name</label>
                  <input className="settings-input" defaultValue="Super" />
                </div>
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Email</label>
                <input className="settings-input" defaultValue="admin@meenakshihospital.in" />
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Phone</label>
                <input className="settings-input" defaultValue="+91 98765 43210" />
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Role</label>
                <input className="settings-input" defaultValue="Super Admin" readOnly />
              </div>
              <button className="btn-save">Save Changes</button>
            </>
          )}

          {activeSection === "notifications" && (
            <>
              <div className="settings-section-title">Notification Settings</div>
              <div className="settings-section-sub">Choose how you receive alerts</div>
              {[
                { key: "email", title: "Email Notifications", desc: "Receive daily reports via email" },
                { key: "sms", title: "SMS Alerts", desc: "Get urgent alerts via SMS" },
                { key: "emergency", title: "Emergency Alerts", desc: "Immediate emergency case notifications" },
                { key: "reports", title: "Monthly Reports", desc: "Automated monthly summary reports" },
              ].map((item) => (
                <div key={item.key} className="settings-toggle-row">
                  <div className="settings-toggle-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={`toggle${toggles[item.key] ? " on" : ""}`} onClick={() => toggle(item.key)}>
                    <div className="toggle-thumb" />
                  </div>
                </div>
              ))}
            </>
          )}

          {activeSection === "hospital" && (
            <>
              <div className="settings-section-title">Hospital Information</div>
              <div className="settings-section-sub">Update hospital details</div>
              <div className="settings-form-group">
                <label className="settings-label">Hospital Name</label>
                <input className="settings-input" defaultValue="Meenakshi Medical Hospital" />
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Address</label>
                <input className="settings-input" defaultValue="123, Anna Salai, Chennai - 600002" />
              </div>
              <div className="settings-row">
                <div className="settings-form-group">
                  <label className="settings-label">Phone</label>
                  <input className="settings-input" defaultValue="044-2234-5678" />
                </div>
                <div className="settings-form-group">
                  <label className="settings-label">Beds Total</label>
                  <input className="settings-input" defaultValue="350" />
                </div>
              </div>
              <button className="btn-save">Save Changes</button>
            </>
          )}

          {activeSection === "security" && (
            <>
              <div className="settings-section-title">Security Settings</div>
              <div className="settings-section-sub">Manage password and login security</div>
              <div className="settings-form-group">
                <label className="settings-label">Current Password</label>
                <input className="settings-input" type="password" placeholder="••••••••" />
              </div>
              <div className="settings-form-group">
                <label className="settings-label">New Password</label>
                <input className="settings-input" type="password" placeholder="••••••••" />
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Confirm Password</label>
                <input className="settings-input" type="password" placeholder="••••••••" />
              </div>
              <button className="btn-save">Update Password</button>
            </>
          )}

          {activeSection === "appearance" && (
            <>
              <div className="settings-section-title">Appearance</div>
              <div className="settings-section-sub">Customize your experience</div>
              <div className="settings-form-group">
                <label className="settings-label">Theme</label>
                <select className="settings-input filter-select">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="settings-form-group">
                <label className="settings-label">Language</label>
                <select className="settings-input filter-select">
                  <option>English</option>
                  <option>Tamil</option>
                  <option>Hindi</option>
                </select>
              </div>
              <button className="btn-save">Save Preferences</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
