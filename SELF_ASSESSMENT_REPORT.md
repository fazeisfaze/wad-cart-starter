# Self-assessment — IA#1
Submitted by: 24127105 — Huynh Thanh Phuc
Total I claim: 98 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` green (7/7 pass); negative price throws `RangeError` — test/cart.test.js:40-44; qty validation throws for 0, -2, 1.5 — test/cart.test.js:46-51; implementation validates price < 0 and `!Number.isInteger(qty) \| qty <= 0` — src/cart.js:7-8 |
| Tests | 20 | 20 | 7 tests covering all spec clauses: worked example (test/cart.test.js:8-15), free-shipping threshold (17-21), shipping below threshold (23-27), empty cart (29-32), VAT rounding (34-38), negative price (40-44), qty validation (46-51); all pass |
| Harness | 20 | 20 | `npm test` runs via `node --test` — package.json:6; `npm run lint` via ESLint 9 — package.json:7, eslint.config.js; CI pipeline runs lint + test on push/PR — .github/workflows/ci.yml; AGENT.md documents spec, rules, and test command — AGENT.MD:13-40 |
| Brief | 15 | 13 | BRIEF.md lists file, contract summary, "no dependencies" — BRIEF.md:1-4; AGENT.MD reiterates "Plain JavaScript, no dependencies" — AGENT.MD:44; brief is concise but minimal |
| AI-LOG.md | 15 | 15 | Two entries following template format (date, tool, asked, kept/changed/rejected/by-hand) — AI-LOG.md:1-17; entries record implementation and log creation honestly |

## What I did not manage
All core criteria are now met: behaviour, tests, harness (CI + lint), brief, and AI-LOG. No significant gaps remain.

## What I would do differently
Expand BRIEF.md slightly to explicitly map each spec rule to the implementation file. Add more AI-LOG entries during development rather than after the fact (though the current entries are honest and complete).