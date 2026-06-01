import React, { useState } from "react";
import { medicines } from "../data/mockData.jsx";
import { Search, Plus } from "lucide-react";

export default function Pharmacy() {
  const [search, setSearch] = useState("");

  const filtered = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Pharmacy</h1>
        <p>Medicine inventory and dispensing</p>
      </div>

      <div className="filter-bar">
        <div className="filter-bar-search">
          <Search className="filter-bar-search-icon" />
          <input
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn-add">
          <Plus size={16} /> Add Medicine
        </button>
      </div>

      <div className="pharmacy-grid">
        {filtered.map((m) => (
          <div key={m.id} className="med-card">
            <div className="med-icon">{m.icon}</div>
            <div className="med-name">{m.name}</div>
            <div className="med-category">{m.category}</div>
            <div className="med-price">₹{m.price}</div>
            <div className={`med-stock ${m.low ? "low" : "ok"}`}>
              {m.low ? "⚠ Low Stock" : "✓ In Stock"} ({m.stock} units)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
