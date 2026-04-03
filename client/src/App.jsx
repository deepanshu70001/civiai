import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import ImpactCenter from "./pages/ImpactCenter";
import OperationsDashboard from "./pages/OperationsDashboard";
import AdminQueue from "./pages/AdminQueue";
import ReportIssue from "./pages/ReportIssue";
import ComplaintDetail from "./pages/ComplaintDetail"; // We won't strictly enforce /:id for now but let's wire it if needed

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<ImpactCenter />} />
          <Route path="/dashboard" element={<OperationsDashboard />} />
          <Route path="/queue" element={<AdminQueue />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/complaint/:id" element={<ComplaintDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
