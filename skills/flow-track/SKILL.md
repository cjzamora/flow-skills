---
name: flow-track
description: Summarize local Flow task status and delivery health. Use only when the user explicitly invokes flow-track or explicitly asks Flow to summarize tasks, blockers, owners, or delivery progress.
---

# Flow Track

Summarize local Flow task files so users can see delivery state without adopting a full project-management system.

`flow-track` is read-only by default. Do not change task statuses, assignees, external links, or dates unless the user explicitly asks.

## Flow Root

Find the configured Flow root by reading:

- `AGENTS.md`, `CLAUDE.md`, or other agent guidance.
- Existing `.flow/`, `specs/`, `docs/flow/`, or `docs/specs/` folders.

If no Flow root exists, recommend running `flow-scaffold` first.

## What To Read

Read task files under the current feature or the configured Flow root:

```text
[flow-root]/specs/[feature]/tasks/
```

Also support legacy local paths such as:

```text
specs/[feature]/tasks/
```

Use `rg --files` to find task files when the user does not name a feature.

## Task Fields

Extract these fields when present:

- `Status`
- `Assignee`
- `External link`
- `Last updated`
- `Blocked By`
- Acceptance criteria checkbox counts
- Notes that mention blockers, risks, or review needs

Recognized task statuses:

```text
Backlog
Ready
In Progress
Blocked
In Review
Done
Skipped
```

If a status is missing or not recognized, report it as `Unknown`.

## Report Format

Use this structure:

```md
# Flow Track Report

Status: Draft
Scope:
Generated:

## Summary

- Total tasks:
- Done:
- In progress:
- Blocked:
- Ready:
- Unknown:

## Blockers

- [Task] - [blocked by]

## Ownership

- Assigned:
- Missing assignee:

## External Links

- [Task] - [external link]

## Stale or Missing Dates

- [Task] - [reason]

## Readiness Notes

- ...

## Recommended Next Steps

Recommended:
- ...

Optional:
- ...

Do not do yet:
- ...
```

Keep the report concise. Prefer useful grouping over copying every task file.

## Delivery Guidance

Recommend next steps based on task state:

- If tasks are blocked, recommend resolving blockers before implementation continues.
- If tasks have no assignee, recommend assigning owners before handoff or active build.
- If tasks are stale, recommend refreshing `Last updated` or confirming whether the task is still accurate.
- If most tasks are done, recommend running `flow-check` before final handoff or release.
- If no task files exist, recommend creating tasks with `flow-spec` or `flow-handoff`.

## Safety Rules

- Do not mutate files by default.
- Do not infer completion from prose if the status says otherwise.
- Do not treat external links as source of truth unless the user asks you to inspect them.
- Do not publish to external trackers.
- Do not hide unknown or missing metadata; report it clearly.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Run `flow-check` if blocked tasks, unresolved questions, or stale dates affect implementation readiness.
- Resolve blockers before handoff or active implementation.

Optional:
- Ask owners to update missing assignees or stale task dates.
- Generate issue-ready Markdown manually if the team uses an external tracker.

Do not do yet:
- Do not treat the feature as ready for build while critical tasks are blocked or ownership is missing.
```

