# Validate V3 Against the Brownfield Fixture

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Validate `flow-track`, the `flow-check` readiness upgrades, and `flow-ask` against the existing brownfield billing fixture.

This slice should prove the v3 skills work together before they are considered ready for regular use.

## Acceptance Criteria

- [x] The brownfield fixture includes task files with mixed statuses, blockers, assignees, dates, and external links.
- [x] `flow-track` expected output is documented for the fixture.
- [x] `flow-check` readiness findings are documented for a fixture handoff or task set.
- [x] `flow-ask` Tier 0 expected answers are documented with citations.
- [x] `flow-ask` Tier 1 expected source manifest and chunk-map behavior is documented.
- [x] Validation confirms unsupported answers are marked unknown instead of invented.
- [x] Validation confirms vector behavior remains optional.
- [x] CLI validation sees the new skill folders once implemented.

## Blocked By

- 001-implement-flow-track.md
- 002-upgrade-flow-check-readiness.md
- 003-flow-ask-tier-0.md
- 004-flow-ask-tier-1-index.md
- 005-flow-ask-vector-tiers.md

## User Stories Covered

- 17. As a Flow maintainer, I want validation artifacts for tracking and ask behavior, so that future changes can be dogfooded against a known fixture.
- 20. As a Flow user, I want all v3 skills to keep the manual-only invocation behavior, so that they do not activate unexpectedly in unrelated projects.
