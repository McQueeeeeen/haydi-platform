# Haydi.kz Backend API Foundation

This document describes the initial backend foundation for Haydi.kz. It is a standalone Node.js + TypeScript API service in `apps/api`, built with Fastify and Zod.

The current goal is to define a clean API surface without connecting a database, Supabase, authentication, or 1C.

## What Exists Now

- A separate API service under `apps/api`.
- Fastify server bootstrap with CORS for the local frontend.
- Zod validation for request payloads and params.
- Central error handling with validation error responses.
- Mock/stub services for leads, catalog, offers, and 1C sync.
- Health endpoint for local and deployment checks.

## Local Run

Install backend dependencies:

```bash
cd apps/api
npm install
```

Run the API locally:

```bash
npm run dev
```

By default the API listens on:

```text
http://localhost:4000
```

Root scripts are also available:

```bash
npm run dev:api
npm run build:api
npm run typecheck:api
```

## Environment

Use `apps/api/.env.example` as the backend environment template:

```text
API_PORT=4000
API_HOST=0.0.0.0
NODE_ENV=development
PUBLIC_SITE_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173
```

Frontend can later call the API through:

```text
VITE_API_BASE_URL=http://localhost:4000
```

That variable is documented for a future frontend integration step only. The current frontend is not connected to the API yet.

## Endpoints

### Health

```http
GET /health
```

Response:

```json
{
  "status": "ok",
  "service": "haydi-api",
  "timestamp": "2026-05-24T00:00:00.000Z"
}
```

### Leads

```http
POST /api/leads
```

Required:

- `name`
- `leadType`
- `phone` or `whatsapp`

Allowed `leadType` values:

- `consultation`
- `collection_presentation`
- `lighting_selection`
- `catalog_request`
- `designer_request`

Current response is a mock:

```json
{
  "success": true,
  "leadId": "mock_...",
  "status": "received"
}
```

### Catalog

```http
GET /api/catalog/categories
GET /api/catalog/brands
GET /api/catalog/products
GET /api/catalog/products/:slug
```

All catalog data is currently static mock data. There is no real catalog persistence.

### Offers

```http
POST /api/offers
POST /api/offers/:offerId/items
POST /api/offers/:offerId/share
```

These endpoints prepare the future commercial offer flow. They currently return mock responses.

The future model should preserve:

- managers add products to commercial offers, not carts;
- offer versions;
- price snapshots inside offers;
- soft locks;
- audit logs;
- WhatsApp share links.

### Sync

```http
POST /api/sync/1c/manual
```

Current response:

```json
{
  "success": true,
  "status": "not_configured",
  "message": "1C sync is not connected yet."
}
```

Future 1C integration should cover:

- sync every 15 minutes;
- prices;
- stock;
- products;
- `external_1c_id`;
- sync logs;
- retry/backoff;
- partial failure safety.

## Error Shape

Validation errors return:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request payload.",
    "details": []
  }
}
```

Production responses do not expose stack traces.

## Explicitly Not Implemented Yet

- No database.
- No Supabase.
- No PostgreSQL clients.
- No Prisma or Drizzle.
- No migrations.
- No RLS.
- No auth or roles.
- No real lead persistence.
- No real catalog persistence.
- No real commercial offer persistence.
- No 1C connection.
- No frontend integration.

## Next Stages

1. Add Supabase/PostgreSQL integration.
2. Add auth and project roles.
3. Persist leads.
4. Persist catalog data.
5. Implement commercial offers, versions, snapshots, locks, comments, and audit logs.
6. Add 1C sync with logs, retries, and partial failure handling.
