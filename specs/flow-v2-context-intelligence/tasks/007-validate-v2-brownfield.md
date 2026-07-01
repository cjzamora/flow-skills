# Validate V2 on a Sample Brownfield Project

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Validate the v2 context intelligence flow against a small sample brownfield project and tighten any instructions that produce vague, heavy, or unsupported output.

This slice should prove that scaffold, recommendations, context scanning, confirmation, codebase patterns, and drift review work together.

## Acceptance Criteria

- [x] A sample brownfield project fixture or validation artifact exists.
- [x] `flow-scaffold` chooses or records a Flow root correctly.
- [x] Existing Flow skills produce useful recommended next steps.
- [x] `flow-context` generates draft context with evidence, confidence, and verification questions.
- [x] Confirmed context is promoted to canonical docs.
- [x] Codebase patterns capture structure, shared code, database patterns, UI patterns, and testing conventions where evidence exists.
- [x] `flow-check` detects at least one intentional mismatch or drift case.
- [x] Generated docs remain readable for PMs, designers, developers, clients, and stakeholders.
- [x] Validation notes identify any skill instructions that need tightening.

## Blocked By

- 001-configurable-flow-root.md
- 002-recommended-next-steps.md
- 003-flow-context-draft-scan.md
- 004-context-confirmation-canonical-docs.md
- 005-codebase-patterns.md
- 006-flow-check-drift-review.md

## User Stories Covered

- 20. As a future contributor, I want v2 skills to stay compatible with Codex, Claude, and OpenCode installation, so that the suite remains portable.
- 1. As a Flow user, I want every skill to recommend useful next steps, so that I am not left guessing what to do after an artifact is created.
- 11. As an agent, I want confirmed context documents, so that future Flow skills can reuse the same product and codebase understanding.
