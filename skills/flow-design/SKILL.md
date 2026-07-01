---
name: flow-design
description: Create functional design documents for a Flow feature. Use when the user asks for product design, functional design, UX behavior, user journeys, screen inventory, states, rules, permissions, or design handoff connected to a Flow spec.
---

# Flow Design

Create functional design docs that explain how a feature works before or alongside visual wireframes.

Default path:

```text
specs/[feature]/design/
```

Link back to `specs/[feature]/prd.md`.

## Before Writing

- Read the feature PRD and any existing design or wireframe docs.
- If design docs already exist, preserve user content and ask before replacing them.
- Keep design separate from wireframes. This skill defines behavior; `flow-wireframe` creates static previews.

## Files

Create this small standard set:

```text
specs/[feature]/design/
  README.md
  experience.md
  screens.md
  rules.md
  open-questions.md
```

## File Roles

`README.md`:

- Status, owner, reviewers, and links.
- Link to the PRD and wireframes if present.
- Table of contents for the design files.

`experience.md`:

- User journeys.
- Current workflow and proposed workflow.
- Screen-by-screen behavior.

`screens.md`:

- Screen inventory.
- States for each screen.
- Data shown.
- Actions available.
- Empty, loading, error, and success states where relevant.

`rules.md`:

- Permissions.
- Validation.
- Business rules.
- System behavior.

`open-questions.md`:

- Unresolved product/design decisions.
- Dependencies and decisions needed before implementation.

## Writing Rules

- Use human-readable product language.
- Make behavior explicit enough for design review and developer handoff.
- Avoid final visual styling decisions unless the user asks.
- Carry uncertainty into `open-questions.md`; do not hide it.
