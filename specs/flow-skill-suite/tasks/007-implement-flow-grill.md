# Implement flow-grill for Structured Product Discovery

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-grill`, the skill that helps users clarify a product idea before generating a spec.

The skill should challenge assumptions, but it should be collaborative and structured by default. It should ask one question at a time, recommend an answer, explain why the decision matters, and stop when the feature is clear enough for `flow-spec`.

## Acceptance Criteria

- [ ] The skill asks one question at a time.
- [ ] Each question includes a recommended answer.
- [ ] Each recommendation explains why it matters.
- [ ] The skill explores local repo context instead of asking when the answer is discoverable.
- [ ] The skill tracks resolved decisions as the conversation progresses.
- [ ] The skill covers problem, users, goals, non-goals, workflow, scope, risks, dependencies, success criteria, and rollout.
- [ ] The default tone is collaborative and structured.
- [ ] Hard mode is used only when requested or when risk is high.

## Blocked By

- 001-create-flow-skill-suite-foundation.md

## User Stories Covered

- 9. As a PM, I want a structured grilling skill, so that weak assumptions are clarified before specs are created.
- 10. As a non-technical stakeholder, I want the grilling process to be collaborative instead of confrontational, so that product discovery feels accessible.
- 11. As a user of the workflow, I want each grilling question to include a recommended answer, so that I can make decisions faster.
- 12. As an agent using Flow, I want to inspect the codebase before asking questions, so that I do not ask the user for information already available in the repo.
