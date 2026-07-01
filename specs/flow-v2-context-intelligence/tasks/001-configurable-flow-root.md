# Update Scaffold to Support Configurable Flow Roots

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Update `flow-scaffold` so new projects can choose where Flow documents live. The recommended default should be `.flow/`, while existing Flow projects should be detected and preserved unless the user explicitly chooses to migrate.

This slice should leave scaffolded repos with clear agent guidance that records the chosen Flow root.

## Acceptance Criteria

- [x] `flow-scaffold` asks where Flow documents should live when no existing Flow root is detected.
- [x] `.flow/` is presented as the recommended default.
- [x] Existing `specs/` or `docs/` Flow conventions are detected before creating a new root.
- [x] The chosen root is recorded in `AGENTS.md` or the repo's existing agent guidance file.
- [x] Scaffold creates short index files under the chosen root.
- [x] Scaffold does not create `docs/flow-overview.md` unless the user chooses a `docs/` path as the Flow root.
- [x] Existing user-authored files are preserved.
- [x] The skill reports what it created, changed, skipped, or recommended.

## Blocked By

None - can start immediately.

## User Stories Covered

- 13. As a repo owner, I want Flow documents to default to `.flow/`, so that product artifacts are grouped and do not collide with existing docs.
- 14. As a repo owner, I want `flow-scaffold` to detect existing Flow roots, so that current `specs/` projects can keep working without surprise migrations.
- 15. As a Flow user, I want the chosen Flow document root recorded in agent guidance, so that future agents know where to read and write Flow artifacts.
