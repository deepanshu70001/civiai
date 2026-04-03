import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchComplaints,
  getErrorMessage,
  patchComplaintStatus
} from "../api/complaints";
import SkeletonCards from "../components/SkeletonCards";
import StatusPill from "../components/StatusPill";

const STATUS_OPTIONS = ["PENDING", "IN_REVIEW", "ASSIGNED", "RESOLVED", "REJECTED"];

function formatDate(value) {
  if (!value) return "Unknown date";
  return new Date(value).toLocaleString();
}

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [statusDraft, setStatusDraft] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchComplaints({ limit: 100, page: 1 });
        if (!mounted) return;

        setItems(data.items);
        setStatusDraft(
          data.items.reduce((acc, item) => {
            acc[item.id] = item.status;
            return acc;
          }, {})
        );
      } catch (fetchError) {
        if (!mounted) return;
        setError(getErrorMessage(fetchError));
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const statusCounts = useMemo(() => {
    return items.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {});
  }, [items]);

  async function handleApply(id) {
    const nextStatus = statusDraft[id];

    try {
      await patchComplaintStatus(id, nextStatus);
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: nextStatus
              }
            : item
        )
      );
      setMessage(`Updated complaint ${id} to ${nextStatus}.`);
      setError("");
    } catch (updateError) {
      setError(getErrorMessage(updateError));
      setMessage("");
    }
  }

  return (
    <section className="page-stack">
      <article className="card">
        <div className="section-head">
          <p className="eyebrow">Admin Control</p>
          <h2>Operational Queue</h2>
          <p>Review all complaints and apply quick status transitions.</p>
        </div>

        <div className="stats-row">
          {STATUS_OPTIONS.map((status) => (
            <div key={status} className="stat-chip">
              <span>{status}</span>
              <strong>{statusCounts[status] || 0}</strong>
            </div>
          ))}
        </div>
      </article>

      <article className="card">
        {isLoading && <SkeletonCards count={4} />}
        {message && <p className="notice notice-success">{message}</p>}
        {error && <p className="notice notice-error">{error}</p>}

        {!isLoading && !items.length && <p className="notice">No complaints available.</p>}

        <div className="admin-list">
          {items.map((item, index) => (
            <div
              className="admin-item stagger-fade"
              style={{ "--stagger": index }}
              key={item.id}
            >
              <div>
                <div className="status-row">
                  <StatusPill kind="status" value={item.status} />
                  <StatusPill kind="severity" value={item.severity} />
                  <StatusPill kind="issue" value={item.issueType} />
                </div>
                <h4>{item.locationText}</h4>
                <p>{item.aiSummary || item.description || "No summary available."}</p>
                <p className="meta-line">Created {formatDate(item.createdAt)}</p>
              </div>

              <div className="admin-actions">
                <label className="field">
                  <span>Set status</span>
                  <select
                    value={statusDraft[item.id] || item.status}
                    onChange={(event) =>
                      setStatusDraft((prev) => ({
                        ...prev,
                        [item.id]: event.target.value
                      }))
                    }
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
                <button className="button button-primary" onClick={() => handleApply(item.id)}>
                  Apply
                </button>
                <Link className="button button-ghost" to={`/complaints/${item.id}`}>
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
