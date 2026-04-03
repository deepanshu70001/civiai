import { Router } from "express";
import {
  createComplaint,
  getComplaintById,
  listComplaints,
  updateComplaintStatus,
  verifyComplaintResolution
} from "../controllers/complaint.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.post("/", asyncHandler(createComplaint));
router.get("/", asyncHandler(listComplaints));
router.get("/:id", asyncHandler(getComplaintById));
router.patch("/:id/status", asyncHandler(updateComplaintStatus));
router.post("/:id/verify", asyncHandler(verifyComplaintResolution));

export default router;
