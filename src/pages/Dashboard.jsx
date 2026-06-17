import React from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import {
  admissionTrend, revenueTrend, deptDistribution,
  bedOccupancy, recentPatients
} from "../data/mockData.jsx";

const stats = [
  { icon: "👥", label: "Total Patients", value: "1,250", change: "+4.2%", dir: "up", color: "blue" },
  { icon: "👨‍⚕️", label: "Doctors Available", value: "85", change: "+2 today", dir: "up", color: "green" },
  { icon: "📅", label: "Today's Appointments", value: "320", change: "+12%", dir: "up", color: "purple" },
  { icon: "🚨", label: "Emergency Cases", value: "18", change: "+3 urgent", dir: "down", color: "red" },
  { icon: "🛏️", label: "Bed Availability", value: "62%", change: "-5% vs yesterday", dir: "down", color: "orange" },
  { icon: "💰", label: "Monthly Revenue", value: "₹2.5L", change: "+8.1%", dir: "up", color: "teal" },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="custom-tooltip-label">{label}</div>
        <div className="custom-tooltip-value">
          {payload[0].name === "revenue"
            ? `₹${(payload[0].value / 1000).toFixed(0)}k`
            : `patients : ${payload[0].value}`}
        </div>
      </div>
    );
  }
  return null;
};

export default function Dashboard({ user }) {
  const displayName = user?.name || "Admin";

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>{getGreeting()}, {displayName}! 👋</h1>
        <p>Here's what's happening at Meenakshi Medical Hospital today.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className={`stat-card ${s.color}`}>
            <div className={`stat-icon ${s.color}`}>{s.icon}</div>
            <div className="stat-info">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className={`stat-change ${s.dir}`}>
                {s.dir === "up" ? "▲" : "▼"} {s.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-card-header">
            <div>
              <h3>Patient Admission Trend</h3>
              <p>Last 7 months</p>
            </div>
            <span className="chart-badge">📅 Monthly</span>
          </div>
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={admissionTrend} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[900, 1400]} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={{ fill: "#2563eb", r: 5 }}
                activeDot={{ r: 7, fill: "#1d4ed8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-card-header">
            <div>
              <h3>Dept-wise Patients</h3>
              <p>Distribution</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={deptDistribution}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {deptDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-legend">
            {deptDistribution.map((d) => (
              <div key={d.name} className="donut-legend-item">
                <span className="legend-dot" style={{ background: d.color }} />
                {d.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom-grid">
        <div className="table-card">
          <div className="table-card-header">
            <h3>Recent Patients</h3>
            <button className="btn-sm btn-outline">View All</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentPatients.map((p, i) => (
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
                  <td>{p.dept}</td>
                  <td>{p.doctor}</td>
                  <td>
                    <span className={`status-badge ${p.status}`}>{p.status}</span>
                  </td>
                  <td>{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bed-card">
          <h3>Bed Occupancy</h3>
          <div className="bed-card-subtitle">By Department</div>
          {bedOccupancy.map((b) => (
            <div key={b.dept} className="bed-dept">
              <div className="bed-dept-header">
                <span className="bed-dept-name">{b.dept}</span>
                <span className="bed-dept-count">{b.occupied}/{b.total}</span>
              </div>
              <div className="bed-progress-bar">
                <div
                  className={`bed-progress-fill ${b.color}`}
                  style={{ width: `${(b.occupied / b.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="chart-card">
        <div className="chart-card-header">
          <div>
            <h3>Monthly Revenue</h3>
            <p>Last 7 months (₹)</p>
          </div>
          <span className="chart-badge green">₹ Revenue</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueTrend} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="revenue" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
