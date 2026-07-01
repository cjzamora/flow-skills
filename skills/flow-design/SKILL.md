---
name: flow-design
description: Create functional design documents for a Flow feature. Use only when the user explicitly invokes flow-design or explicitly asks to create a Flow functional design.
---

# Flow Design

Create functional design docs that explain how a feature works before or alongside visual wireframes.

Default path:

```text
[flow-root]/design/[feature]/
```

Link back to `[flow-root]/specs/[feature]/prd.md`.

## Before Writing

- Read the feature PRD, confirmed context docs if present, and any existing design or wireframe docs.
- If design docs already exist, preserve user content and ask before replacing them.
- Keep design separate from wireframes. This skill defines behavior; `flow-wireframe` creates static previews.

## Files

Create this small standard set:

```text
[flow-root]/design/[feature]/
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

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Run `flow-wireframe` next if the design includes screens or states stakeholders should review visually.
- Run `flow-check` if confirmed context exists and the design should be checked against product, architecture, or UI patterns.

Optional:
- Review the design with engineering if rules, permissions, or data behavior are complex.

Do not do yet:
- Do not run `flow-handoff` until open design questions are either resolved or explicitly accepted as engineering judgment.
```
