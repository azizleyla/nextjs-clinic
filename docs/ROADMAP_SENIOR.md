# Elmed Hospital — Senior səviyyə inkişaf planı

Refaktor bitəndən sonra layihəni növbəti səviyyəyə aparmaq üçün təkliflər.

---

## 1. Testlər

### Unit & inteqrasiya
- **Vitest** — sürətli unit testlər (Jest alternativi, Vite/Next uyğun).
- **React Testing Library** — komponent testləri (DoctorsList, filterləri, formları).
- **API route testləri** — `/api/doctors`, `/api/departments`, `/api/branches` üçün mock Supabase ilə.
- **Utils/hooks testləri** — `useDebounce`, `useLoadMore`, `createSelectOptions` və s.

### E2E
- **Playwright** — kritik axınlar: səhifə açılışı, həkim axtarışı, filter, əlaqə formu, dil dəyişimi.
- CI-da hər PR üçün E2E suite işə salmaq.

### Nə yazmaq
- Əvvəlcə: ən kritik biznes məntiqi (filtrlər, axtarış, API client).
- Sonra: əsas səhifələrin “smoke” testləri və 1–2 tam E2E ssenari.

---

## 2. Performans & Core Web Vitals

- **Lighthouse / PageSpeed** — LCP, FID/INP, CLS ölçmək; problemli səhifələri prioritet etmək.
- **Bundle analiz** — `@next/bundle-analyzer`; böyük dependency-ləri lazy/parallel load etmək (məs. react-select artıq dynamic).
- **Şəkil optimizasiyası** — `next/image`, blur placeholder, müvafiq formatlar (WebP/AVIF).
- **Fontlar** — `next/font` ilə subset və display: swap; FOIT/FOUT azaltmaq.
- **RSC istifadəsi** — statik məzmunu mümkün qədər server component saxlayıb, client-i yalnız interaktiv hissələrə məhdudlaşdırmaq.

---

## 3. Error handling & monitoring

- **Error Boundary** — əsas layout-da global error boundary; uşaq komponentlərdə xəta olanda fallback UI.
- **Not Found / Error səhifələri** — `not-found.tsx`, `error.tsx` (hər locale üçün) — mesajlar və nav.
- **Sentry (və ya alternativ)** — production-da xətaları toplamaq, source map, release tracking.
- **API error mərkəzləşdirmə** — `apiClient`-da interceptor: log + Sentry, istifadəçiyə vahid error mesajı.

---

## 4. SEO & metadata

- **Structured data** — LocalBusiness / MedicalOrganization (JSON-LD) əsas səhifələrdə.
- **Sitemap** — `app/sitemap.ts` ilə dinamik sitemap (locale, məqalələr, həkimlər).
- **robots.txt** — Next.js `robots.ts` ilə idarə etmək.
- **Open Graph / Twitter** — hər səhifə üçün `openGraph`, `twitter:card`; şəkil ölçüləri standart.
- **Canonical & hreflang** — çoxdilli URL-lər üçün düzgün canonical və hreflang.

---

## 5. Təhlükəsizlik

- **Mühit dəyişənləri** — `zod` ilə schema (məs. `NEXT_PUBLIC_*`, `SUPABASE_*`); build/start-da yoxlama.
- **CSP (Content-Security-Policy)** — `next.config` və ya middleware ilə header; script/style source məhdudiyyətləri.
- **Rate limiting** — əsas API route-lar (əlaqə formu, axtarış) üçün middleware və ya API tərəfində limit.
- **Input validation** — API-lərdə body/query üçün Zod; XSS və injection risklərini azaltmaq.

---

## 6. CI/CD & keyfiyyət

- **GitHub Actions (və ya başqa CI)**:
  - Lint (ESLint).
  - Type check (tsc).
  - Unit + inteqrasiya testləri.
  - E2E (Playwright) — əsas branch və ya nightly.
  - Build — hər PR üçün.
- **Pre-commit** — Husky + lint-staged: format + lint.
- **Branch qoruma** — main-ə merge əvvəl CI uğurlu olmalı.

---

## 7. Dokumentasiya & struktur

- **README** — layihəni clone etmək, env, işə salmaq, test və build əmrləri.
- **ADR (Architecture Decision Records)** — qısa sənədlər: “niyə feature-based”, “niyə bu API client” və s.
- **Component kataloq** — Storybook: Button, DoctorItem, Select, Banner və s. — variantlar və state-lər.
- **API contract** — əsas endpoint-lər üçün nümunə request/response (OpenAPI/Swagger istəyə görə).

---

## 8. State & data layer

- **Server state** — React Query (TanStack Query) və ya SWR: doctors, departments, branches üçün cache, refetch, loading/error vahid yerdə.
- **Form state** — əgər mürəkkəb formalar artırsa: React Hook Form + Zod.
- **URL ilə sinxron** — filterləri query parametrlərdə saxlamaq (məs. `?department_id=1&branch_id=2`); paylaşılabilən linklər və back/forward.

---

## 9. Accessibility (a11y)

- **axe-core** — Lighthouse və ya E2E-da avtomatik a11y yoxlamaları.
- **Klaviatura** — bütün interaktiv elementlər focus və Enter/Space ilə idarə oluna bilsin.
- **ARIA** — dropdown, modal, live regionlar üçün uyğun role/aria-*.
- **Kontrast və font** — WCAG AA minimum; fokus indikatorları görünən.

---

## 10. İnternasionalizasiya (i18n)

- **Yoxlanmamış keylər** — build və ya dev-da “missing translation” warning.
- **RTL** — lazım olsa (məs. ərəb) layout və CSS logical properties.
- **Tarix/saat/ədəd** — Intl.DateTimeFormat, Intl.NumberFormat; locale-ə uyğun.

---

## Prioritet təklifi

| Prioritet | Başlıq                    | Səbəb |
|----------|---------------------------|--------|
| 1        | Unit testlər (Vitest + RTL) | Təhlükəsiz refaktor, regression azalması |
| 2        | Error Boundary + error/not-found | İstifadəçi təcrübəsi və xəta görünüşü |
| 3        | CI (lint, typecheck, test, build) | Hər commit üçün keyfiyyət |
| 4        | E2E (Playwright) 1–2 ssenari | Kritik axınların qorunması |
| 5        | SEO (sitemap, structured data) | Axtarış və trafik |
| 6        | Monitoring (Sentry)       | Production xətalarının görünməsi |
| 7        | React Query / URL filters | Data və UX təkmilləşməsi |
| 8        | Storybook + a11y          | Komponent keyfiyyəti və inclusiveness |

Bu sənədi `docs/ROADMAP_SENIOR.md` kimi saxlayıb, addım-addım “refaktor bitəndən sonra” bu maddələri icra edə bilərsiniz.
