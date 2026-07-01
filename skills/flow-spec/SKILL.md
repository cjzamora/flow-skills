---
name: flow-spec
description: Create or update a human-readable Flow product spec or PRD. Use only when the user explicitly invokes flow-spec or explicitly asks to create a Flow spec.
---

# Flow Spec

Create a readable product spec for people first: PMs, designers, developers, clients, and stakeholders.

Default local path:

```text
[flow-root]/specs/[feature]/prd.md
[flow-root]/specs/[feature]/tasks/
```

Use a lowercase hyphenated feature slug.

## Before Writing

- Read existing `AGENTS.md`, the configured Flow root, confirmed context docs if present, and any existing spec files for the feature.
- If the target spec already exists, do not overwrite it without explicit user approval.
- If the idea is unclear, ask only the minimum necessary questions. Prefer using `flow-grill` for deeper discovery.

## PRD Template

Create `[flow-root]/specs/[feature]/prd.md`:

```md
# [Feature Name] PRD

Status: Draft
Owner:
Reviewers:
Last updated:

## Problem Statement

## Solution

## Users

## Goals

## Non-Goals

## Scope

### In Scope

### Out of Scope

## Requirements

## User Stories

1. As a [actor], I want [feature], so that [benefit].

## Decisions

## Risks and Open Questions

## Success Criteria

## Links

- Tasks: tasks/README.md
```

## Tasks

Create `specs/[feature]/tasks/README.md` with a task index.

When asked to create implementation tasks, create one file per task:

```text
[flow-root]/specs/[feature]/tasks/001-task-name.md
```

Task template:

```md
# [Task Name]

Status: Ready
Assignee:
External link:
Last updated:

## What to Build

## Acceptance Criteria

- [ ] ...

## Blocked By

None - can start immediately.
```

## Writing Rules

- Use plain language and short sections.
- Be concrete about decisions and tradeoffs.
- Keep technical detail only where it helps implementation.
- Do not include machine-readable schemas as the primary artifact.
- Link to design, wireframes, and handoff files when they exist.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Run `flow-design` next if the PRD defines user-facing behavior, workflows, screens, rules, or permissions.
- Run `flow-check` if confirmed project context exists and the PRD should be checked for drift.

Optional:
- Run `flow-wireframe` after design if stakeholders need screen previews.
- Share the PRD with stakeholders for review before implementation handoff.

Do not do yet:
- Do not run `flow-handoff` while major risks or open questions remain unresolved.
```
