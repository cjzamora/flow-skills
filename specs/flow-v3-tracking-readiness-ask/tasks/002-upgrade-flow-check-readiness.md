# Upgrade Flow Check Readiness Review

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Update `flow-check` so it can review implementation readiness using task state, confirmed context, open questions, and codebase patterns.

This slice should help users catch delivery and readiness issues before handoff or implementation.

## Acceptance Criteria

- [x] `flow-check` reads task files when reviewing a spec, design, wireframe, or handoff.
- [x] The skill flags blocked tasks before implementation.
- [x] The skill flags missing owners or assignees when ownership matters.
- [x] The skill flags stale or missing `Last updated` fields when they reduce confidence.
- [x] The skill flags handoffs created while context is still draft or unconfirmed.
- [x] The skill flags unresolved open questions that should block implementation.
- [x] Findings recommend whether to update artifacts, update context, ask the user, resolve blockers, or proceed.
- [x] Existing drift review behavior remains intact.

## Blocked By

- 001-implement-flow-track.md

## User Stories Covered

- 3. As a developer, I want blocked tasks and unresolved questions highlighted before handoff, so that implementation does not start from weak assumptions.
- 5. As a reviewer, I want `flow-check` to flag handoffs created before context is confirmed, so that implementation is not based on draft assumptions.
- 6. As a reviewer, I want `flow-check` to flag missing task owners, stale dates, and blocked tasks, so that readiness review includes delivery health.
- 19. As a product reviewer, I want `flow-check` to connect readiness findings to concrete next steps, so that reports are actionable.
