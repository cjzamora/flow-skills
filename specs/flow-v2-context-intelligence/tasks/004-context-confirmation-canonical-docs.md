# Add Context Confirmation and Canonical Docs

Status: Ready
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Extend `flow-context` so users can confirm or correct draft context, then promote confirmed context into canonical Flow documents under the configured Flow root.

This slice should establish the rule that inferred context is draft and confirmed context is canonical.

## Acceptance Criteria

- [ ] Draft context uses a clear status such as `Draft` or `Needs Review`.
- [ ] Confirmed context uses a clear status such as `Confirmed`.
- [ ] The skill asks the user to verify uncertain or high-impact claims before treating them as canonical.
- [ ] Confirmed context is written under the configured Flow root.
- [ ] Context docs include product, users, workflows, architecture, codebase patterns, data model, UI patterns, testing patterns, agent standards, and open questions where relevant.
- [ ] Existing user-authored context is preserved.
- [ ] The skill reports which context is confirmed, still uncertain, or needs follow-up.

## Blocked By

- 003-flow-context-draft-scan.md

## User Stories Covered

- 10. As a maintainer, I want uncertain context to become verification questions, so that weak assumptions are corrected early.
- 11. As an agent, I want confirmed context documents, so that future Flow skills can reuse the same product and codebase understanding.
- 19. As a maintainer, I want context generation to stay human-readable, so that the documents can be reviewed and maintained without special tooling.

