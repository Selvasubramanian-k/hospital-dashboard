import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { doctors } from "../data/mockData.jsx";

export default function Doctors() {
  const [search, setSearch] = useState("");

  const filtered = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Doctors</h1>
        <p>Our team of {doctors.length} specialist doctors</p>
      </div>

      <div className="filter-bar">
        <div className="filter-bar-search">
          <Search className="filter-bar-search-icon" />
          <input
            placeholder="Search doctor name, department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn-add">
          <Plus size={16} /> Add Doctor
        </button>
      </div>

      <div className="doctors-grid">
        {filtered.map((d) => (
          <div key={d.id} className="doctor-card">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className={`doctor-avatar-wrap patient-avatar ${d.avatar}`}>
                {d.name.split(" ").slice(1).join("").slice(0, 2)}
                {d.online && <span className="doctor-online-dot" />}
              </div>
            </div>
            <div className="doctor-name">{d.name}</div>
            <div className="doctor-dept">{d.dept} • {d.exp}</div>
            <span className={`status-badge ${d.online ? "admitted" : "discharged"}`}>
              {d.online ? "● Online" : "● Offline"}
            </span>
            <div className="doctor-stats">
              <div className="doctor-stat-item">
                <div className="doctor-stat-val">{d.patients}</div>
                <div className="doctor-stat-lbl">Patients</div>
              </div>
              <div className="doctor-stat-item">
                <div className="doctor-stat-val">⭐ {d.rating}</div>
                <div className="doctor-stat-lbl">Rating</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
