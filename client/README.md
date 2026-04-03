# CiviAI Client

Frontend for the CiviAI platform.

## Current Status

- Vite + React app initialized
- Functional pages implemented:
  - `/` report submission with upload + complaint creation
  - `/dashboard` filtered complaint list with pagination
  - `/complaints/:id` detail view with status update + verification flow
  - `/admin` queue view for quick status operations
- API clients configured in `src/api/http.js` and `src/api/complaints.js`

## Run Locally

```bash
npm install
npm run dev
```

## Environment

Create `.env` (optional):

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```
