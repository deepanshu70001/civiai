# Architecture

## High-Level Components

- `client/`: React + Vite frontend with report, dashboard, detail, and admin pages
- `server/`: Express API with Prisma ORM
- PostgreSQL: source of truth for complaints, verifications, and audit logs
- Cloudinary: image storage
- Gemini: issue classification and before/after verification

## Core Backend Flow

1. Client uploads image using `POST /api/v1/uploads/image`
2. Server stores image in Cloudinary and returns hosted URL + public ID
3. Client sends complaint payload to `POST /api/v1/complaints`
4. Server classifies image via Gemini
5. Server persists complaint + AI metadata + audit log in PostgreSQL
6. Admin/user updates status via `PATCH /api/v1/complaints/:id/status`
7. Resolution can be verified via `POST /api/v1/complaints/:id/verify`
8. Impact intelligence can be fetched via `GET /api/v1/insights/overview`

## Data Model Summary

- `Complaint`: main complaint record and AI classification fields
- `ComplaintVerification`: before/after verification result for one complaint
- `ComplaintAuditLog`: immutable action log for status and verification events

## API Versioning

- Current API namespace: `/api/v1`

## Standout Layer (Hackathon)

- Impact intelligence engine computes:
  - Critical unresolved load
  - Resolution velocity
  - Verification confidence coverage
  - Hotspot clusters from geo/location data
  - Urgency-prioritized operational queue
- Dashboard surfaces this in a judge-friendly Impact Center to show measurable civic value.
