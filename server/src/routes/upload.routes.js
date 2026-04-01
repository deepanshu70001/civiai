import { Router } from "express";
import multer from "multer";
import { uploadImage } from "../controllers/upload.controller.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/image", upload.single("image"), uploadImage);

export default router;