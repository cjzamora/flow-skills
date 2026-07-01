---
name: flow-export
description: Generate issue-ready Markdown from Flow tasks or handoffs. Use only when the user explicitly invokes flow-export or explicitly asks Flow to export tasks as issue Markdown.
---

# Flow Export

Generate copy-ready issue Markdown from Flow task files, handoffs, or specs.

`flow-export` does not publish to GitHub, Jira, Linear, or any external tracker by default. It writes local export files or returns copy-ready Markdown for the user to review.

## Flow Root

Find the configured Flow root by reading:

- `AGENTS.md`, `CLAUDE.md`, or other agent guidance.
- Existing `.flow/`, `specs/`, `docs/flow/`, or `docs/specs/` folders.

If no Flow root exists, recommend running `flow-scaffold` first.

## What To Export

Export one of these scopes:

- A single task file.
- All task files for a feature.
- A handoff's suggested build order.
- A spec's task breakdown.
- A `flow-track` report's actionable task list.

Prefer task files as the source when they exist. They contain the clearest status, assignee, blocker, and acceptance criteria metadata.

## Output Location

When creating files, write under:

```text
[flow-root]/exports/[feature]/
  README.md
  001-task-name.md
  002-task-name.md
```

For legacy projects, respect the existing Flow root. If the user asks for chat-only output, do not create files.

## Issue Markdown Template

Use this template for each exported issue:

```md
# [Issue Title]

## Source

- Flow task:
- Flow spec:
- Flow handoff:

## What to build

[Concise behavior-focused description.]

## Acceptance criteria

- [ ] ...

## Blocked by

None - can start immediately.

## Suggested labels

- ready-for-agent

## Assignee

[Assignee or blank]

## External links

- [Existing external link, if present]
```

Keep exported issues behavior-focused. Avoid brittle implementation file paths unless the source task already depends on a concrete path.

## Tracker-Specific Notes

When the user names a target tracker, adjust formatting lightly:

- GitHub: use Markdown headings and checkbox acceptance criteria.
- Jira: keep headings simple and avoid GitHub-only references.
- Linear: keep title short and body concise.

Do not call external APIs, create issues, or sync statuses unless the user explicitly asks and the required tool is available.

## Export Index

When exporting multiple tasks, create or return an index:

```md
# Issue Export

Status: Draft
Source:
Generated:

## Issues

1. [Issue title](001-task-name.md)
2. [Issue title](002-task-name.md)

## Not Exported

- [Task] - [reason]

## Notes

- Review before publishing to an external tracker.
```

## Safety Rules

- Preserve the source task files.
- Do not change task statuses.
- Do not publish externally by default.
- Do not include secrets.
- Do not export tasks marked `Skipped` unless the user explicitly asks.
- Warn when a task is blocked, missing acceptance criteria, or missing ownership.
- Keep links back to the source Flow artifact.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Review exported issue Markdown before publishing to any external tracker.
- Run `flow-check` if blocked tasks or open questions affect implementation readiness.

Optional:
- Run `flow-track` before export if the user needs a delivery-health summary.
- Add external tracker links back into task files after publishing manually.

Do not do yet:
- Do not publish blocked or incomplete tasks until blockers and acceptance criteria are clear.
```

