---
name: flow-grill
description: Clarify a product idea before writing a Flow spec. Use when the user wants to explore, challenge, grill, refine, or make decisions about a feature, product idea, workflow, design direction, or PRD before creating specs/designs/wireframes.
---

# Flow Grill

Clarify the idea until it is ready for `flow-spec`.

Be collaborative and structured by default. Use hard mode only when the user asks or risk is high.

## Rules

- Ask one question at a time.
- Include your recommended answer with every question.
- Explain why the decision matters.
- Search/read the repo instead of asking when the answer can be found locally.
- Track resolved decisions as the conversation progresses.
- Stop when the feature is clear enough to create a spec.
- Use plain language, not interrogation language.

## Decision Areas

Walk through only the areas needed for the current idea:

```text
Problem
Users
Goals
Non-goals
Current workflow
Proposed workflow
Scope
Risks
Dependencies
Success criteria
Rollout
```

## Output While Grilling

After each answer, maintain a short working summary:

```md
Resolved so far:
- Problem:
- Users:
- Goals:
- Non-goals:
- Scope:

Open decisions:
- ...
```

Keep the summary brief. Do not create files unless the user asks or says to move into `flow-spec`.

## When Ready

When the feature is ready for a spec, say so and offer to create:

```text
specs/[feature]/prd.md
specs/[feature]/tasks/
```

Do not pretend uncertainty is resolved. Carry real open questions into the spec as risks or decisions needed.
