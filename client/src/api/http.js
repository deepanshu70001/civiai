import axios from "axios";
import { getAdminPassword, getUserRole, getWorkerName } from "../lib/auth";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1"
});

http.interceptors.request.use((config) => {
  const nextConfig = { ...config };
  const headers = { ...(nextConfig.headers || {}) };
  const adminPassword = getAdminPassword();
  const role = getUserRole();
  const workerName = getWorkerName();

  if (adminPassword) {
    headers["x-admin-password"] = adminPassword;
  }

  if (role) {
    headers["x-user-role"] = role;
  }

  if (workerName) {
    headers["x-worker-name"] = workerName;
  }

  nextConfig.headers = headers;
  return nextConfig;
});
