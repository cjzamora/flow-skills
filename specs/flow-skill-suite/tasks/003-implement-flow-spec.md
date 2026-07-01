# Implement flow-spec for Readable Feature Specs

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-spec`, the skill that turns a clarified product idea into a new immutable feature spec revision with a standard multi-file structure.

The generated spec should be readable by non-technical stakeholders while still giving developers enough clarity to move toward design and implementation.

## Acceptance Criteria

- [ ] The skill creates a new numbered revision under the Flow spec structure.
- [ ] The revision contains `README.md`, `overview.md`, `scope.md`, `requirements.md`, `decisions.md`, `risks.md`, and `tasks/README.md`.
- [ ] `README.md` acts as the entry point with status, owner, reviewers, links, and table of contents.
- [ ] Supporting files are scoped and plain-language.
- [ ] Tasks live inside the spec revision and support status, assignee, external link, and notes.
- [ ] Existing revisions are not overwritten unless the user explicitly asks.
- [ ] The skill suggests or creates the next revision number when a revision already exists.

## Blocked By

- 001-create-flow-skill-suite-foundation.md

## User Stories Covered

- 7. As a team member, I want each feature revision to have a canonical source of truth, so that people know where to start reading.
- 8. As a reviewer, I want immutable numbered revisions, so that approved decisions are not accidentally rewritten.
- 13. As a product team, I want specs to use multiple focused files, so that each concern stays simple and scoped.
- 14. As a reader, I want the spec `README.md` to be an entry point, so that I can quickly find status, ownership, links, and the table of contents.
- 15. As a PM, I want standard spec files for overview, scope, requirements, decisions, risks, and tasks, so that every feature revision is easy to navigate.
- 19. As a developer, I want task files inside the spec revision, so that implementation work stays tied to the product decision it came from.
