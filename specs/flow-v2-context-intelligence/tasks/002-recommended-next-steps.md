# Add Recommended Next Steps to Every Flow Skill

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Add a shared recommendation pattern to every existing Flow skill so users know what to do after each skill finishes.

The recommendations should cover next Flow skills, useful outside-suite actions, and actions that should wait because required decisions are still unresolved.

## Acceptance Criteria

- [x] Each existing Flow skill includes a `Recommended Next Steps` output pattern.
- [x] Recommendations can include `Recommended`, `Optional`, and `Do not do yet` sections.
- [x] Recommendations mention Flow skills only when they are useful for the current artifact state.
- [x] Recommendations can include outside-suite actions such as stakeholder review, engineering review, design review, implementation, or external tracker updates.
- [x] Skills warn users when handoff or implementation should wait because open questions remain.
- [x] The pattern stays concise and plain-language.

## Blocked By

None - can start immediately.

## User Stories Covered

- 1. As a Flow user, I want every skill to recommend useful next steps, so that I am not left guessing what to do after an artifact is created.
- 2. As a Flow user, I want recommendations to include Flow skills and outside-suite actions, so that product work can move through review, design, implementation, and stakeholder approval.
- 3. As a Flow user, I want recommendations to warn me when not to proceed, so that I do not create handoffs or implementation tasks before important questions are resolved.
