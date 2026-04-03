import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchComplaints,
  fetchImpactOverview,
  getErrorMessage
} from "../api/complaints";
import SkeletonCards from "../components/SkeletonCards";
import StatusPill from "../components/StatusPill";

const STATUS_OPTIONS = [
  "",
  "PENDING",
  "IN_REVIEW",
  "ASSIGNED",
  "RESOLVED",
  "REJECTED"
];

const ISSUE_OPTIONS = [
  "",
  "GARBAGE",
  "POTHOLE",
  "WATER_LEAK",
  "STREETLIGHT",
  "DRAINAGE",
  "ROAD_DAMAGE",
  "UNKNOWN"
];

const SEVERITY_OPTIONS = ["", "LOW", "MEDIUM", "HIGH", "CRITICAL"];

function formatDate(value) {
  if (!value) return "Unknown date";
  return new Date(value).toLocaleString();
}

function formatPercent(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "0%";
  return `${Math.round(value)}%`;
}

function formatHours(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return `${value.toFixed(1)}h`;
}

export default function DashboardPage() {
  const [filters, setFilters] = useState({
    status: "",
    issueType: "",
    severity: "",
    page: 1
  });
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 20, total: 0, totalPages: 1 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [insights, setInsights] = useState(null);
  const [insightsError, setInsightsError] = useState("");
  const [isInsightsLoading, setIsInsightsLoading] = useState(true);

  const analytics = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.pending += item.status === "PENDING" ? 1 : 0;
        acc.resolved += item.status === "RESOLVED" ? 1 : 0;
        acc.critical += item.severity === "CRITICAL" ? 1 : 0;
        return acc;
      },
      { pending: 0, resolved: 0, critical: 0 }
    );
  }, [items]);

  useEffect(() => {
    let mounted = true;

    async function loadComplaints() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchComplaints(filters);
        if (!mounted) return;

        setItems(data.items);
        setMeta(data.meta);
      } catch (fetchError) {
        if (!mounted) return;
        setError(getErrorMessage(fetchError));
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadComplaints();

    return () => {
      mounted = false;
    };
  }, [filters]);

  useEffect(() => {
    let mounted = true;

    async function loadInsights() {
      setIsInsightsLoading(true);
      setInsightsError("");

      try {
        const data = await fetchImpactOverview({ windowDays: 30 });
        if (!mounted) return;
        setInsights(data);
      } catch (insightsFetchError) {
        if (!mounted) return;
        setInsightsError(getErrorMessage(insightsFetchError));
      } finally {
        if (mounted) setIsInsightsLoading(false);
      }
    }

    loadInsights();

    return () => {
      mounted = false;
    };
  }, []);

  function updateFilter(name, value) {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1
    }));
  }

  function goToPage(nextPage) {
    setFilters((prev) => ({
      ...prev,
      page: nextPage
    }));
  }

  return (
    <section className="page-stack">
      <article className="card impact-hero">
        <div className="section-head">
          <p className="eyebrow">Impact Center</p>
          <h2>Citywide Response Intelligence</h2>
          <p>Live metrics designed for municipal decision-making and judge-friendly storytelling.</p>
        </div>

        {isInsightsLoading && <SkeletonCards count={2} />}
        {insightsError && <p className="notice notice-error">{insightsError}</p>}

        {!isInsightsLoading && !insightsError && insights && (
          <div className="impact-stack stagger-fade">
            <div className="narrative-box">
              <h3>{insights.narrative?.headline}</h3>
              <p>{insights.narrative?.criticalLine}</p>
              <p>{insights.narrative?.hotspotLine}</p>
              <p>{insights.narrative?.queueLine}</p>
            </div>

            <div className="impact-grid">
              <div className="impact-card">
                <span>Total Reports</span>
                <strong>{insights.summary?.total ?? 0}</strong>
              </div>
              <div className="impact-card">
                <span>Open Cases</span>
                <strong>{insights.summary?.open ?? 0}</strong>
              </div>
              <div className="impact-card">
                <span>Critical Open</span>
                <strong>{insights.summary?.criticalOpen ?? 0}</strong>
              </div>
              <div className="impact-card">
                <span>Resolution Rate</span>
                <strong>{formatPercent(insights.summary?.resolutionRate)}</strong>
              </div>
              <div className="impact-card">
                <span>Avg Resolution Time</span>
                <strong>{formatHours(insights.summary?.avgResolutionHours)}</strong>
              </div>
              <div className="impact-card">
                <span>Verification Coverage</span>
                <strong>{formatPercent(insights.summary?.verificationRate)}</strong>
              </div>
            </div>

            <div className="impact-columns">
              <div className="impact-list-block">
                <h4>Top Hotspots</h4>
                <div className="impact-list">
                  {(insights.hotspots || []).map((hotspot) => (
                    <div className="impact-list-item" key={hotspot.label}>
                      <div>
                        <p className="impact-label">{hotspot.label}</p>
                        <p className="meta-line">
                          Open: {hotspot.open} | Critical: {hotspot.critical} | Total: {hotspot.total}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="impact-list-block">
                <h4>Priority Queue</h4>
                <div className="impact-list">
                  {(insights.priorityQueue || []).map((item) => (
                    <div className="impact-list-item" key={item.id}>
                      <div className="status-row">
                        <StatusPill kind="severity" value={item.severity} />
                        <StatusPill kind="status" value={item.status} />
                      </div>
                      <p className="impact-label">{item.locationText}</p>
                      <p className="meta-line">
                        Urgency {item.urgencyScore} | {item.ageHours}h old | {item.department}
                      </p>
                      <Link className="button button-ghost" to={`/complaints/${item.id}`}>
                        Open case
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </article>

      <article className="card">
        <div className="section-head">
          <p className="eyebrow">Operations Dashboard</p>
          <h2>Track All Complaints</h2>
          <p>Filter by status, issue type, or severity to plan field operations.</p>
        </div>

        <div className="stats-row stats-row-compact">
          <div className="stat-chip">
            <span>Pending in view</span>
            <strong>{analytics.pending}</strong>
          </div>
          <div className="stat-chip">
            <span>Resolved in view</span>
            <strong>{analytics.resolved}</strong>
          </div>
          <div className="stat-chip">
            <span>Critical in view</span>
            <strong>{analytics.critical}</strong>
          </div>
        </div>

        <div className="filter-row">
          <label className="field">
            <span>Status</span>
            <select
              value={filters.status}
              onChange={(event) => updateFilter("status", event.target.value)}
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option || "all"} value={option}>
                  {option || "All statuses"}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Issue Type</span>
            <select
              value={filters.issueType}
              onChange={(event) => updateFilter("issueType", event.target.value)}
            >
              {ISSUE_OPTIONS.map((option) => (
                <option key={option || "all"} value={option}>
                  {option || "All issues"}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Severity</span>
            <select
              value={filters.severity}
              onChange={(event) => updateFilter("severity", event.target.value)}
            >
              {SEVERITY_OPTIONS.map((option) => (
                <option key={option || "all"} value={option}>
                  {option || "All severity levels"}
                </option>
              ))}
            </select>
          </label>
        </div>
      </article>

      <article className="card">
        <div className="list-header">
          <h3>Complaints ({meta.total})</h3>
          <p className="muted">
            Page {meta.page} of {meta.totalPages}
          </p>
        </div>

        {isLoading && <SkeletonCards count={4} />}
        {error && <p className="notice notice-error">{error}</p>}

        {!isLoading && !error && items.length === 0 && (
          <p className="notice">No complaints match the selected filters.</p>
        )}

        <div className="list-stack">
          {items.map((complaint, index) => (
            <div
              key={complaint.id}
              className="list-item stagger-fade"
              style={{ "--stagger": index }}
            >
              <div>
                <div className="status-row">
                  <StatusPill kind="status" value={complaint.status} />
                  <StatusPill kind="severity" value={complaint.severity} />
                  <StatusPill kind="issue" value={complaint.issueType} />
                </div>
                <h4>{complaint.locationText}</h4>
                <p>{complaint.aiSummary || complaint.description || "No summary available."}</p>
                <p className="meta-line">
                  Created {formatDate(complaint.createdAt)} | ID: {complaint.id}
                </p>
              </div>
              <Link className="button button-secondary" to={`/complaints/${complaint.id}`}>
                View details
              </Link>
            </div>
          ))}
        </div>

        <div className="pagination-row">
          <button
            className="button button-ghost"
            disabled={meta.page <= 1 || isLoading}
            onClick={() => goToPage(meta.page - 1)}
            type="button"
          >
            Previous
          </button>
          <button
            className="button button-ghost"
            disabled={meta.page >= meta.totalPages || isLoading}
            onClick={() => goToPage(meta.page + 1)}
            type="button"
          >
            Next
          </button>
        </div>
      </article>
    </section>
  );
}
