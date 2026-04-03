# CiviAI

CiviAI is an AI-assisted civic complaint platform for reporting public issues with image evidence, automatic issue classification, and resolution verification.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma
- AI: Gemini API
- Image Uploads: Cloudinary

## Current Progress

- Backend foundations are in place (Express app, routing, middleware, env config).
- Image upload endpoint is implemented (`/api/v1/uploads/image`).
- AI classification endpoint is implemented (`/api/v1/ai-test/classify`).
- Complaint lifecycle endpoints are implemented:
  - Create complaint with AI classification
  - List complaints with filters and pagination
  - Get complaint details with verification and audit log
  - Update complaint status with audit tracking
  - Verify before/after resolution with AI
- Prisma schema + migrations exist for complaints, verification, and audit logs.
- Frontend pages are now wired to backend APIs for reporting, dashboard tracking,
  detail actions, and admin status control.
- Impact intelligence layer added:
  - Hotspot detection
  - Urgency-priority queue
  - Resolution/verification performance metrics
  - Narrative impact summary for pitch/demo storytelling

## Repository Structure

```txt
civiai/
  client/   React frontend
  server/   Express + Prisma backend
  docs/     setup, architecture, API, and deployment docs
```

## Quick Start

See `docs/SETUP_GUIDE.md` for local setup.

Root-level convenience commands are available now:

- `npm run dev` (starts client dev server)
- `npm run dev:server` (starts backend dev server)
- `npm run test` (client lint + backend tests)

## Quality and Next Steps

- Testing workflow: `docs/TESTING.md`
- Prioritized backlog from latest audit: `docs/TODO.md`
- Deploy config: `render.yaml`
