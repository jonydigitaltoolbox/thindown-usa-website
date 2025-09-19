# coding-rules.md

**Purpose:** Steer AI assistants (and humans) toward *simple, composable, maintainable* software. Prefer **simple** (unbraided) over **easy** (familiar). Avoid **complecting** (mixing concerns). Build boring code that works.

**How to use (every task):**
1. **Plan (≤10 bullets).** List modules, data shapes, boundaries.
2. **Slice small.** Implement the thinnest vertical slice.
3. **Emit a Design Summary.** Modules, responsibilities, public APIs.
4. **Self-check with heuristics.** (See “Quick Heuristics”.)
5. **No guesses.** If a lib/API isn’t verified, generate a stub + TODO.

---

## A. North Stars
1. **Prefer Simple over Easy.** Single purpose, minimal coupling, clear data flow.
2. **Compose, don’t complect.** Independent parts assembled at edges.
3. **Values over State.** Default to immutability; isolate mutation.
4. **Declarative first.** Express *what* (queries, configs, rules) before *how*.
5. **Human-scale.** Small files, short functions, narrow interfaces.

---

## B. Workflow
6. **Make it work → right → fast.** MVP slice, then refactor clarity, then optimize.
7. **State the plan before code.** 5–10 bullets, explicit boundaries.
8. **Don’t invent APIs.** If unsure, stop and stub with TODO + reference link.
9. **Small diffs.** One sentence explains each change.
10. **Design Summary required.** After coding: modules, contracts, examples.

---

## C. Separation of Concerns
11. **Split I/O from logic.** No function both fetches and decides business rules.
12. **Split fetch / transform / render.** Wire together in a thin coordinator.
13. **Controllers adapt; services decide.** Keep domain logic out of controllers.
14. **Repositories persist; domain reasons.** No SQL in domain code.
15. **Configuration, not code.** Env and settings outside source behavior.

```ts
// ✅ Separate concerns
const parseOrder = (raw: string) => Order.parse(JSON.parse(raw));
const loadOrder = async (id: string) => fetch(`/orders/${id}`).then(r => r.text());

// ❌ Mixed I/O + business
async function getAndApplyDiscount(orderId: string) { /* fetch + decide intertwined */ }
```

---

## D. Data & State
16. **Explicit data shapes at boundaries.** Validate inputs/outputs (zod/pydantic).
17. **Isolate time.** Inject `now()`; don’t read clocks in domain logic.
18. **Idempotence by default.** Safe retries for external effects.
19. **One source of truth per concept.** Derive, don’t duplicate.
20. **Name effects loudly.** `save*`, `publish*`, `send*` imply I/O.

```ts
import { z } from "zod";
export const Order = z.object({
  id: z.string(),
  items: z.array(z.object({ sku: z.string(), qty: z.number().int().positive() })),
});
```

---

## E. Design & Abstraction
21. **Policy of Abstraction (Who/What/When/Where/Why).** Split these, bind late.
22. **Composition over inheritance.** Prefer small interfaces/traits.
23. **Polymorphism à la carte.** Define data, contracts, adapters independently.
24. **Stable interfaces; evolving internals.** Hide implementation details.
25. **Ubiquitous language (DDD).** Code terms mirror domain terms.

---

## F. SOLID (short)
26. **S:** One reason to change per unit.  
27. **O:** Extend via new modules, not editing core.  
28. **L:** Honor contracts; else composition.  
29. **I:** Many small interfaces > one fat one.  
30. **D:** High-level depends on abstractions.

---

## G. Testing (guardrails, not crutches)
31. **Test boundaries first.** Parsing/validation/adapters, then core rules.
32. **Property + example tests > snapshots.** Verify invariants.
33. **If tests are painful, design is wrong.** Simplify.

---

## H. Performance & Reliability
34. **Measure before optimizing.** Keep perf tweaks local & reversible.
35. **Backpressure + limits.** Concurrency caps, timeouts, queues.
36. **Graceful failure.** Fail fast at edges, typed errors, no silent catch.

```ts
type Result<T> = { ok: true; value: T } | { ok: false; error: string };
```

---

