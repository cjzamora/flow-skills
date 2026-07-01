# Implement flow-wireframe for Static Preview Packages

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-wireframe`, the skill that generates low-to-medium fidelity but polished static HTML/CSS wireframe packages connected to a spec and design revision.

The wireframes should be easy to open locally, easy to inspect, and focused on flow clarity rather than final visual polish.

## Acceptance Criteria

- [ ] The skill creates a matching wireframe revision for a feature revision.
- [ ] The package contains `README.md`, `index.html`, `screens/`, `assets/`, and `shared/styles.css`.
- [ ] `index.html` acts as a clickable table of contents and preview hub.
- [ ] Individual screens or states live under `screens/`.
- [ ] Wireframes use static HTML/CSS by default.
- [ ] Wireframes use realistic copy, realistic states, and real layout structure.
- [ ] Empty, loading, error, and success states are included when relevant.
- [ ] The wireframes link back to the related spec and design.

## Blocked By

- 001-create-flow-skill-suite-foundation.md
- 003-implement-flow-spec.md
- 004-implement-flow-design.md

## User Stories Covered

- 17. As a stakeholder, I want static HTML/CSS wireframes, so that I can open and review them without a dev server or frontend framework.
- 18. As a designer, I want wireframes to be low-to-medium fidelity but polished, so that feedback focuses on flow and usability instead of unfinished visuals.
- 25. As a team, I want spec, design, and wireframe revisions to share the same revision slug, so that linked artifacts are easy to find.
