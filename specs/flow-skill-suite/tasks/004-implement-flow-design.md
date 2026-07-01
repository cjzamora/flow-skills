# Implement flow-design for Functional Design Docs

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-design`, the skill that produces a functional design revision connected to an existing spec revision.

The design should explain how the feature works at a product and UX behavior level, without requiring visual wireframes to exist first.

## Acceptance Criteria

- [ ] The skill creates a matching design revision for a spec revision.
- [ ] The design revision contains `README.md`, `experience.md`, `screens.md`, `rules.md`, and `open-questions.md`.
- [ ] `README.md` links back to the source spec and forward to wireframes when available.
- [ ] `experience.md` captures user journeys and screen-by-screen behavior.
- [ ] `screens.md` captures screen inventory, states, data shown, and actions.
- [ ] `rules.md` captures permissions, validation, business rules, and system behavior.
- [ ] `open-questions.md` captures unresolved design decisions.
- [ ] The design can be created without generating wireframes.

## Blocked By

- 001-create-flow-skill-suite-foundation.md
- 003-implement-flow-spec.md

## User Stories Covered

- 2. As a designer, I want functional design documents separate from wireframes, so that design decisions and visual exploration can evolve at different speeds.
- 16. As a designer, I want functional design files for experience, screens, rules, and open questions, so that I can communicate behavior before visual polish.
- 25. As a team, I want spec, design, and wireframe revisions to share the same revision slug, so that linked artifacts are easy to find.
