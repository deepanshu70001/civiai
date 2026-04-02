import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes.js";
import aiTestRoutes from "./routes/ai-test.routes.js";
import { ApiError } from "./utils/ApiError.js";
import { asyncHandler } from "./utils/asyncHandler.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/uploads", uploadRoutes);
app.use("/api/v1/ai-test", aiTestRoutes);
app.get("/health", (req, res) => {
  res.json({ success: true, message: "CiviAI API running" });
});

app.use("/api/v1/uploads", uploadRoutes);

export default app;