import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: "16px" }}>Report</Link>
        <Link to="/dashboard" style={{ marginRight: "16px" }}>Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <main style={{ padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
}