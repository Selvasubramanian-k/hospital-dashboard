import React from "react";
import { labTests } from "../data/mockData.jsx";
import { Plus, Eye, Edit } from "lucide-react";

const labStats = [
  { icon: "🧪", label: "Total Tests Today", value: "142", color: "blue" },
  { icon: "✅", label: "Completed", value: "98", color: "green" },
  { icon: "⏳", label: "In Progress", value: "24", color: "orange" },
  { icon: "📋", label: "Pending", value: "20", color: "purple" },
];

export default function Laboratory() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Laboratory</h1>
        <p>Manage lab tests and results</p>
      </div>

      <div className="lab-stats-row">
        {labStats.map((s) => (
          <div key={s.label} className={`stat-card ${s.color}`}>
            <div className={`stat-icon ${s.color}`}>{s.icon}</div>
            <div className="stat-info">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="filter-bar">
        <button className="btn-add">
          <Plus size={16} /> New Test Order
        </button>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Test ID</th>
              <th>Patient</th>
              <th>Test</th>
              <th>Ordered By</th>
              <th>Status</th>
              <th>Result</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {labTests.map((t) => (
              <tr key={t.id}>
                <td><span className="patient-id">{t.id}</span></td>
                <td>{t.patient}</td>
                <td><strong>{t.test}</strong></td>
                <td>{t.ordered}</td>
                <td>
                  <span className={`status-badge ${
                    t.status === "completed" ? "stable" :
                    t.status === "pending" ? "scheduled" : "observation"
                  }`}>{t.status}</span>
                </td>
                <td>
                  <span style={{ color: t.result === "Abnormal" ? "var(--danger)" : t.result === "Normal" ? "var(--success)" : "var(--text-muted)" }}>
                    {t.result}
                  </span>
                </td>
                <td>{t.date}</td>
                <td>
                  <div className="appt-actions">
                    <button className="action-btn"><Eye size={13} /></button>
                    <button className="action-btn"><Edit size={13} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
