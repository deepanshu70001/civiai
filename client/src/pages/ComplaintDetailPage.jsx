import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchComplaintById,
  getErrorMessage,
  patchComplaintStatus,
  uploadImage,
  verifyComplaint
} from "../api/complaints";
import SkeletonCards from "../components/SkeletonCards";
import StatusPill from "../components/StatusPill";

const STATUS_OPTIONS = ["PENDING", "IN_REVIEW", "ASSIGNED", "RESOLVED", "REJECTED"];

function formatDate(value) {
  if (!value) return "Unknown date";
  return new Date(value).toLocaleString();
}

function renderJson(value) {
  if (!value) return "None";
  try {
    return JSON.stringify(value);
  } catch {
    return "Invalid JSON";
  }
}

export default function ComplaintDetailPage() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [statusValue, setStatusValue] = useState("PENDING");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [isSavingStatus, setIsSavingStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusMessageType, setStatusMessageType] = useState("success");

  const [verifyFile, setVerifyFile] = useState(null);
  const [verifyPreview, setVerifyPreview] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");
  const [verifyMessageType, setVerifyMessageType] = useState("success");

  useEffect(() => {
    if (!verifyFile) {
      setVerifyPreview("");
      return undefined;
    }

    const previewUrl = URL.createObjectURL(verifyFile);
    setVerifyPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [verifyFile]);

  useEffect(() => {
    if (!id) return;

    let mounted = true;

    async function loadComplaint() {
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchComplaintById(id);
        if (!mounted) return;

        setComplaint(data);
        setStatusValue(data.status);
      } catch (fetchError) {
        if (!mounted) return;
        setError(getErrorMessage(fetchError));
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadComplaint();

    return () => {
      mounted = false;
    };
  }, [id]);

  async function refreshComplaint() {
    if (!id) return;
    const data = await fetchComplaintById(id);
    setComplaint(data);
    setStatusValue(data.status);
  }

  async function handleStatusUpdate(event) {
    event.preventDefault();
    if (!id) return;

    setStatusMessage("");
    setStatusMessageType("success");
    setIsSavingStatus(true);

    try {
      await patchComplaintStatus(id, statusValue);
      await refreshComplaint();
      setStatusMessage("Status updated successfully.");
      setStatusMessageType("success");
    } catch (updateError) {
      setStatusMessage(getErrorMessage(updateError));
      setStatusMessageType("error");
    } finally {
      setIsSavingStatus(false);
    }
  }

  async function handleVerify(event) {
    event.preventDefault();
    if (!id) return;

    setVerifyMessage("");
    setVerifyMessageType("success");

    if (!verifyFile) {
      setVerifyMessage("Please upload an after-resolution image.");
      setVerifyMessageType("error");
      return;
    }

    setIsVerifying(true);

    try {
      const uploaded = await uploadImage(verifyFile);
      await verifyComplaint(id, {
        afterImageUrl: uploaded.url,
        afterImagePublicId: uploaded.publicId,
        afterImageMimeType: uploaded.mimeType
      });

      setVerifyFile(null);
      await refreshComplaint();
      setVerifyMessage("Verification completed and complaint refreshed.");
      setVerifyMessageType("success");
    } catch (verifyError) {
      setVerifyMessage(getErrorMessage(verifyError));
      setVerifyMessageType("error");
    } finally {
      setIsVerifying(false);
    }
  }

  if (isLoading) {
    return (
      <section className="card">
        <h2>Loading complaint details...</h2>
        <SkeletonCards count={2} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="card">
        <p className="notice notice-error">{error}</p>
        <Link className="button button-secondary" to="/dashboard">
          Back to dashboard
        </Link>
      </section>
    );
  }

  if (!complaint) {
    return (
      <section className="card">
        <p className="notice">Complaint not found.</p>
      </section>
    );
  }

  return (
    <section className="page-stack">
      <article className="card">
        <div className="section-head">
          <p className="eyebrow">Complaint Detail</p>
          <h2>{complaint.locationText}</h2>
          <p>ID: {complaint.id}</p>
        </div>

        <div className="status-row">
          <StatusPill kind="status" value={complaint.status} />
          <StatusPill kind="severity" value={complaint.severity} />
          <StatusPill kind="issue" value={complaint.issueType} />
        </div>

        <div className="detail-grid">
          <div>
            <h3>Case Snapshot</h3>
            <p>
              <strong>Description:</strong>{" "}
              {complaint.description || "No citizen description provided."}
            </p>
            <p>
              <strong>Department:</strong> {complaint.department || "Unassigned"}
            </p>
            <p>
              <strong>AI Summary:</strong> {complaint.aiSummary || "No AI summary"}
            </p>
            <p>
              <strong>AI Confidence:</strong>{" "}
              {typeof complaint.aiConfidence === "number"
                ? `${Math.round(complaint.aiConfidence * 100)}%`
                : "Unknown"}
            </p>
            <p>
              <strong>Coordinates:</strong>{" "}
              {complaint.latitude && complaint.longitude
                ? `${complaint.latitude}, ${complaint.longitude}`
                : "Not provided"}
            </p>
            <p>
              <strong>Reporter:</strong> {complaint.reportedByName || "Anonymous"} (
              {complaint.reportedByEmail || "No email"})
            </p>
            <p>
              <strong>Created:</strong> {formatDate(complaint.createdAt)}
            </p>
            <p>
              <strong>Updated:</strong> {formatDate(complaint.updatedAt)}
            </p>
          </div>
          <div>
            <h3>Evidence</h3>
            <div className="preview-wrap">
              <img src={complaint.imageUrl} alt="Original complaint evidence" className="preview-image" />
            </div>
          </div>
        </div>
      </article>

      <article className="card">
        <h3>Update Status</h3>
        <form className="inline-form" onSubmit={handleStatusUpdate}>
          <label className="field">
            <span>Current workflow state</span>
            <select
              value={statusValue}
              onChange={(event) => setStatusValue(event.target.value)}
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <button className="button button-primary" type="submit" disabled={isSavingStatus}>
            {isSavingStatus ? "Saving..." : "Save status"}
          </button>
        </form>
        {statusMessage && (
          <p className={`notice ${statusMessageType === "error" ? "notice-error" : "notice-success"}`}>
            {statusMessage}
          </p>
        )}
      </article>

      <article className="card">
        <h3>Verify Resolution (After Image)</h3>
        <form className="form-grid" onSubmit={handleVerify}>
          <label className="field">
            <span>After-resolution image</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setVerifyFile(event.target.files?.[0] || null)}
            />
          </label>
          {verifyPreview && (
            <div className="preview-wrap">
              <img src={verifyPreview} alt="After-resolution preview" className="preview-image" />
            </div>
          )}
          <button className="button button-secondary" type="submit" disabled={isVerifying}>
            {isVerifying ? "Verifying..." : "Run verification"}
          </button>
        </form>
        {verifyMessage && (
          <p className={`notice ${verifyMessageType === "error" ? "notice-error" : "notice-success"}`}>
            {verifyMessage}
          </p>
        )}

        {complaint.verification && (
          <div className="result-stack">
            <h4>Latest Verification</h4>
            <p>
              <strong>Status:</strong> {complaint.verification.verificationStatus}
            </p>
            <p>
              <strong>Summary:</strong>{" "}
              {complaint.verification.verificationSummary || "No summary returned"}
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {typeof complaint.verification.verificationConfidence === "number"
                ? `${Math.round(complaint.verification.verificationConfidence * 100)}%`
                : "Unknown"}
            </p>
            <p>
              <strong>Updated:</strong> {formatDate(complaint.verification.updatedAt)}
            </p>
          </div>
        )}
      </article>

      <article className="card">
        <h3>Audit Timeline</h3>
        {complaint.auditLogs?.length ? (
          <div className="audit-list">
            {complaint.auditLogs.map((log) => (
              <div className="audit-item" key={log.id}>
                <p>
                  <strong>{log.action}</strong> at {formatDate(log.createdAt)}
                </p>
                <p className="meta-line">Old: {renderJson(log.oldValue)}</p>
                <p className="meta-line">New: {renderJson(log.newValue)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">No audit events yet.</p>
        )}
      </article>
    </section>
  );
}
