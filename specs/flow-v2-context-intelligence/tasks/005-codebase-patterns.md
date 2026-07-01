# Capture Codebase and Database Patterns

Status: Ready
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Teach `flow-context` to identify practical codebase operating patterns, including project structure, shared code locations, frontend and backend conventions, database access patterns, validation, permissions, and testing conventions.

This slice should help future agents know how to work inside the actual codebase, not just understand the product at a high level.

## Acceptance Criteria

- [ ] Context output identifies where app code, shared code, UI components, backend logic, data access, tests, and generated artifacts appear to live.
- [ ] Context output identifies common database and data-access patterns when evidence exists.
- [ ] Context output identifies frontend, backend, validation, permission, and testing conventions when evidence exists.
- [ ] Patterns can be marked as `Canonical`, `Allowed`, `Legacy`, or `Avoid`.
- [ ] Pattern claims include confidence and evidence.
- [ ] The skill asks for confirmation when it cannot tell whether a pattern is canonical or legacy.
- [ ] Future Flow skills are instructed to read confirmed codebase patterns before generating implementation-facing artifacts.

## Blocked By

- 003-flow-context-draft-scan.md

## User Stories Covered

- 5. As a developer, I want Flow to identify codebase structure, so that agents know where app code, shared code, server code, tests, and generated artifacts belong.
- 6. As a developer, I want Flow to identify common database patterns, so that new work follows existing data access conventions.
- 12. As an agent, I want clear canonical, allowed, legacy, and avoid pattern statuses, so that I can follow the right conventions when working in a brownfield project.

