# API Contract

Base URL (local): `http://localhost:5000/api/v1`

## Health

### `GET /health`

Response:

```json
{
  "success": true,
  "message": "CiviAI API running"
}
```

## Uploads

### `POST /uploads/image`

Multipart form-data:
- `image` (file, required)

Response:

```json
{
  "success": true,
  "data": {
    "url": "https://...",
    "publicId": "civiai/...",
    "mimeType": "image/jpeg"
  }
}
```

## AI Test

### `POST /ai-test/classify`

Request body:

```json
{
  "imageUrl": "https://...",
  "imageMimeType": "image/jpeg"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "issueType": "POTHOLE",
    "severity": "HIGH",
    "department": "Roads Department",
    "summary": "Large pothole near intersection",
    "confidence": 0.91
  }
}
```

## Complaints

### `POST /complaints`

Creates a complaint and runs AI classification before storing.

Request body:

```json
{
  "imageUrl": "https://...",
  "imagePublicId": "civiai/example",
  "imageMimeType": "image/jpeg",
  "locationText": "MG Road, Bengaluru",
  "latitude": 12.972,
  "longitude": 77.593,
  "description": "Water leak near bus stop",
  "reportedByName": "Rahul",
  "reportedByEmail": "rahul@example.com"
}
```

Response: `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "cm...",
    "locationText": "MG Road, Bengaluru",
    "issueType": "WATER_LEAK",
    "severity": "MEDIUM",
    "status": "PENDING"
  }
}
```

### `GET /complaints`

Query params (optional):
- `status`: `PENDING | IN_REVIEW | ASSIGNED | RESOLVED | REJECTED`
- `issueType`: `GARBAGE | POTHOLE | WATER_LEAK | STREETLIGHT | DRAINAGE | ROAD_DAMAGE | UNKNOWN`
- `severity`: `LOW | MEDIUM | HIGH | CRITICAL`
- `page`: number (default `1`)
- `limit`: number (default `20`, max `100`)

Response:

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 1
  }
}
```

### `GET /complaints/:id`

Returns complaint details including verification and audit logs.

### `PATCH /complaints/:id/status`

Request body:

```json
{
  "status": "IN_REVIEW"
}
```

### `POST /complaints/:id/verify`

Runs before/after AI verification and upserts complaint verification.

Request body:

```json
{
  "afterImageUrl": "https://...",
  "afterImagePublicId": "civiai/after-example",
  "afterImageMimeType": "image/jpeg"
}
```

If verification is `RESOLVED`, complaint status is auto-updated to `RESOLVED`.

## Impact Insights

### `GET /insights/overview`

Query params:
- `windowDays` (optional, integer `7` to `180`, default `30`)

Purpose:
- Returns high-signal intelligence for operations and executive reporting.
- Includes summary metrics, top hotspots, department load, and urgency-ranked queue.

Response:

```json
{
  "success": true,
  "data": {
    "summary": {
      "total": 48,
      "open": 19,
      "resolved": 25,
      "rejected": 4,
      "criticalOpen": 3,
      "resolutionRate": 52.08,
      "avgResolutionHours": 19.4,
      "verificationRate": 41.7,
      "avgVerificationConfidence": 0.81,
      "complaintsLastWindow": 31,
      "windowDays": 30
    },
    "hotspots": [
      { "label": "Central Market", "total": 8, "open": 5, "critical": 2 }
    ],
    "departmentLoad": [
      { "department": "Roads", "total": 14, "open": 7, "resolved": 6 }
    ],
    "priorityQueue": [
      {
        "id": "cm123",
        "locationText": "MG Road",
        "issueType": "POTHOLE",
        "severity": "CRITICAL",
        "status": "PENDING",
        "urgencyScore": 154,
        "ageHours": 52,
        "department": "Roads"
      }
    ],
    "narrative": {
      "headline": "Civic Impact Pulse",
      "criticalLine": "3 critical incidents are still unresolved.",
      "hotspotLine": "Highest pressure zone is Central Market with 5 open complaints.",
      "queueLine": "Top priority is POTHOLE at MG Road (urgency 154)."
    }
  }
}
```

## Error Shape

```json
{
  "success": false,
  "message": "Validation error message"
}
```
