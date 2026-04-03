export function errorMiddleware(err, req, res, next) {
  if (err?.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({
      success: false,
      message: "Uploaded file is too large"
    });
  }

  if (err?.name === "MulterError") {
    return res.status(400).json({
      success: false,
      message: err.message || "Upload failed"
    });
  }

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
}
