---
name: flow-spec
description: Create or update a human-readable Flow product spec or PRD. Use only when the user explicitly invokes flow-spec or explicitly asks to create a Flow spec.
---

# Flow Spec

Create a readable product spec for people first: PMs, designers, developers, clients, and stakeholders.

Default local path:

```text
specs/[feature]/prd.md
specs/[feature]/tasks/
```

Use a lowercase hyphenated feature slug.

## Before Writing

- Read existing `AGENTS.md`, `docs/flow-overview.md`, and any existing `specs/[feature]/` files.
- If the target spec already exists, do not overwrite it without explicit user approval.
- If the idea is unclear, ask only the minimum necessary questions. Prefer using `flow-grill` for deeper discovery.

## PRD Template

Create `specs/[feature]/prd.md`:

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
specs/[feature]/tasks/001-task-name.md
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
