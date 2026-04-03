import { useCallback, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  getAdminPassword,
  getUserRole,
  getWorkerName,
  setAdminPassword,
  setUserRole,
  setWorkerName
} from "../lib/auth";

const ROLE_OPTIONS = ["CITIZEN", "WORKER", "ADMIN"];

function navItemClass(isActive) {
  const base =
    "px-4 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-300 border border-transparent";
  if (isActive) {
    return `${base} bg-blue-50/90 text-blue-800 font-bold border-blue-100 shadow-sm translate-x-1`;
  }
  return `${base} text-slate-600 hover:bg-white/70 hover:border-slate-200`;
}

function topNavClass(isActive) {
  const base =
    "text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-all duration-300 pb-1";
  if (isActive) {
    return `${base} text-blue-800 border-b-2 border-blue-700`;
  }
  return `${base} text-slate-500 hover:text-blue-700`;
}

function mobileNavClass(isActive) {
  return `flex flex-col items-center gap-1 transition-all ${
    isActive ? "text-blue-800 font-bold -translate-y-0.5" : "text-slate-500"
  }`;
}

export default function DashboardLayout() {
  const [role, setRole] = useState(() => getUserRole());
  const [adminPasswordDraft, setAdminPasswordDraft] = useState(() => getAdminPassword());
  const [workerNameDraft, setWorkerNameDraft] = useState(() => getWorkerName());

  const handleAmbientMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--civiai-cursor-x", `${Math.max(0, Math.min(100, x))}%`);
    event.currentTarget.style.setProperty("--civiai-cursor-y", `${Math.max(0, Math.min(100, y))}%`);
  }, []);

  const resetAmbientMove = useCallback((event) => {
    event.currentTarget.style.setProperty("--civiai-cursor-x", "50%");
    event.currentTarget.style.setProperty("--civiai-cursor-y", "24%");
  }, []);

  function handleRoleChange(nextRole) {
    setRole(nextRole);
    setUserRole(nextRole);
  }

  function handleAdminPasswordBlur() {
    setAdminPassword(adminPasswordDraft);
  }

  function handleWorkerNameBlur() {
    setWorkerName(workerNameDraft);
  }

  return (
    <div
      className="app-canvas bg-background text-on-surface flex min-h-screen overflow-hidden font-body"
      onMouseMove={handleAmbientMove}
      onMouseLeave={resetAmbientMove}
    >
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />

      <aside className="hidden lg:flex flex-col h-screen w-72 premium-card rounded-none border-r border-slate-200/70 py-6 px-4 shrink-0">
        <div className="flex items-center gap-3 px-2 mb-10 enter-up">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined text-white text-base">shield</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 leading-none font-headline">CiviAI</h1>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-slate-500 font-bold mt-1">
              Civic Intelligence
            </p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <NavLink to="/" end className={({ isActive }) => navItemClass(isActive)}>
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold">
              Impact Center
            </span>
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => navItemClass(isActive)}>
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold">Dashboard</span>
          </NavLink>
          <NavLink to="/queue" className={({ isActive }) => navItemClass(isActive)}>
            <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold">Admin Queue</span>
          </NavLink>
          <NavLink to="/worker" className={({ isActive }) => navItemClass(isActive)}>
            <span className="material-symbols-outlined text-[20px]">engineering</span>
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold">
              Worker Tasks
            </span>
          </NavLink>
          <NavLink to="/report" className={({ isActive }) => navItemClass(isActive)}>
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span className="text-[0.74rem] uppercase tracking-[0.14em] font-semibold">Report Issue</span>
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="sticky top-0 z-50 px-4 md:px-6 pt-4 md:pt-5">
          <div className="glass-panel rounded-2xl px-5 md:px-6 py-3.5 flex justify-between items-center max-w-[1440px] mx-auto">
            <div className="flex items-center gap-8">
              <span className="lg:hidden text-xl font-black tracking-tight text-slate-900 font-headline">
                CiviAI
              </span>
              <nav className="hidden md:flex gap-6">
                <NavLink to="/" end className={({ isActive }) => topNavClass(isActive)}>
                  Impact Center
                </NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => topNavClass(isActive)}>
                  Dashboard
                </NavLink>
                <NavLink to="/queue" className={({ isActive }) => topNavClass(isActive)}>
                  Admin Queue
                </NavLink>
                <NavLink to="/worker" className={({ isActive }) => topNavClass(isActive)}>
                  Worker Tasks
                </NavLink>
                <NavLink to="/report" className={({ isActive }) => topNavClass(isActive)}>
                  Report Issue
                </NavLink>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex flex-col gap-1 text-[0.56rem] uppercase tracking-[0.14em] font-semibold text-slate-500">
                Role
                <select
                  className="rounded-lg px-2 py-1.5 text-xs text-slate-700 bg-white/75 border border-slate-200/80"
                  value={role}
                  onChange={(event) => handleRoleChange(event.target.value)}
                >
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              {role === "ADMIN" && (
                <label className="hidden md:flex flex-col gap-1 text-[0.56rem] uppercase tracking-[0.14em] font-semibold text-slate-500">
                  Admin Password
                  <input
                    className="rounded-lg px-3 py-1.5 text-xs w-48 border border-slate-200/80 bg-white/75"
                    placeholder="Required for ADMIN actions"
                    type="password"
                    value={adminPasswordDraft}
                    onBlur={handleAdminPasswordBlur}
                    onChange={(event) => setAdminPasswordDraft(event.target.value)}
                  />
                </label>
              )}
              {role === "WORKER" && (
                <label className="hidden md:flex flex-col gap-1 text-[0.56rem] uppercase tracking-[0.14em] font-semibold text-slate-500">
                  Worker Name
                  <input
                    className="rounded-lg px-3 py-1.5 text-xs w-48 border border-slate-200/80 bg-white/75"
                    placeholder="Used in progress logs"
                    value={workerNameDraft}
                    onBlur={handleWorkerNameBlur}
                    onChange={(event) => setWorkerNameDraft(event.target.value)}
                  />
                </label>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-hidden relative pb-20 md:pb-0 page-reveal">
          <Outlet />
        </div>
      </main>

      <nav className="md:hidden fixed bottom-3 left-3 right-3 glass-panel rounded-2xl border border-outline-variant/20 px-6 py-3 flex justify-between items-center z-[60]">
        <NavLink to="/dashboard" className={({ isActive }) => mobileNavClass(isActive)}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.12em]">Dashboard</span>
        </NavLink>
        <NavLink to="/" end className={({ isActive }) => mobileNavClass(isActive)}>
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.12em]">Impact</span>
        </NavLink>
        <NavLink to="/queue" className={({ isActive }) => mobileNavClass(isActive)}>
          <span className="material-symbols-outlined">admin_panel_settings</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.12em]">Queue</span>
        </NavLink>
        <NavLink to="/worker" className={({ isActive }) => mobileNavClass(isActive)}>
          <span className="material-symbols-outlined">engineering</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.12em]">Worker</span>
        </NavLink>
        <NavLink to="/report" className={({ isActive }) => mobileNavClass(isActive)}>
          <span className="material-symbols-outlined">add_circle</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.12em]">Report</span>
        </NavLink>
      </nav>
    </div>
  );
}
