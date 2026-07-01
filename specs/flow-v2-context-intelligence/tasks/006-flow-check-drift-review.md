# Implement Flow Check Drift Review

Status: Ready
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create a `flow-check` skill that reviews specs, designs, wireframes, handoffs, and current project files against confirmed Flow context.

This slice should help users catch drift, unsupported assumptions, and mismatches before implementation starts.

## Acceptance Criteria

- [ ] `flow-check` exists as an installable Flow skill.
- [ ] The skill reads confirmed context from the configured Flow root.
- [ ] The skill can review a Flow spec, design, wireframe package, handoff, or current codebase state.
- [ ] Findings are grouped by severity or priority in plain language.
- [ ] Findings identify drift, missing context, unsupported assumptions, stale context, and conflicts with canonical patterns.
- [ ] The skill recommends whether to update the artifact, update context, ask the user, or proceed.
- [ ] The skill does not enforce rules through code changes unless explicitly asked.

## Blocked By

- 004-context-confirmation-canonical-docs.md
- 005-codebase-patterns.md

## User Stories Covered

- 16. As a developer, I want Flow to detect drift between confirmed context and current code, so that stale documentation can be corrected.
- 17. As a PM, I want Flow to detect drift between confirmed context and new specs, so that product docs do not invent unsupported behavior.
- 18. As a designer, I want Flow to detect drift between confirmed UI patterns and new wireframes, so that visual and interaction patterns remain coherent.

