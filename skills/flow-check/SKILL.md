---
name: flow-check
description: Review Flow artifacts, readiness, or current project state against confirmed Flow context. Use only when the user explicitly invokes flow-check or explicitly asks Flow to check drift, readiness, consistency, or context alignment.
---

# Flow Check

Review specs, designs, wireframes, handoffs, task state, or current codebase state against confirmed Flow context.

`flow-check` is a review skill. It reports drift, gaps, and unsupported assumptions. It does not enforce rules or change files unless the user explicitly asks.

## Before Reviewing

Find the configured Flow root by reading:

- `AGENTS.md`, `CLAUDE.md`, or other agent guidance.
- Existing `.flow/`, `specs/`, `docs/flow/`, or `docs/specs/` folders.

Read confirmed context first:

```text
[flow-root]/context/
```

If there is no confirmed context, recommend running `flow-context` first. If the user still wants a check, perform a limited review and clearly state that no canonical context was available.

## Review Targets

Review any target the user names:

- Product specs and PRDs.
- Functional design docs.
- Wireframe packages.
- Implementation handoffs.
- Task files.
- Task summaries or `flow-track` reports.
- Current project structure.
- Codebase patterns after a refactor or feature implementation.

When the user does not name a target, check the current feature artifacts under the configured Flow root.

## What To Check

Compare the target against confirmed context for:

- Product purpose and user assumptions.
- Core workflows and business rules.
- Architecture and module boundaries.
- Codebase pattern placement.
- Database and data-access patterns.
- UI, interaction, and creative patterns.
- Testing expectations.
- Open questions that should block handoff or implementation.
- Task health, blockers, missing owners, stale dates, and readiness gaps.
- Claims that have no evidence in context or code.
- Confirmed context that appears stale compared with current project files.

## Findings Format

Lead with findings, ordered by severity:

```md
## Findings

### High

- [Finding title]
  - Target: [file or artifact]
  - Context: [confirmed context source]
  - Issue: [plain-language mismatch]
  - Recommendation: Update the artifact | Update context | Ask the user | Proceed with note

### Medium

- ...

### Low

- ...

## Open Questions

- ...

## Recommended Next Steps

Recommended:
- ...

Optional:
- ...

Do not do yet:
- ...
```

Severity guidance:

- `High`: likely to cause wrong product behavior, wrong implementation direction, or major stakeholder confusion.
- `Medium`: important inconsistency or missing decision that should be resolved before handoff.
- `Low`: wording, organization, or minor context quality issue.

## Recommendation Types

Use one of these actions for each finding:

- `Update the artifact` when the spec, design, wireframe, handoff, or task appears inconsistent with confirmed context.
- `Update context` when the project has changed and confirmed context is probably stale.
- `Ask the user` when both the artifact and context are plausible but conflict.
- `Resolve blockers` when tasks, open questions, or missing ownership make implementation unready.
- `Proceed with note` when the mismatch is minor or already acknowledged.

## Readiness Review

When reviewing handoff or implementation readiness, read:

```text
[flow-root]/specs/[feature]/tasks/
[flow-root]/context/
[flow-root]/specs/[feature]/handoff.md
[flow-root]/design/[feature]/
[flow-root]/wireframes/[feature]/
```

Also support legacy local paths such as:

```text
specs/[feature]/tasks/
```

Check for:

- Blocked tasks.
- Tasks with missing assignees when ownership matters.
- Missing or stale `Last updated` fields.
- Unresolved open questions in specs, design docs, context docs, or handoff docs.
- Handoffs created while context is still `Draft` or `Needs Review`.
- Tasks that conflict with confirmed codebase patterns.
- Implementation steps that depend on unconfirmed product decisions.

Readiness findings should use the same severity format as drift findings.

Example:

```md
### High

- Handoff is not ready because context is still draft.
  - Target: implementation handoff
  - Context: `[flow-root]/context/README.md`
  - Issue: The handoff treats project context as confirmed, but context files still show `Status: Draft`.
  - Recommendation: Ask the user to confirm or correct context before implementation starts.
```

Example:

```md
### Medium

- Blocked task has no owner.
  - Target: task file
  - Context: task metadata
  - Issue: The task is blocked and has no assignee, so the next action is unclear.
  - Recommendation: Resolve blockers by assigning an owner and clarifying the dependency.
```

## Codebase Drift

When checking current project state:

- Compare current files and structure to confirmed architecture and codebase patterns.
- Use evidence from file paths and nearby docs.
- Do not assume a new pattern is canonical just because it exists.
- Report newly observed patterns as drift or candidates for confirmation.

Example:

```md
### Medium

- New server logic appears outside the confirmed backend pattern.
  - Target: `app/api/...`
  - Context: `[flow-root]/context/codebase-patterns.md`
  - Issue: Confirmed context says backend business logic belongs in service modules, but the current route appears to contain business rules directly.
  - Recommendation: Ask the user whether this is intentional or whether context/code should be updated.
```

## Artifact Drift

When checking Flow artifacts:

- Verify that specs match product, users, workflows, and known constraints.
- Verify that designs match confirmed screens, rules, permissions, and UI patterns.
- Verify that wireframes include required states and do not contradict creative/UI context.
- Verify that handoffs separate decided behavior from engineering judgment.

Do not rewrite the target unless explicitly asked.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Fix high-severity findings before handoff or implementation.
- Ask the user to resolve findings where both context and the artifact could be correct.

Optional:
- Run `flow-context` if the review shows confirmed context is missing or stale.
- Run `flow-track` if delivery status, blockers, or assignees need a dedicated summary.
- Run the relevant Flow skill again after corrections if the artifact needs regeneration.

Do not do yet:
- Do not proceed to implementation while high-severity drift, blocked tasks, draft context, or blocking open questions remain unresolved.
```