## I. Output Quality (what the AI must emit)
37. **No magic.** All deps imported, versions real, APIs documented.
38. **Explain choices.** 1–3 bullets for non-obvious decisions.
39. **Usage examples.** Minimal snippets for each public API.
40. **Ops notes.** Env vars, migrations, run commands.

---

## J. Quick Heuristics
- **One-level-up test:** Can a teammate grok this file in 2 minutes?
- **Rename test:** If you can’t name it cleanly, it does too much.
- **Diff test:** Shipable in < ~100 LOC?
- **Swap test:** Can a dependency be replaced via an interface?
- **Time test:** Any domain code reading wall-clock or globals? Fix it.

---

# Shopify & Integrations Addendum

## K. Shopify (Theme/App) Rules
41. **Liquid = presentation; logic = JS/services.** Metafields/settings as config; sections/snippets render only.
42. **Metafields over hardcoded flags.** Document keys & shapes; validate on server.
43. **Line item properties for UX only.** Normalize to canonical codes server-side.
44. **No domain logic in templates.** If logic must exist, keep it trivial/formatting.
45. **OS 2.0 sections are dumb.** No fetch/mutate inside sections; accept data, render.
46. **Cart ops are minimal + debounced.** One intent → one network call; optimistic UI with rollback.
47. **Bundles & virtuals:** Single parent with structured `properties` or backend expanders.
48. **Currency & measurement correctness.** Use Shopify money objects; don’t recompute taxes in Liquid.
49. **Use GraphQL Bulk for bulk.** Avoid N× REST loops; paginate or bulk.
50. **Theme data grammar is formal.** If encoding metadata (e.g., in alt text), define grammar and validate.

---

## L. Shopify App/Functions/Flow
51. **Shopify Functions for core math.** Keep functions pure; config via app settings/metafields.
52. **Flow & Webhooks orchestrate.** Triggers kick jobs; heavy work in queues/services.
53. **Admin API cost awareness.** For GraphQL, check `extensions.cost`; back off proactively.

---

## M. Webhooks (Shopify specifics)
54. **Verify HMAC before parse.** Timing-safe compare; drop invalid at edge.

```ts
import crypto from "crypto";
export function validShopifyHmac(raw: Buffer, hmac: string, secret: string) {
  const digest = crypto.createHmac("sha256", secret).update(raw).digest("base64");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmac || ""));
}
```

55. **Idempotent consumer.** Deduplicate by `X-Shopify-Webhook-Id` (or topic+payload hash); persist a “seen” marker.
56. **Ack fast; work async.** Return 200 quickly, enqueue job.
57. **Replay safe.** Use `updated_at`/version to derive truth, not arrival order.

---

## N. APIs & Integrations (Shopify, EasyPost, etc.)
58. **Boundary-first design.** Typed request/response per API; validate on ingress/egress.
59. **Separate “rate” vs “buy.”** Never purchase during rating.

```ts
interface RateSvc { getRates(req: QuoteReq): Promise<Quote[]> }
interface LabelSvc { buyLabel(req: BuyReq): Promise<Label> }
```

60. **Idempotency everywhere.** Use provider idempotency keys; or deterministic op keys.
61. **Retries = jittered backoff + circuit breaker.** Retry only retryable errors.
62. **No invented endpoints.** If not in docs, stub + TODO; don’t guess.
63. **Respect rate limits.** REST headers / GraphQL cost; queue when near limits.
64. **Secrets per environment.** No shared tokens; rotate; never log PII/secrets.
65. **Webhooks as truth; polling fallback.** Keep dead-letter + replay.

---

## O. Own DB / Data Pipeline
66. **Source of truth per concept.** E.g., Shopify=catalog; DB=mappings/ops.
67. **Explicit ID mapping tables.** Centralized provider↔internal IDs.

```sql
create table id_map (
  provider text,
  kind text,
  provider_id text,
  internal_id uuid,
  unique(provider, kind, provider_id)
);
```

68. **Event log + materialized views.** Store raw events immutably; derive read models idempotently.
69. **Upsert with version guards.** Keep `updated_at`/version to avoid time-warp.
70. **Queues decouple edges.** Controllers thin; workers do side effects.
71. **PII minimization.** Only necessary fields; encrypt sensitive columns; TTL transient data.
72. **Migrations reversible + reviewed.** Include DOWN; avoid destructive changes at peak.

