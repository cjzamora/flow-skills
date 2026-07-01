# Implement Flow Context Draft Scanning

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create a `flow-context` skill that scans an existing project and generates draft product and project context with evidence, confidence levels, and verification questions.

This slice should make brownfield intake useful without treating inferred information as confirmed truth.

## Acceptance Criteria

- [x] `flow-context` exists as an installable Flow skill.
- [x] The skill scans common local sources such as README files, docs, package/config files, routes, components, services, models, schemas, tests, and agent guidance.
- [x] The skill creates draft context for product purpose, users, workflows, architecture, codebase patterns, UI patterns, testing patterns, and open questions.
- [x] Important claims include evidence references.
- [x] Important claims include confidence levels: `High`, `Medium`, `Low`, or `Unknown`.
- [x] Low- and medium-confidence claims become verification questions.
- [x] The skill avoids asking the user for information that can be found locally.
- [x] The output remains human-readable Markdown.

## Blocked By

- 001-configurable-flow-root.md

## User Stories Covered

- 4. As a product manager, I want Flow to scan an existing project before writing new docs, so that generated specs reflect the real product.
- 8. As a stakeholder, I want inferred project context to include confidence levels, so that I can see what is known, guessed, or unknown.
- 9. As a maintainer, I want important claims to include evidence, so that I can audit why Flow reached a conclusion.
- 10. As a maintainer, I want uncertain context to become verification questions, so that weak assumptions are corrected early.
