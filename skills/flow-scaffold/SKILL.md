---
name: flow-scaffold
description: Prepare a repository for the Flow product-development workflow. Use when the user asks to set up, initialize, scaffold, repair, or add Flow conventions, docs folders, AGENTS.md guidance, or lightweight product/spec/design/wireframe structure for a repo.
---

# Flow Scaffold

Prepare the repo for Flow without introducing a heavy process.

Flow is a lightweight product-development workflow for PMs, designers, developers, clients, and agents. Write for people first.

## What To Create

Create or repair this structure:

```text
AGENTS.md
specs/
  README.md
docs/
  flow-overview.md
```

Use `specs/[feature]/prd.md` and `specs/[feature]/tasks/` for local PRDs and task breakdowns unless the repo already documents a different Flow convention.

## AGENTS.md

If `AGENTS.md` exists, preserve unrelated content and update or append one `## Flow Product Docs` section. Do not duplicate it.

If neither `AGENTS.md` nor `CLAUDE.md` exists, create `AGENTS.md`.

Recommended section:

````md
## Flow Product Docs

Use Flow for lightweight product-development work.

Local specs and task breakdowns live under:

```text
specs/[feature]/prd.md
specs/[feature]/tasks/
```

Write for PMs, designers, developers, clients, and stakeholders. Prefer plain language, short sections, human-readable decisions, and clear owner/status fields.

Do not overwrite existing specs or task files without explicit user approval.
````

## Repo Indexes

Create short index files only when missing:

- `specs/README.md`: explain that specs live under `specs/[feature]/`.
- `docs/flow-overview.md`: summarize Flow conventions or point to the suite definition if one already exists.

Keep generated guidance short. This skill sets the foundation; it should not generate full feature specs, designs, wireframes, or handoffs.

## Safety Rules

- Preserve existing docs and user-authored content.
- Ask only when a naming or overwrite decision is genuinely ambiguous.
- Prefer appending clearly marked Flow guidance over replacing files.
- Report the files created or changed at the end.