---

## P. EasyPost / Carriers
73. **Normalize addresses/units up front.** Country/postal/units validated before rate/buy.
74. **Label lifecycle modeled.** `quote → buy → store_label → fulfill → track` with refund path.
75. **Idempotent purchase.** One idempotency key per buy; persist external shipment/label IDs.
76. **Async tracking.** Prefer webhooks; if polling, record last checkpoint.
77. **Cost attribution explicit.** Persist base/fuel/surcharges/insurance + chosen service.

---

## Q. Frontend Integration (Theme/App)
78. **Validate at the edge.** Re-validate on server before effects; never trust client-only checks.
79. **Thin adapters to Admin/carriers/DB.** Frontend → your API → providers.
80. **Progressive enhancement.** Non-JS fallbacks where feasible; surface user-safe errors.
81. **No global mutable singletons.** For Alpine/React, keep components pure where possible; events up, state down.

---

## R. Observability & Ops
82. **Correlation IDs end-to-end.** Generate at edge; pass through logs/calls.
83. **Structured logs.** JSON: `level, ts, reqId, subsystem, event, durationMs`; redact PII.
84. **Golden signals per API/queue.** Rate, errors, duration, saturation; alert on SLOs.
85. **Runbooks & feature flags.** Rollback steps documented; risky paths behind flags (default OFF in prod).

---

## S. Tiny Reference Flows

**S1. Catalog Sync (Shopify → DB)**  
- Receive `products/update` → verify HMAC → dedupe → enqueue.  
- Worker: fetch full product (GraphQL) → map → upsert with `updated_at` guard → append event → emit `catalog.synced`.

**S2. Rate & Buy Label (Cart → EasyPost)**  
- `POST /shipping/quote`: validate → `RateSvc.getRates` → return normalized quotes.  
- `POST /shipping/buy`: validate selection → idempotency key → `LabelSvc.buyLabel` → persist costs/label → update Shopify fulfillment → emit `shipping.purchased`.

**S3. Order Webhook (Fulfillment)**  
- On `orders/paid`: HMAC verify → dedupe → create internal “fulfillment request” → queue.  
- Worker: allocate inventory → (policy) buy label → update fulfillment → log transitions.

---

## T. Hard Bans / Don’ts
- Mix HTTP, DB, and domain rules in one function/file.  
- Inherit just to reuse code; prefer composition.  
- Hide side effects or global state in “utils.”  
- Pull Shopify in Liquid at render time for heavy ops.  
- Loop REST for bulk; ignore rate limits/cost.  
- Treat webhook arrival order as truth.  
- Log raw payloads or secrets.

---

### Appendix: Minimal Auth Slice (pattern example)

```ts
// Ports
interface UserRepo { findByEmail(e: string): Promise<{ id: string; passwordHash: string } | null> }
interface Hasher { verify(plain: string, hash: string): Promise<boolean> }
interface Clock { now(): Date }

// Domain (pure-ish: effects are via ports)
type Result<T> = { ok: true; value: T } | { ok: false; error: string };
type Creds = { email: string; password: string };

export async function validateCredentials(
  c: Creds, repo: UserRepo, hasher: Hasher, clock: Clock
): Promise<Result<string>> {
  const rec = await repo.findByEmail(c.email);
  if (!rec) return { ok: false, error: "INVALID_CREDENTIALS" };
  const ok = await hasher.verify(c.password, rec.passwordHash);
  return ok ? { ok: true, value: rec.id } : { ok: false, error: "INVALID_CREDENTIALS" };
}

// Adapter (I/O)
export async function loginHandler(req, res, repo: UserRepo, hasher: Hasher, clock: Clock) {
  const body = await req.json();
  const r = await validateCredentials(body, repo, hasher, clock);
  if (!r.ok) return res.status(401).json({ error: r.error });
  // set cookie/session here; keep domain clean
  res.status(200).json({ userId: r.value, at: clock.now().toISOString() });
}
```

**Why it fits:** I/O isolated; domain logic pure; time injected; contracts explicit; easy to test/extend.

---

**End of file.**
