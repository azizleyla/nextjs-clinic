# Project Overview

This is a multilingual clinic/medical website (the public-facing site for a hospital).
It renders doctors, departments, branches, and blogs, with localized routing.

## Tech Stack
- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- TanStack Query (data fetching / caching)
- next-intl (i18n via `[locale]` routes)
- Sentry + Vercel Analytics (monitoring)

## Architecture — Data Layer

**`clinic-admin-backend` is the single source of truth for all data.**

- The frontend fetches everything from the external backend through
  `src/core/api/apiClient.ts` with the `{ backend: true }` option.
- The backend lives in a separate repo (`../clinic-admin-backend`, an Express API)
  and is the **only** thing that talks to Supabase (using the service-role key,
  server-side). The frontend has **no** direct database access.
- Do **not** reintroduce a second data layer. In particular, do not add Next.js
  route handlers under `src/app/api/*` that query the database directly, and do
  not add `@supabase/supabase-js` to the frontend. Public reads go through the
  backend.

### Backend endpoints currently consumed
- `GET /doctors?status=&department_id=&branch_id=&name=&page=&limit=`
- `GET /doctors/:id`
- `GET /departments`, `GET /departments/:id`
- `GET /branches`, `GET /branches/:id`
- `GET /blogs`, `GET /blogs/:id`
- `GET /hero-slides?is_active=true` (home hero; ordered by `order_index`)

All backend responses use the envelope `{ success, status, data, ...fields }`.
Read `res.data`; list pagination metadata (`totalPages`, `currentPage`,
`totalElements`, `hasNextPage`) is on the top-level fields. The frontend type
`BackendListResponse<T>` in `apiClient.ts` models this.

## Environment Variables
- `NEXT_PUBLIC_BACKEND_URL` — base URL of `clinic-admin-backend`. **Required** in
  every environment (dev/preview/prod). If unset it falls back to
  `http://localhost:5000`.
- Supabase credentials belong to the **backend**, not this repo.
- Do not modify environment files (`.env*`) — request the change instead.

## Development Rules
- Use TypeScript strictly. Do not use `any` unless absolutely necessary.
- Write tests for new features.
- Follow the existing feature-based structure (`src/features/<domain>/`,
  shared code in `src/shared/` and `src/core/`).
- Keep the single-source-of-truth data architecture described above.

## Before Making Changes
Always:
1. Analyze existing code.
2. Explain the plan.
3. Wait for approval before major changes.
