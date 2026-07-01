---
name: flow-scaffold
description: Prepare a repository for the Flow product-development workflow. Use only when the user explicitly invokes flow-scaffold or explicitly asks to set up Flow in a repository.
---

# Flow Scaffold

Prepare the repo for Flow without introducing a heavy process.

Flow is a lightweight product-development workflow for PMs, designers, developers, clients, and agents. Write for people first.

## What To Create

Create or repair this structure by default:

```text
AGENTS.md
.flow/
  README.md
  specs/
    README.md
  context/
    README.md
  design/
    README.md
  wireframes/
    README.md
```

Ask the user where Flow documents should live when the repo does not already document a Flow root. Recommend `.flow/`.

If an existing Flow root is detected, such as `specs/` or `docs/flow/`, preserve that convention unless the user explicitly asks to migrate.

Use `[flow-root]/specs/[feature]/prd.md` and `[flow-root]/specs/[feature]/tasks/` for local PRDs and task breakdowns.

## Flow Root Selection

Before creating folders, inspect the repo for an existing Flow convention:

- `AGENTS.md`, `CLAUDE.md`, or other agent guidance that names a Flow root.
- Existing `.flow/`, `specs/`, `docs/flow/`, or `docs/specs/` folders.
- Existing Flow-style files such as `prd.md`, `tasks/README.md`, `design/`, `wireframes/`, or `context/`.

If no convention exists, ask the user where Flow documents should live. Recommend:

```text
.flow/
```

Use these options when helpful:

1. `.flow/` - recommended for new projects because Flow artifacts stay grouped.
2. `docs/flow/` - useful when the repo already treats `docs/` as the documentation hub.
3. `specs/` - useful for existing Flow v1 projects or simple repos.

If a legacy convention already exists, prefer continuing with it. Do not migrate existing Flow files unless the user explicitly asks.

## AGENTS.md

If `AGENTS.md` exists, preserve unrelated content and update or append one `## Flow Product Docs` section. Do not duplicate it.

If neither `AGENTS.md` nor `CLAUDE.md` exists, create `AGENTS.md`.

Recommended section:

````md
## Flow Product Docs

Use Flow for lightweight product-development work.

Local specs and task breakdowns live under:

```text
.flow/specs/[feature]/prd.md
.flow/specs/[feature]/tasks/
```

Write for PMs, designers, developers, clients, and stakeholders. Prefer plain language, short sections, human-readable decisions, and clear owner/status fields.

Do not overwrite existing specs or task files without explicit user approval.
````

## Repo Indexes

Create short index files only when missing:

- `[flow-root]/README.md`: explain the local Flow root and document types.
- `[flow-root]/specs/README.md`: explain that specs live under `[flow-root]/specs/[feature]/`.
- `[flow-root]/context/README.md`: explain where project context will live when `flow-context` is used.
- `[flow-root]/design/README.md`: explain where functional design docs live.
- `[flow-root]/wireframes/README.md`: explain where wireframe previews live.

Do not create `docs/flow-overview.md` unless the user chooses `docs/flow/` or another `docs/` path as the Flow root.

Keep generated guidance short. This skill sets the foundation; it should not generate full feature specs, designs, wireframes, or handoffs.

## Safety Rules

- Preserve existing docs and user-authored content.
- Ask only when a naming or overwrite decision is genuinely ambiguous.
- Prefer appending clearly marked Flow guidance over replacing files.
- Report the files created or changed at the end.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Run `flow-context` if this is a brownfield project and Flow needs to understand the existing product and codebase.
- Run `flow-grill` if the next feature idea still needs clarification.
- Run `flow-spec` if the feature is already clear enough for a PRD.

Optional:
- Ask stakeholders to confirm the chosen Flow root before adding many artifacts.

Do not do yet:
- Do not migrate existing Flow files to a new root unless the user explicitly approves that move.
```
