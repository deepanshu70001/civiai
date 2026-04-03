# Deployment

Quick deploy file included: `render.yaml` (API + frontend static site).

## Recommended Split

- Frontend (`client`) deployed as static app (Vercel/Netlify)
- Backend (`server`) deployed as Node.js API service (Render/Railway/Fly/VM)
- PostgreSQL managed database (Neon/Supabase/RDS/etc.)

## Backend Deployment Checklist

1. Set environment variables:
   - `PORT`
   - `DATABASE_URL`
   - `GEMINI_API_KEY`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
2. Install dependencies in `server/`
3. Run Prisma migrations against production DB:

```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Start API:

```bash
npm run start
```

## Frontend Deployment Checklist

1. Set `VITE_API_BASE_URL` to deployed backend URL, for example:
   - `https://api.example.com/api/v1`
2. Build and deploy:

```bash
npm run build
```

## Post-Deploy Validation

1. Check backend health endpoint: `/health`
2. Test upload endpoint: `POST /api/v1/uploads/image`
3. Test complaint creation: `POST /api/v1/complaints`
4. Test list endpoint: `GET /api/v1/complaints`
5. Test status update and verification flow
6. Test impact endpoint: `GET /api/v1/insights/overview`

## Hackathon Demo Checklist

1. Open dashboard and show Impact Center summary cards.
2. Highlight Top Hotspots and Priority Queue for operational triage story.
3. Create a new complaint live and refresh dashboard to show metric impact.
4. Verify a complaint and show confidence + status transition in detail page.
