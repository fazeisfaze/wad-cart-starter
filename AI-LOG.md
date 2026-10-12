## 2026-10-06 — cartTotal implementation

Tool: opencode (fledge-alpha-free).
Asked for: Implement cartTotal(items, options) in src/cart.js per README.md, with tests first, npm test green.
Kept: the test names and the single-function cartTotal shape.
Changed: none — the implementation matched the spec on the first pass.
Rejected: nothing; did not add options validation or a separate shipping helper (spec does not ask for them).
By hand: the worked expectations in the new tests (467400, 109999, 130000) and the BRIEF.md one-liner.

## 2026-10-06 — AI-LOG.md and BRIEF.md

Tool: opencode.
Asked for: rewrite AI-LOG.md from the template's filled-example format and record the brief I was given.
Kept: the entry format exactly as the template specifies.
Changed: dropped the instructions/template sections per team decision; kept only filled entries.
Rejected: the weak-log example sections — they are guidance, not a log.
By hand: this entry's honest Kept/Changed/Rejected/By hand lines.

## 2026-10-12 — ESLint 9 flat config

Tool: opencode.
Asked for: add ESLint with flat config, npm run lint script, no lint errors on src/ and test/.
Kept: eslint.config.js with ecmaVersion 2024, module type, test globals; devDependency on eslint^9.
Changed: added lint script to package.json alongside existing test script.
Rejected: Airbnb/Standard configs (overkill), .eslintrc.json (legacy), separate lint configs for src vs test.
By hand: verified npm run lint exits clean on current code.

## 2026-10-12 — GitHub Actions CI pipeline

Tool: opencode.
Asked for: CI workflow that runs npm ci, npm run lint, npm test on push/PR to main.
Kept: .github/workflows/ci.yml with ubuntu-latest, Node 20, npm cache; three job steps (lint then test).
Changed: none — standard minimal pipeline.
Rejected: matrix testing (only one Node version required), artifact upload, deployment steps.
By hand: created .github/workflows directory; confirmed workflow syntax matches GitHub Actions spec.
