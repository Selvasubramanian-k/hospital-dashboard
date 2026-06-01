import React, { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { recentPatients } from "../data/mockData.jsx";

const allPatients = [
  ...recentPatients,
  { id: "P-2024-007", name: "Vijay Kumar", age: 34, dept: "Urology", doctor: "Dr. Priya", status: "scheduled", date: "27 May" },
  { id: "P-2024-008", name: "Saranya R", age: 29, dept: "Gynecology", doctor: "Dr. Meena", status: "admitted", date: "27 May" },
  { id: "P-2024-009", name: "Balaji S", age: 47, dept: "Cardiology", doctor: "Dr. Anand", status: "stable", date: "26 May" },
  { id: "P-2024-010", name: "Geetha V", age: 55, dept: "Neurology", doctor: "Dr. Kumar", status: "discharged", date: "26 May" },
];

export default function Patients() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = allPatients.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Patients</h1>
        <p>Manage and view all patient records</p>
      </div>

      <div className="filter-bar">
        <div className="filter-bar-search">
          <Search className="filter-bar-search-icon" />
          <input
            placeholder="Search patient name, ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select className="filter-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="admitted">Admitted</option>
          <option value="scheduled">Scheduled</option>
          <option value="critical">Critical</option>
          <option value="stable">Stable</option>
          <option value="discharged">Discharged</option>
          <option value="observation">Observation</option>
        </select>
        <button className="btn-add">
          <Plus size={16} /> Add Patient
        </button>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id}>
                <td>
                  <div className="patient-info">
                    <div className={`patient-avatar c${(i % 6) + 1}`}>
                      {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="patient-name">{p.name}</div>
                      <div className="patient-id">{p.id}</div>
                    </div>
                  </div>
                </td>
                <td>{p.age} yrs</td>
                <td>{p.dept}</td>
                <td>{p.doctor}</td>
                <td><span className={`status-badge ${p.status}`}>{p.status}</span></td>
                <td>{p.date}</td>
                <td>
                  <div className="appt-actions">
                    <button className="action-btn"><Eye size={13} /></button>
                    <button className="action-btn"><Edit size={13} /></button>
                    <button className="action-btn danger"><Trash2 size={13} /></button>
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
