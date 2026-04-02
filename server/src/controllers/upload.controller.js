import { uploadBufferToCloudinary } from "../services/upload.service.js";

export async function uploadImage(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required"
      });
    }

    const result = await uploadBufferToCloudinary(req.file.buffer);

    res.status(201).json({
      success: true,
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        mimeType: req.file.mimetype
      }
    });
  } catch (error) {
    next(error);
  }
}