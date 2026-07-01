# Issue Export Validation

Status: Done
Last updated: 2026-07-02

## Fixture

Use:

```text
examples/brownfield-billing-app/.flow/specs/invoice-reconciliation/tasks/
```

Expected export output:

```text
examples/brownfield-billing-app/.flow/exports/invoice-reconciliation/
```

## Expected Behavior

`flow-export` should:

- Generate one issue Markdown file per exportable task.
- Create an export index.
- Preserve links back to source Flow task, spec, and handoff files.
- Copy behavior-focused `What to build` text.
- Copy acceptance criteria.
- Preserve blockers.
- Preserve assignee and external links when present.
- Skip tasks marked `Done` unless the user explicitly asks to include them.
- Warn when a task is blocked or missing assignee.
- Avoid publishing to external trackers by default.

## Expected Not Exported Item

`004-document-billing-concepts.md` should be listed as not exported because it is already done.

## Expected Blocked Item

`002-export-behavior.md` should be exported only as blocked draft work, not as ready-for-agent implementation work.

