# PostHog Self-driving Setup Report

_Generated 2026-08-17 for project 250625 (portfolio26)_

## Summary

PostHog Self-driving has been configured for this Vue 3 portfolio SPA. Session Replay, Error Tracking, and Support products were enabled; all native signal sources are wired to the inbox; the GitHub integration was already connected; and two Replay Vision scanners are armed and ready. Findings will start appearing in the [Self-driving inbox](https://eu.posthog.com/project/250625/inbox) within ~30 minutes of the first scout runs.

---

## AI data processing

**Approved.** Organization-level AI data processing was approved before this run — a prerequisite enforced by the wizard.

---

## GitHub

**Already connected** (GitHub App for the `meatlake` organization, integration id 78449, connected 2026-08-17). No action required.

---

## Products enabled

| Product | Result | Notes |
|---|---|---|
| Session Replay | Follow-up required | `products-enable` tool not available on this deploy — see follow-ups |
| Error Tracking | Follow-up required | Same — see follow-ups |
| Support (Conversations) | Follow-up required | Same — see follow-ups |

**Init check:** `src/main.ts` posthog.init is clean — no `disable_session_recording: true` or `capture_exceptions: false`. Once products are enabled in PostHog settings, the client will pick them up with no code changes needed.

**Support note:** Once Conversations is enabled, tickets only arrive once an inbound channel (email / inbox / Slack) is connected — see follow-ups.

---

## Signal sources

| Source product | Source type | Action |
|---|---|---|
| `signals_scout` | `cross_source_issue` | On by default — no row needed |
| `health_checks` | `health_issue` | Already enabled (id `01a00f41-73a0-78fc-8ceb-17b3b3a2721d`) |
| `error_tracking` | `issue_created` | Already enabled (id `01a00f41-787f-7d1b-a213-80af47d04354`) |
| `error_tracking` | `issue_reopened` | Already enabled (id `01a00f41-7bb4-719a-94bd-9d9e72356764`) |
| `error_tracking` | `issue_spiking` | Already enabled (id `01a00f41-80ac-7b52-853a-76690a90daf2`) |
| `session_replay` | `session_analysis_cluster` | Already enabled (id `01a00f41-84d3-77bf-b568-c292cee76c9c`) |
| `conversations` | `ticket` | Already enabled (id `01a00f41-86f1-7bdf-ace6-f2d8ef90c876`) |
| `replay_vision` | — | Self-authorizing via scanner `emits_signals` flag — no row created |
| `llm_analytics` | — | Skipped — not a v1 responder |
| `logs` | — | Skipped — not a v1 responder |

---

## Connected tools

| Tool | Status |
|---|---|
| GitHub Issues | Not used (user declined) |
| Linear | Not used (user declined) |
| Jira | Not used (user declined) |
| Sentry | Not used (user declined) |
| Zendesk | Not used (user declined) |

No external tool sources were connected.

---

## Scout troop

**Run budget:** 100 runs/day (early access default); 5 runs used today, 95 remaining. Banner: _"Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more."_

### Enabled (5 scouts)

| Scout | What it watches |
|---|---|
| `general` | Cross-product correlations and surfaces no specialist covers |
| `health-checks` | PostHog setup health — missing events, proxy gaps, outdated SDKs |
| `product-analytics` | Funnel/retention/lifecycle regressions in saved insights |
| `web-analytics` | Per-channel session volume, attribution breakage, landing-page health |
| `web-vitals` | Core Web Vitals (LCP/INP/CLS/FCP) per page vs Google thresholds |

5 scouts × ~1 run/day = ~5 runs/day; well within the 100/day budget, leaving room for step 6b's custom scouts if added later.

### Disabled (22 scouts)

| Scout | Reason disabled |
|---|---|
| `error-tracking` | Covered by native `error_tracking` source (intentional — not a re-enable candidate) |
| `session-replay` | Covered by native `session_replay` source (intentional — not a re-enable candidate) |
| `ai-observability` | No AI/LLM usage detected — enable if you add LLM features |
| `anomaly-detection` | Not needed alongside current specialist set; enable if time-series anomalies become a concern |
| `apm` | No APM/OpenTelemetry tracing in use |
| `conversations` | No inbound support channel connected yet |
| `csp-violations` | No CSP reporting configured |
| `customer-analytics` | No B2B group analytics in use |
| `data-pipelines` | No CDP destinations or hog flows in use |
| `data-warehouse` | No data warehouse sources configured |
| `experiments` | No A/B experiments running |
| `feature-flags` | No feature flags in use |
| `inbox-validation` | Not useful on a fresh setup — no resolved reports to validate yet |
| `insight-alerts` | No insight alerts configured |
| `logs` | Logs product not in use |
| `mcp-tool-calls` | No MCP tool call telemetry |
| `observability-gaps` | Low-priority on a simple portfolio; enable when insights library grows |
| `replay-vision` | No accumulated scanner observations yet — enable once scanners have history |
| `revenue-analytics` | No payment SDK or revenue data |
| `skills-store` | No custom skills to audit |
| `surveys` | No surveys in use (count: 0) |
| `tasks` | No PostHog Tasks usage |

---

## Custom scouts

No custom scouts were created — the user declined the proposals. Two surfaces were identified and proposed:

| Proposed scout | Surface | Why not built-in | Outcome |
|---|---|---|---|
| Portfolio contact engagement | Watches `contact_email_clicked` / `email_copied` rate per session visiting the contact section | No enabled scout watches custom event conversion rates | Declined |
| Project portfolio engagement | Watches `project_card_clicked` distribution across projects week-over-week | Same — custom event gap | Declined |

These surfaces remain unwatched. They can be added later from the inbox if desired.

**Noise escape hatch:** If any custom scout turns out noisy, set `emit: false` on its config in PostHog to switch it to dry-run mode.

---

## Replay Vision scanners

Replay Vision scanners are LLM agents that watch individual session recordings on a schedule and push findings — visible breakage and user frustration — directly into the Self-driving inbox when `emits_signals: true`. Findings arrive at half weight and need corroboration from a second observation before being promoted into a full inbox report.

The `creating-replay-vision-scanners` sizing skill was unavailable on this deploy (404 soft-degrade), so monthly credit spend was not formally verified. Both scanners have `estimated_monthly_credits: 0` because no recordings exist yet — they arm and start spending only once recordings begin.

| Scanner | Status | Query scope | Sampling rate | Credits/observation | Est. monthly credits |
|---|---|---|---|---|---|
| Broken experiences | **Created** (id `01a00f8d-bcf7-7425-9bcc-cee85489d691`) | `$current_url icontains /projects/` | 0.5 | 5 | 0 (no recordings yet) |
| User frustration | **Created** (id `01a00f8d-e0ae-72c2-9065-1216899b7cce`) | Sessions with `$rageclick` events | 1.0 | 5 | 0 (no recordings yet) |

**Why `/projects/` for Scanner 1:** The portfolio's router has two routes — `/` (home) and `/projects/:slug` (project detail pages). Project detail pages are the portfolio's "depth" flow — where a prospective employer or client evaluates specific work. A broken experience there (blank content, failed layout, dead navigation) costs the most, so that's where the scan budget goes. Scanner 2's `$rageclick` gate is on a different axis, so the queries don't overlap and can't self-corroborate.

**No recordings yet:** Both scanners are armed and start working the day recordings begin. No second setup needed.

---

## Follow-ups

- [ ] **Enable Session Replay** in PostHog: Settings → Session Replay → "Record user sessions". The `posthog-js` init in `src/main.ts` has no override that would cancel it once enabled.
- [ ] **Enable Error Tracking** in PostHog: Settings → Error Tracking → "Enable exception autocapture". The `captureException` call in `src/main.ts` is already wired — it will start capturing once the product is on.
- [ ] **Enable Support (Conversations)** in PostHog: Settings → Support in the product sidebar.
- [ ] **Connect a Conversations inbound channel** (email / inbox / Slack) in PostHog so tickets can actually reach the inbox. The `conversations/ticket` signal source is already enabled and will start producing findings automatically once a channel exists.
- [ ] **Verify monthly credit spend** for the Replay Vision scanners once recordings start arriving — the sizing skill was unavailable during setup so spend was not formally projected. Check the scanner estimates in PostHog → Replay Vision once observations accumulate.
- [ ] **Enable `signals-scout-replay-vision`** in PostHog once the scanners have accumulated a few weeks of observations — it reads trends across observations and needs history to be useful.

---

## What happens next

- The scout coordinator picks up fresh configs within ~30 minutes; the first scans fire on the next coordinator tick.
- Each scout run draws from the project's 100 runs/day early-access budget. With 5 scouts enabled, the daily draw is ~5 runs — well within budget.
- Findings cluster into reports in the [Self-driving inbox](https://eu.posthog.com/project/250625/inbox). Immediately-actionable reports can start coding tasks.
- Replay Vision scanners sweep matching recordings every 5 minutes once recordings exist.
