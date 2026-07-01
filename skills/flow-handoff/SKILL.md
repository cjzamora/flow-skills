---
name: flow-handoff
description: Create a concise implementation handoff for a Flow feature. Use only when the user explicitly invokes flow-handoff or explicitly asks to create a Flow handoff.
---

# Flow Handoff

Create a build-ready handoff that a developer can read in five minutes.

Default path:

```text
specs/[feature]/handoff.md
```

## Before Writing

- Read the PRD, tasks, design docs, and wireframes if they exist.
- Do not invent certainty. Preserve open questions and engineering judgment areas.
- Do not replace existing task files unless the user explicitly asks.

## Template

```md
# Implementation Handoff

Status: Ready for Build
Owner:
Engineering lead:
Design contact:
Last updated:

## Related Docs

- PRD:
- Design:
- Wireframes:
- Tasks:

## What We Are Building

## What Is Already Decided

## What Needs Engineering Judgment

## Suggested Build Order

## Risks and Unknowns

## Acceptance Notes

## External Links
```

## Task Handling

If the PRD has no task files and the user wants implementation tasks, create them under:

```text
specs/[feature]/tasks/
```

Use the same task format as `flow-spec`:

```md
# [Task Name]

Status: Ready
Assignee:
External link:
Last updated:

## What to Build

## Acceptance Criteria

## Blocked By
```

## Writing Rules

- Keep the handoff concise and practical.
- Separate decided product behavior from engineering choices.
- Include links to the source docs.
- Prefer suggested build order over detailed implementation commands.
- Surface blockers clearly.
