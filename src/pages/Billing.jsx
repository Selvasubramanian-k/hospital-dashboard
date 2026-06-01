import React from "react";
import { bills } from "../data/mockData.jsx";
import { Plus, Eye, Edit } from "lucide-react";

const billingStats = [
  { icon: "💰", label: "Total Revenue", value: "₹2.5L", color: "green" },
  { icon: "✅", label: "Paid", value: "₹1.8L", color: "blue" },
  { icon: "⏳", label: "Pending", value: "₹52K", color: "orange" },
  { icon: "🔄", label: "Partial", value: "₹48K", color: "purple" },
];

export default function Billing() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Billing</h1>
        <p>Patient billing and revenue management</p>
      </div>

      <div className="billing-summary">
        {billingStats.map((s) => (
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
          <Plus size={16} /> Create Bill
        </button>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((b) => (
              <tr key={b.id}>
                <td><span className="patient-id">{b.id}</span></td>
                <td><strong>{b.patient}</strong></td>
                <td>{b.type}</td>
                <td><strong>₹{b.amount.toLocaleString()}</strong></td>
                <td>
                  <span className={`status-badge ${
                    b.status === "paid" ? "stable" :
                    b.status === "pending" ? "scheduled" : "observation"
                  }`}>{b.status}</span>
                </td>
                <td>{b.date}</td>
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
