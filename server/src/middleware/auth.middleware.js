import { env } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";

const KNOWN_ROLES = new Set(["CITIZEN", "WORKER", "ADMIN"]);

function normalizeRole(value) {
  const normalized = String(value || "CITIZEN")
    .trim()
    .toUpperCase();
  return KNOWN_ROLES.has(normalized) ? normalized : "CITIZEN";
}

export function attachAuthContext(req, res, next) {
  req.auth = {
    role: normalizeRole(req.header("x-user-role")),
    adminPassword: req.header("x-admin-password") || "",
    workerName: (req.header("x-worker-name") || "").trim()
  };
  next();
}

export function requireAuth(req, res, next) {
  if (!env.AUTH_ENABLED) {
    return next();
  }

  if (!env.ADMIN_PASSWORD) {
    return next(
      new ApiError(500, "ADMIN_PASSWORD is missing. Add it to server/.env")
    );
  }

  if (
    !req.auth?.adminPassword ||
    req.auth.adminPassword !== env.ADMIN_PASSWORD
  ) {
    return next(new ApiError(401, "Unauthorized: invalid admin password"));
  }

  return next();
}

export function requireAuthIfAdmin(req, res, next) {
  const role = normalizeRole(req.auth?.role);
  if (role !== "ADMIN") {
    return next();
  }

  return requireAuth(req, res, next);
}

export function requireRole(...allowedRoles) {
  const normalizedAllowedRoles = new Set(
    allowedRoles.map((role) => normalizeRole(role))
  );

  return (req, res, next) => {
    const role = normalizeRole(req.auth?.role);

    if (!normalizedAllowedRoles.has(role)) {
      return next(new ApiError(403, "Forbidden: insufficient role"));
    }

    return next();
  };
}
