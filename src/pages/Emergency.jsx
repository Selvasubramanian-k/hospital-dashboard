import React from "react";
import { emergencyCases } from "../data/mockData.jsx";
import { Plus } from "lucide-react";

export default function Emergency() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Emergency Cases 🚨</h1>
        <p>{emergencyCases.length} active emergency cases right now</p>
      </div>

      <div className="filter-bar">
        <div style={{ display: "flex", gap: 10 }}>
          {["All", "Critical", "Serious", "Stable"].map((f) => (
            <button key={f} className="btn-sm btn-outline">{f}</button>
          ))}
        </div>
        <button className="btn-add">
          <Plus size={16} /> Add Case
        </button>
      </div>

      <div className="emergency-grid">
        {emergencyCases.map((e) => (
          <div key={e.id} className={`emergency-card ${e.status}`}>
            <div className="emergency-top">
              <div>
                <div className="emergency-name">{e.name}</div>
                <div className="emergency-id">{e.id} • Age {e.age}</div>
              </div>
              <span className={`status-badge ${e.status === "critical" ? "critical" : e.status === "serious" ? "scheduled" : "stable"}`}>
                {e.status === "critical" && <span className="emergency-pulse" />} {e.status}
              </span>
            </div>
            <div className="emergency-details">{e.condition}</div>
            <div className="emergency-meta">
              <div><strong>Bed:</strong> {e.bed}</div>
              <div><strong>Doctor:</strong> {e.doctor}</div>
              <div>{e.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
