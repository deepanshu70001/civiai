# Setup Guide

## Prerequisites

- Node.js `>= 20`
- npm
- PostgreSQL database
- Cloudinary account
- Gemini API key

## 1. Clone and Install

From repo root:

```bash
cd client
npm install

cd ../server
npm install
```

## 2. Configure Environment Variables

Create `server/.env` (you can copy from `server/.env.example`):

```env
PORT=5000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public
GEMINI_API_KEY=your_gemini_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Optional frontend env (`client/.env`):

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

You can copy from `client/.env.example`.

## 3. Run Prisma

From `server/`:

```bash
npm run prisma:generate
npm run prisma:migrate
```

## 4. Start Servers

Backend (from `server/`):

```bash
npm run dev
```

Frontend (from `client/`):

```bash
npm run dev
```

## 5. Smoke Test

1. Open `GET http://localhost:5000/health`
2. Upload image via `POST /api/v1/uploads/image`
3. Create complaint via `POST /api/v1/complaints`
4. Fetch complaints via `GET /api/v1/complaints`
