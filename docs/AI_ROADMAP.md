# Elmed Hospital — AI Feature Roadmap

Goal: add AI that **solves real patient problems** and is a **market differentiator**
for a clinic website — while being a strong RAG + tools portfolio piece.

---

## 1. Real problems (what patients & the clinic actually struggle with)

| # | Problem | Who feels it | Today's "solution" |
|---|---------|--------------|--------------------|
| P1 | "Which doctor/department do I need for my symptom?" | Patients | They guess or call |
| P2 | Questions about services, prep, hours, prices — no quick answer | Patients | Phone during work hours |
| P3 | No support after hours / weekends | Patients | Nothing (Tawk offline) |
| P4 | Language barrier (AZ / RU / EN) | Patients | Partial translations |
| P5 | Hard to find the right blog / health info | Patients | Weak search |
| P6 | Booking is a heavy manual process | Clinic + patient | Phone / form |
| P7 | Producing SEO blog content is slow | Clinic (admin) | Manual writing |

Competitors in AZ (MediClub, Bona Dea, Mərkəzi Klinika) mostly have **basic live
chat or nothing** — so a genuinely useful AI assistant is an immediate edge.

---

## 2. Flagship: **"Elmed AI Navigator"** (multilingual health assistant)

A chat assistant that **replaces Tawk.to** and combines **RAG + tools**. It does
*navigation and information*, never diagnosis.

**What it does**
- **Symptom → specialist triage (tools):** "başım gicəllənir və təzyiqim yüksəkdir"
  → maps to *Kardiologiya / Nevrologiya* → calls `find_doctors(department, branch)`
  → shows doctor cards + "Xəritədə baxın".
- **Grounded Q&A (RAG):** answers about services, departments, procedure prep,
  working hours — **cited from the clinic's own blogs + department content**
  (no hallucinated medical claims).
- **Smart routing:** collects intent and routes to `/contact` + shows the right
  branch; captures a lead (name, phone, reason) for staff follow-up.
- **24/7, multilingual (AZ/RU/EN)** — replies in the user's language.

**Why it wins**
- Solves P1–P4 directly, the highest-impact problems.
- Uses **both** RAG and tools (interview-grade portfolio).
- Nobody in the local market has this quality of assistant.

---

## 3. Roadmap (phased — each phase shippable on its own)

### Phase 1 — Grounded Q&A MVP (RAG)
- Ingest blogs + department descriptions → chunk → embed → store in **Supabase
  pgvector**.
- `POST /ai/chat`: retrieve top-k chunks → Claude answers **with citations**.
- Simple chat widget on the frontend (non-streaming first).
- **Ships:** P2, P5. Smallest, proves the RAG pipeline.

### Phase 2 — Tools + symptom triage
- Add function calling: `find_doctors`, `list_departments`, `get_department`,
  `get_branches` (each hits existing backend services — no new data layer).
- Department mapping prompt + tool orchestration.
- **Ships:** P1, P6 (lead capture). This is the differentiator.

### Phase 3 — Multilingual, streaming, UX & safety
- Detect/echo user locale (AZ/RU/EN); localized system prompt.
- Stream responses (SSE) for a live feel; typing indicators, suggested prompts.
- **Guardrails** (see §5).
- **Ships:** P3, P4 + production polish.

### Phase 4 — Advanced (optional, portfolio depth)
- **Semantic blog search** page (reuse embeddings).
- **Admin AI content assistant** (backend): draft SEO blogs, alt-text, meta.
- **Doctor-match explainer:** "why this doctor" summary from education/experience.
- Conversation analytics (top questions → content gaps).

---

## 4. Architecture (respects the single-source-of-truth rule)

```
Frontend (Next.js)                 Backend (clinic-admin-backend, Express)
──────────────────                 ───────────────────────────────────────
Chat widget  ──POST /ai/chat──▶    AI controller
(streaming UI)                       ├─ RAG: embed query → pgvector search (Supabase)
                                     ├─ Tools: call doctors/departments/branches services
                                     └─ Claude (generation) with retrieved context + tools
                                   Ingestion job: blogs/departments → chunk → embed → pgvector
```

- **AI lives in the backend** — API keys stay server-side, and it already owns
  Supabase (add the `pgvector` extension + an `embeddings` table).
- Frontend only calls `POST /ai/chat` via `apiClient`. No DB, no keys in the browser.
- **Models:** Claude **Haiku 4.5** (fast/cheap default) → **Sonnet 4.6** for harder
  reasoning. **Embeddings:** Voyage AI (Anthropic-recommended) or an open model.
- **Env (backend):** `ANTHROPIC_API_KEY`, `VOYAGE_API_KEY` (or chosen embedder).

---

## 5. Safety & guardrails (critical for a health product — and a portfolio plus)

- **No diagnosis / no prescriptions.** System prompt constrains scope to
  navigation + general, cited information.
- **Emergency escalation:** red-flag symptoms → "Təcili 103-ə zəng edin" and stop.
- **Grounded answers only** for medical/clinic facts; if not in context → "bilmirəm,
  həkimlə əlaqə saxlayın" instead of guessing.
- **Disclaimer** shown in the widget.
- **PII care:** lead data (name/phone) handled server-side, minimal retention.

---

## 6. Success metrics

- % of chats that end in a doctor/department recommendation or lead.
- Deflection: questions answered without a phone call.
- After-hours engagement share.
- Retrieval quality (answer cites correct source) via a small eval set.

---

## 7. Recommendation

Build **Phase 1 → 2** as the portfolio centerpiece ("AI Navigator: RAG + tools").
It's the smallest path to something demonstrably useful *and* interview-worthy,
and it's a real market edge for an AZ clinic. Phases 3–4 add depth over time.
