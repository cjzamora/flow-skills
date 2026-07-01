---
name: flow-wireframe
description: Create low-to-medium fidelity polished static HTML/CSS wireframe previews for a Flow feature. Use only when the user explicitly invokes flow-wireframe or explicitly asks to create Flow wireframes.
---

# Flow Wireframe

Create static HTML/CSS preview packages that are easy to open and review.

Default path:

```text
[flow-root]/wireframes/[feature]/
```

Link back to `[flow-root]/specs/[feature]/prd.md` and `[flow-root]/design/[feature]/` when available.

## Output Structure

```text
[flow-root]/wireframes/[feature]/
  README.md
  index.html
  screens/
    screen-name.html
  assets/
  shared/
    styles.css
```

## Fidelity

Default to low-to-medium fidelity, but polished:

- Use realistic layout, copy, and states.
- Match the existing product style when the repo has one.
- Prioritize flow clarity over visual flourish.
- Avoid decorative landing-page design unless the feature is actually a landing page.
- Include empty, loading, error, and success states when relevant.

## HTML Rules

- `index.html` is the preview hub and table of contents.
- Screen files live under `screens/`.
- Shared CSS lives in `shared/styles.css`.
- Use relative links so the preview works from the filesystem.
- Keep dependencies local or dependency-free unless the user asks otherwise.
- Do not require a dev server for the default output.

## Process

1. Read the PRD, functional design, confirmed context docs, and UI/codebase patterns if present.
2. Identify the screens and states to represent.
3. Create the package structure.
4. Implement a readable preview hub.
5. Implement screen/state pages with realistic content.
6. Report the main `index.html` path.

## Quality Bar

- Text must fit on mobile and desktop.
- UI elements must not overlap.
- Navigation between preview pages must work.
- The artifact should be understandable to PMs, designers, developers, and clients.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Open the generated `index.html` and review the screens with stakeholders.
- Run `flow-check` if confirmed UI or product context exists and the wireframes should be checked for drift.

Optional:
- Run `flow-handoff` after the PRD, design, and wireframes are reviewed or approved.

Do not do yet:
- Do not treat wireframes as implementation-ready if they omit important empty, loading, error, success, or permission states.
```
