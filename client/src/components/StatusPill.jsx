function toCssSlug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_");
}

export default function StatusPill({ kind, value }) {
  if (!value) {
    return <span className="pill">UNKNOWN</span>;
  }

  if (kind === "status") {
    return <span className={`pill pill-status-${toCssSlug(value)}`}>{value}</span>;
  }

  if (kind === "severity") {
    return <span className={`pill pill-severity-${toCssSlug(value)}`}>{value}</span>;
  }

  return <span className="pill pill-issue">{value}</span>;
}
