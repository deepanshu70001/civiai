# Project TODO (Audit: 2026-04-03)

## Critical

- Add authentication and role-based access control for admin-only actions.
- Add rate limiting and abuse protection for upload and AI endpoints.
- Add server-side file size/type limits in upload route and return clear validation errors.
- Remove unused backend dependencies (`openai`, `@google/generative-ai`) to reduce attack surface and install time.

## High Priority

- Add API integration tests for complaint lifecycle endpoints with a test database.
- Add error boundary and retry UI patterns in frontend for unstable network calls.
- Add frontend form validation hints before submission (email, coordinate ranges, file size guidance).
- Improve audit log readability by storing structured action metadata consistently.

## Medium Priority

- Add search and sorting in dashboard and admin views.
- Add map preview for complaint coordinates in detail page.
- Add image compression before upload to reduce bandwidth usage.
- Add CSV export for admin filtered complaint views.

## DevEx / Operations

- Add CI pipeline for lint, test, and build checks on pull requests.
- Add database seed script for local QA data.
- Add API request logging with request IDs for easier debugging.

## UX Enhancements

- Add toast notifications for actions across all pages.
- Add empty-state illustrations and contextual onboarding hints for first-time users.
- Add progressive loading states for detail sections (timeline, verification, metadata).
