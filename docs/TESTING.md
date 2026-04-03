# Testing Guide

## Current Coverage

- Frontend:
  - Lint checks for React code quality (`npm run lint`)
  - Production build verification (`npm run build`)
- Backend:
  - Unit tests for complaint validation schemas using Node test runner
  - Syntax checks for server source files

## Run Frontend Checks

From `client/`:

```bash
npm run test
```

CI-style check (lint + production build):

```bash
npm run test:ci
```

## Run Backend Tests

From `server/`:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

## Run From Repository Root

```bash
npm run test
npm run test:ci
```

## Recommended Manual Smoke Tests

1. Submit new complaint from report page with image upload.
2. Verify complaint appears on dashboard with expected AI classification.
3. Open complaint detail and update status.
4. Upload after-resolution image and run verification.
5. Confirm audit timeline records status/verification events.
