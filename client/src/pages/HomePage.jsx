import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createComplaint,
  getErrorMessage,
  uploadImage
} from "../api/complaints";
import StatusPill from "../components/StatusPill";

const defaultForm = {
  locationText: "",
  description: "",
  reportedByName: "",
  reportedByEmail: "",
  latitude: "",
  longitude: ""
};

function buildComplaintPayload(form, upload) {
  const payload = {
    imageUrl: upload.url,
    imagePublicId: upload.publicId,
    imageMimeType: upload.mimeType,
    locationText: form.locationText.trim()
  };

  if (form.description.trim()) payload.description = form.description.trim();
  if (form.reportedByName.trim()) payload.reportedByName = form.reportedByName.trim();
  if (form.reportedByEmail.trim()) {
    payload.reportedByEmail = form.reportedByEmail.trim();
  }
  if (form.latitude.trim()) payload.latitude = Number(form.latitude);
  if (form.longitude.trim()) payload.longitude = Number(form.longitude);

  return payload;
}

export default function HomePage() {
  const [form, setForm] = useState(defaultForm);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [createdComplaint, setCreatedComplaint] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl("");
      return undefined;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!file) {
      setError("Please upload an image before submitting.");
      return;
    }

    if (!form.locationText.trim()) {
      setError("Location text is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const uploadResult = await uploadImage(file);
      const payload = buildComplaintPayload(form, uploadResult);
      const complaint = await createComplaint(payload);

      setCreatedComplaint(complaint);
      setForm(defaultForm);
      setFile(null);
      setSuccessMessage("Complaint submitted successfully. AI has classified the issue.");
    } catch (submissionError) {
      setError(getErrorMessage(submissionError));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="page-grid page-grid-two">
      <article className="card">
        <div className="section-head">
          <p className="eyebrow">Citizen Intake</p>
          <h2>Report Civic Issue</h2>
          <p>Upload issue evidence, describe the location, and let AI classify it.</p>
        </div>

        <div className="stats-row stats-row-compact">
          <div className="stat-chip">
            <span>Upload first</span>
            <strong>1</strong>
          </div>
          <div className="stat-chip">
            <span>AI classify</span>
            <strong>2</strong>
          </div>
          <div className="stat-chip">
            <span>Track status</span>
            <strong>3</strong>
          </div>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field">
            <span>Issue image</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
            />
          </label>

          {previewUrl && (
            <div className="preview-wrap">
              <img src={previewUrl} alt="Issue preview" className="preview-image" />
            </div>
          )}

          <label className="field">
            <span>Location text</span>
            <input
              name="locationText"
              value={form.locationText}
              onChange={handleInputChange}
              placeholder="Example: MG Road, near metro gate 2"
              required
            />
          </label>

          <label className="field">
            <span>Description</span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Share visible details so field teams can act faster."
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span>Latitude (optional)</span>
              <input
                name="latitude"
                type="number"
                step="any"
                value={form.latitude}
                onChange={handleInputChange}
                inputMode="decimal"
                placeholder="12.9716"
              />
            </label>
            <label className="field">
              <span>Longitude (optional)</span>
              <input
                name="longitude"
                type="number"
                step="any"
                value={form.longitude}
                onChange={handleInputChange}
                inputMode="decimal"
                placeholder="77.5946"
              />
            </label>
          </div>

          <div className="field-row">
            <label className="field">
              <span>Your name (optional)</span>
              <input
                name="reportedByName"
                value={form.reportedByName}
                onChange={handleInputChange}
                placeholder="Aditi Sharma"
              />
            </label>
            <label className="field">
              <span>Email (optional)</span>
              <input
                name="reportedByEmail"
                type="email"
                value={form.reportedByEmail}
                onChange={handleInputChange}
                placeholder="aditi@example.com"
              />
            </label>
          </div>

          <button className="button button-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Complaint"}
          </button>

          {successMessage && <p className="notice notice-success">{successMessage}</p>}
          {error && <p className="notice notice-error">{error}</p>}
        </form>
      </article>

      <aside className="card">
        <div className="section-head">
          <p className="eyebrow">AI Result</p>
          <h2>Latest Submission</h2>
        </div>

        {!createdComplaint && (
          <p className="muted">
            No complaint submitted in this session yet. The AI classification summary will
            appear here right after submission.
          </p>
        )}

        {createdComplaint && (
          <div className="result-stack stagger-fade">
            <div className="status-row">
              <StatusPill kind="issue" value={createdComplaint.issueType || "UNKNOWN"} />
              <StatusPill kind="severity" value={createdComplaint.severity} />
              <StatusPill kind="status" value={createdComplaint.status} />
            </div>
            <p>
              <strong>Location:</strong> {createdComplaint.locationText}
            </p>
            <p>
              <strong>Department:</strong> {createdComplaint.department || "Not specified"}
            </p>
            <p>
              <strong>AI Summary:</strong> {createdComplaint.aiSummary || "No summary returned"}
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {typeof createdComplaint.aiConfidence === "number"
                ? `${Math.round(createdComplaint.aiConfidence * 100)}%`
                : "Unknown"}
            </p>
            <Link
              className="button button-secondary"
              to={`/complaints/${createdComplaint.id}`}
            >
              Open complaint details
            </Link>
          </div>
        )}
      </aside>
    </section>
  );
}
