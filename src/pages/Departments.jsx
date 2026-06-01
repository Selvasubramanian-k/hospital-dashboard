import React from "react";
import { departments } from "../data/mockData.jsx";

export default function Departments() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Departments</h1>
        <p>{departments.length} departments at Meenakshi Medical Hospital</p>
      </div>

      <div className="dept-grid">
        {departments.map((d) => (
          <div key={d.name} className="dept-card">
            <div className="dept-card-icon" style={{ background: d.bg }}>
              {d.icon}
            </div>
            <div className="dept-card-name">{d.name}</div>
            <div className="dept-card-head">Head: {d.head}</div>
            <div className="dept-card-stats">
              <div className="dept-stat">
                <div className="dept-stat-val">{d.patients}</div>
                <div className="dept-stat-lbl">Patients</div>
              </div>
              {d.beds > 0 && (
                <div className="dept-stat">
                  <div className="dept-stat-val">{d.beds}</div>
                  <div className="dept-stat-lbl">Beds</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
