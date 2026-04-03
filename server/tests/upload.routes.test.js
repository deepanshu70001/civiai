import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

process.env.DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgresql://user:pass@localhost:5432/civiai_test?schema=public";

const { default: app } = await import("../src/app.js");

test("upload route rejects missing file", async () => {
  const response = await request(app).post("/api/v1/uploads/image");

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
  assert.match(response.body.message, /Image file is required/i);
});

test("upload route rejects unsupported mime types", async () => {
  const response = await request(app)
    .post("/api/v1/uploads/image")
    .attach("image", Buffer.from("plain text payload"), {
      filename: "not-image.txt",
      contentType: "text/plain"
    });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
  assert.match(response.body.message, /Invalid file type/i);
});

test("upload route enforces max file size", async () => {
  const oversizedPayload = Buffer.alloc(9 * 1024 * 1024, 0);

  const response = await request(app)
    .post("/api/v1/uploads/image")
    .attach("image", oversizedPayload, {
      filename: "too-large.jpg",
      contentType: "image/jpeg"
    });

  assert.equal(response.status, 413);
  assert.equal(response.body.success, false);
  assert.match(response.body.message, /too large/i);
});
