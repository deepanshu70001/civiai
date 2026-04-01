import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ success: true, message: "CiviAI API running" });
});

app.use("/api/v1/uploads", uploadRoutes);

export default app;