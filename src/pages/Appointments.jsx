import React, { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { appointments } from "../data/mockData.jsx";

export default function Appointments() {
  const [search, setSearch] = useState("");

  const filtered = appointments.filter((a) =>
    a.patient.toLowerCase().includes(search.toLowerCase()) ||
    a.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Appointments</h1>
        <p>Today's schedule — {appointments.length} appointments</p>
      </div>

      <div className="filter-bar">
        <div className="filter-bar-search">
          <Search className="filter-bar-search-icon" />
          <input
            placeholder="Search patient, doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn-add">
          <Plus size={16} /> New Appointment
        </button>
      </div>

      <div className="table-card">
        <div className="appt-list">
          {filtered.map((a) => (
            <div key={a.id} className="appt-row">
              <div className="appt-time">{a.time}</div>
              <div className="appt-info">
                <div className="appt-patient">{a.patient} <span style={{fontWeight:400, color:"#94a3b8"}}>({a.age} yrs)</span></div>
                <div className="appt-detail">{a.dept} • {a.doctor} • {a.type}</div>
              </div>
              <span className={`status-badge ${a.status}`}>{a.status}</span>
              <div className="appt-actions">
                <button className="action-btn"><Eye size={13} /></button>
                <button className="action-btn"><Edit size={13} /></button>
                <button className="action-btn danger"><Trash2 size={13} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
