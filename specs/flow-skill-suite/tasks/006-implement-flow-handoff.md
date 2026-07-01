# Implement flow-handoff for Build-Ready Handoffs

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-handoff`, the skill that turns an approved spec and design into a concise implementation handoff.

The handoff should help developers understand what is already decided, what remains open, the suggested build order, and the important risks.

## Acceptance Criteria

- [ ] The skill creates `handoff.md` inside the relevant spec revision.
- [ ] The handoff includes owner, engineering lead, design contact, related spec, related design, and related wireframes.
- [ ] The handoff explains what is being built in plain language.
- [ ] The handoff clearly separates decided items from areas needing engineering judgment.
- [ ] The handoff includes suggested build order, risks, unknowns, and external links.
- [ ] The handoff is concise enough for a developer to read in five minutes.
- [ ] The skill may create or update task files when useful, without replacing unrelated task content.

## Blocked By

- 001-create-flow-skill-suite-foundation.md
- 003-implement-flow-spec.md
- 004-implement-flow-design.md

## User Stories Covered

- 3. As a developer, I want implementation handoff documents, so that I can understand what is decided, what is flexible, and what still needs engineering judgment.
- 19. As a developer, I want task files inside the spec revision, so that implementation work stays tied to the product decision it came from.
- 26. As a developer, I want a handoff document that can be read in five minutes, so that implementation can start with minimal ambiguity.
