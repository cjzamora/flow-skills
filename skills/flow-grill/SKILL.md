---
name: flow-grill
description: Clarify a product idea before writing a Flow spec. Use only when the user explicitly invokes flow-grill or explicitly asks to grill/refine an idea with Flow.
---

# Flow Grill

Clarify the idea until it is ready for `flow-spec`.

Be collaborative and structured by default. Use hard mode only when the user asks or risk is high.

## Rules

- Ask one question at a time.
- Include your recommended answer with every question.
- Explain why the decision matters.
- Prefer structured decision prompts with 2-3 answer options.
- Always allow a custom answer.
- Search/read the repo instead of asking when the answer can be found locally.
- Track resolved decisions as the conversation progresses.
- Stop when the feature is clear enough to create a spec.
- Use plain language, not interrogation language.

## Prompting Style

Make questions easy to answer. When the current Codex surface supports `request_user_input`, use it for product decisions with 2-3 short choices:

- Put the recommended option first and label it `(Recommended)`.
- Keep each option concrete and mutually exclusive.
- Trust the free-form `Other` answer for custom responses.
- Use auto-resolution only for low-risk preferences where continuing with the recommendation is acceptable.

When `request_user_input` is not available, use this Markdown fallback:

```md
Decision: [short name]

Question:
[one concise question]

Recommended answer:
[default recommendation]

Options:
1. [Recommended option] - [impact]
2. [Alternative option] - [impact]
3. [Defer or narrower option] - [impact]

Why this matters:
[one sentence]

You can also answer in your own words if none of these fit.
```

For open-ended discovery questions, keep the same shape but omit forced options if they would be artificial. Still provide a recommended direction or example answer.

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
