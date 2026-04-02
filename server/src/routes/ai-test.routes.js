import { Router } from "express";
import { classifyComplaintImage } from "../services/ai.service.js";

const router = Router();

router.post("/classify", async (req, res, next) => {
  try {
    const { imageUrl, imageMimeType } = req.body;
    const result = await classifyComplaintImage(
      imageUrl,
      imageMimeType || "image/jpeg"
    );

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
});

export default router;