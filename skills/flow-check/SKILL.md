---
name: flow-check
description: Review Flow artifacts or current project state against confirmed Flow context. Use only when the user explicitly invokes flow-check or explicitly asks Flow to check drift, consistency, or context alignment.
---

# Flow Check

Review specs, designs, wireframes, handoffs, or current codebase state against confirmed Flow context.

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
- `Proceed with note` when the mismatch is minor or already acknowledged.

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
- Run the relevant Flow skill again after corrections if the artifact needs regeneration.

Do not do yet:
- Do not proceed to implementation while high-severity drift is unresolved.
```

