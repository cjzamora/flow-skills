# Changelog

## 0.3.0 - 2026-07-02

- Added `flow-track` for local task summaries, blockers, assignees, stale dates, and delivery recommendations.
- Added `flow-ask` for source-cited project Q&A with Tier 0/Tier 1 retrieval guidance and optional vector tiers.
- Upgraded `flow-check` with implementation readiness review for blocked tasks, draft context, missing owners, stale dates, and unresolved questions.
- Added v3 validation fixture files under `examples/brownfield-billing-app/.flow/`.
- Added the Flow v3 tracking, readiness, and ask PRD and task breakdown.
- Added a roadmap document under `docs/roadmap.md`.

## 0.2.0 - 2026-07-02

- Added `flow-context` for brownfield project context scanning.
- Added `flow-check` for drift review against confirmed context.
- Added recommended next steps to Flow skills.
- Updated `flow-scaffold` to use `.flow/` as the recommended default root.
- Added CLI `validate` and `version` commands.
- Added `install --disabled` for installing skills outside the active skills directory.
- Added a brownfield billing fixture under `examples/`.

## 0.1.0 - 2026-07-02

- Added the initial Flow skill suite.
- Added install support for Codex, Claude, and OpenCode-style skill folders.
