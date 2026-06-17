import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "", remember: false });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // Demo credentials
  const USERS = [
    { username: "admin", password: "admin123", name: "Admin", role: "Super Admin" },
    { username: "doctor", password: "doc123", name: "Dr. Anand", role: "Doctor" },
    { username: "nurse", password: "nurse123", name: "Priya N.", role: "Nurse" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      const user = USERS.find(
        (u) => u.username === form.username && u.password === form.password
      );
      if (user) {
        if (form.remember) {
          localStorage.setItem("mmh_user", JSON.stringify(user));
        } else {
          sessionStorage.setItem("mmh_user", JSON.stringify(user));
        }
        onLogin(user);
      } else {
        setError("Invalid username or password.");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="login-root">
      {/* Left panel */}
      <div className="login-left">
        <div className="login-brand">
          <div className="login-brand-icon">🏥</div>
          <div>
            <h1>Meenakshi</h1>
            <span>Medical Hospital</span>
          </div>
        </div>
        <div className="login-badge">✓ NABH Accredited Hospital</div>
        <div className="login-tagline">
          <h2>Welcome back to<br />your hospital portal</h2>
          <p>Manage patients, appointments, billing, and more — all in one place.</p>
        </div>
        <div className="login-features">
          {[
            { icon: "👥", text: "1,250+ patients managed" },
            { icon: "👨‍⚕️", text: "85 specialist doctors" },
            { icon: "🏆", text: "NABH accredited since 2015" },
          ].map((f) => (
            <div key={f.text} className="login-feature-item">
              <span>{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="login-right">
        <div className="login-card">
          <div className="login-card-header">
            <h2>Sign in</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label>Username</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">👤</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label>Password</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">🔒</span>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPass((p) => !p)}
                  tabIndex={-1}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="login-forgot">Forgot password?</button>
            </div>

            {error && <div className="login-error">⚠ {error}</div>}

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                <span className="login-spinner" />
              ) : (
                "Sign In →"
              )}
            </button>
          </form>

          <div className="login-demo-hint">
            <div className="login-demo-title">Demo credentials</div>
            {[
              { u: "admin", p: "admin123", role: "Super Admin" },
              { u: "doctor", p: "doc123", role: "Doctor" },
            ].map((d) => (
              <div
                key={d.u}
                className="login-demo-row"
                onClick={() => setForm({ ...form, username: d.u, password: d.p })}
              >
                <span className="login-demo-role">{d.role}</span>
                <code>{d.u} / {d.p}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
