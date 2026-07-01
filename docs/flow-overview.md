# Flow Skill Suite

Flow is a lightweight product-development workflow for turning ideas into clear specs, functional designs, wireframes, and implementation handoffs.

It is designed for PMs, designers, developers, founders, clients, and agents working together in the same repository. It should stay simple, readable, and practical. Flow documents are written for people first, not machines.

## Goals

- Help teams clarify what they are building before implementation starts.
- Keep product decisions, functional design, wireframes, and handoff notes connected.
- Support multiple people working on the same feature without requiring a heavy process.
- Create predictable folders and files that are easy to browse in GitHub, an editor, or a local filesystem.
- Keep every generated document client-friendly, plain-language, and human-readable.

## Non-Goals

- Flow is not a replacement for Jira, Linear, GitHub Issues, or other delivery trackers.
- Flow is not a machine-readable spec language.
- Flow is not a full design system.
- Flow is not meant to become as complex as spec-kit or enterprise product-management frameworks.

## Skill Suite

Flow v1 contains six core workflow skills:

```text
flow-scaffold
flow-grill
flow-spec
flow-design
flow-wireframe
flow-handoff
```

Flow v2 adds context intelligence skills:

```text
flow-context
flow-check
```

Flow v3 is drafted as tracking, readiness, and ask:

```text
flow-track
flow-ask
flow-check readiness upgrades
```

The roadmap lives at:

```text
docs/roadmap.md
```

`flow-track` was intentionally left out of v1, then added in v3 after task metadata, context, and readiness checks were in place.

## Core Workflow

```text
Idea
  -> flow-grill
  -> flow-spec
  -> flow-design
  -> flow-wireframe
  -> flow-handoff
  -> implementation
```

The workflow is flexible. A team may start with `flow-scaffold`, skip wireframes for backend-only work, or create a handoff directly from an already-approved spec.

## Folder Structure

New scaffolded projects default to a single Flow root:

```text
.flow/
  context/
  specs/
  design/
  wireframes/
```

Existing Flow projects may keep their documented root, including `specs/` or `docs/flow/`.

The older suite definition used three primary documentation areas:

```text
docs/
  specs/
  design/
  wireframes/
```

Feature revisions use the same feature slug and revision slug across all areas:

```text
docs/specs/[feature]/[revision]/
docs/design/[feature]/[revision]/
docs/wireframes/[feature]/[revision]/
```

Example:

```text
docs/specs/billing/001-card-payments/
docs/design/billing/001-card-payments/
docs/wireframes/billing/001-card-payments/
```

## Source of Truth

The canonical source of truth for a feature revision is:

```text
docs/specs/[feature]/[revision]/README.md
```

Design and wireframe revisions must link back to the spec revision. The spec revision should link forward to the matching design, wireframes, and handoff when they exist.

## Revision Rules

Flow uses simple numbered immutable revisions:

```text
001-initial-checkout
002-after-client-review
003-simplified-admin-flow
```

Rules:

- A revision is a snapshot of intent at a point in time.
- Do not overwrite an existing revision unless the user explicitly asks.
- If a revision already exists, create or suggest the next revision number.
- Do not rewrite old approved revisions except for typos, broken links, or small readability fixes.
- A meaningful change in direction should become a new revision.
- Matching spec, design, and wireframe revisions should use the same revision slug.

## Statuses

Feature revisions use human-readable statuses:

```text
Draft
In Review
Approved
In Build
Shipped
Superseded
```

Task files use lightweight delivery statuses:

```text
Backlog
Ready
In Progress
Blocked
In Review
Done
Skipped
```

Statuses are written in Markdown files. Flow does not enforce state transitions with tooling.

## Writing Style

Flow documents should be readable by clients, stakeholders, PMs, designers, and developers.

Use:

- Plain language.
- Short sections.
- Concrete examples.
- User-facing wording where possible.
- Clear statements of decisions, tradeoffs, and open questions.

Avoid:

- Implementation jargon unless the section is specifically for engineers.
- Overly abstract product language.
- Machine-readable schemas as the main artifact.
- Long AI-oriented prompts inside generated documents.

## flow-scaffold

`flow-scaffold` prepares a repository for Flow.

It creates or updates:

```text
AGENTS.md
.flow/
  README.md
  specs/
    README.md
  context/
    README.md
  design/
    README.md
  wireframes/
    README.md
```

`flow-scaffold` should ask where Flow documents should live when no Flow root exists. It should recommend `.flow/`, preserve existing Flow roots such as `specs/`, and avoid creating `docs/flow-overview.md` unless the user chooses a docs-based Flow root.

`AGENTS.md` should stay short. If it already exists, `flow-scaffold` should append or update a clearly marked Flow section instead of replacing unrelated instructions.

Recommended `AGENTS.md` Flow section:

```md
## Flow Product Docs

Use the lightweight Flow structure under the configured Flow root.

Flow documents live under:
`.flow/`

Product specs live under:
`.flow/specs/[feature]/prd.md`

Write specs, designs, wireframes, and handoffs in plain language for PMs, designers, developers, clients, and stakeholders.
```

## flow-grill

`flow-grill` clarifies a product idea before writing a spec.

It is collaborative and structured by default. It should only become more intense when the user asks for hard mode or when the risk is high.

Behavior:

- Ask one question at a time.
- Provide a recommended answer for every question.
- Explain why the recommendation matters.
- Explore the codebase instead of asking when the answer can be found locally.
- Track resolved decisions as the conversation progresses.
- Stop when the feature is clear enough to create a spec.
- Use plain language, not interrogation language.

Decision areas:

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

## flow-spec

`flow-spec` creates a new immutable spec revision.

Default structure:

```text
docs/specs/[feature]/[revision]/
  README.md
  overview.md
  scope.md
  requirements.md
  decisions.md
  risks.md
  tasks/
    README.md
```

`README.md` is the entry point only. It should contain the feature title, status, owner, reviewers, links, and table of contents.

The supporting files keep the spec simple and scoped:

- `overview.md` explains the problem, audience, goals, and plain-language solution.
- `scope.md` defines what is in scope and out of scope.
- `requirements.md` lists user needs, functional requirements, acceptance criteria, and important constraints.
- `decisions.md` records important decisions and tradeoffs.
- `risks.md` lists open questions, dependencies, assumptions, and risks.
- `tasks/README.md` introduces the implementation task list.

Optional task files live inside the spec revision:

```text
docs/specs/[feature]/[revision]/tasks/
  001-task-name.md
  002-task-name.md
```

Task files may include:

```md
# Task Name

Status:
Assignee:
External link:
Last updated:

## Goal

## Acceptance Criteria

## Notes
```

External tracker links may point to GitHub Issues, Jira, Linear, or any team system.

## flow-design

`flow-design` creates a functional design revision connected to a spec revision.

Default structure:

```text
docs/design/[feature]/[revision]/
  README.md
  experience.md
  screens.md
  rules.md
  open-questions.md
```

Purpose:

- Explain how the feature works from the user's point of view.
- Define the screen inventory.
- Describe data, actions, states, permissions, validation, and business rules.
- Capture design gaps before wireframing or implementation.

File roles:

- `README.md` is the entry point and links to the spec and wireframes.
- `experience.md` covers user journeys and screen-by-screen behavior.
- `screens.md` lists screens, states, data shown, and actions available.
- `rules.md` captures permissions, validation, business rules, and system behavior.
- `open-questions.md` captures unresolved design decisions.

## flow-wireframe

`flow-wireframe` creates a static HTML/CSS preview package.

Default structure:

```text
docs/wireframes/[feature]/[revision]/
  README.md
  index.html
  screens/
    screen-name.html
  assets/
  shared/
    styles.css
```

Defaults:

- Static HTML/CSS by default.
- Low-to-medium fidelity, but polished.
- Real layout structure, realistic copy, and realistic states.
- Match the existing product style when the repo has one.
- Avoid decorative landing-page design unless the feature is actually a landing page.
- Prioritize flow clarity over visual flourish.
- Include empty, loading, error, and success states when relevant.

`index.html` should be a clickable table of contents and preview hub. Individual screens or states live under `screens/`.

## flow-handoff

`flow-handoff` turns an approved spec and design into implementation-ready work.

It creates:

```text
docs/specs/[feature]/[revision]/handoff.md
```

Recommended structure:

```md
# Implementation Handoff

Status: Ready for Build
Owner:
Engineering lead:
Design contact:
Related spec:
Related design:
Related wireframes:

## What We Are Building

## What Is Already Decided

## What Needs Engineering Judgment

## Suggested Build Order

## Risks and Unknowns

## External Links
```

`flow-handoff` may also create or update task files in `tasks/`, but the main output should be readable by a developer in five minutes.

## flow-context

`flow-context` scans a brownfield project and creates draft project context with evidence, confidence, and verification questions.

Default structure:

```text
[flow-root]/context/
  README.md
  product.md
  users.md
  workflows.md
  architecture.md
  codebase-patterns.md
  data-model.md
  ui-patterns.md
  testing-patterns.md
  agent-standards.md
  open-questions.md
```

Core rule:

```text
Inferred context is draft. Confirmed context is canonical.
```

`flow-context` should capture product context and practical codebase operating patterns, including where shared code lives, how database access is organized, which UI patterns are canonical, and which patterns are legacy or should be avoided.

## flow-check

`flow-check` reviews Flow artifacts or current project state against confirmed context.

It checks for:

- Product and workflow drift.
- Unsupported assumptions.
- Conflicts with confirmed architecture or codebase patterns.
- UI and creative pattern drift.
- Stale confirmed context.

It reports findings and recommendations in plain language. It does not enforce rules or change files unless the user explicitly asks.

## File Creation Rules

Flow skills create files by default when running inside a repository.

Safety rules:

- Never overwrite an existing revision unless the user explicitly asks.
- If a revision exists, suggest or create the next revision number.
- If updating `AGENTS.md`, preserve unrelated instructions.
- Prefer appending or updating a clearly marked Flow section.
- Keep generated docs concise enough that humans will actually maintain them.

## flow-track

`flow-track` summarizes local Flow task state without replacing external delivery trackers.

Responsibilities:

- Summarize task status for a feature revision.
- Find blocked tasks.
- Report assignees, missing owners, stale dates, and external links.
- Recommend next delivery actions.

It is read-only by default and should not mutate task status unless explicitly asked.

## flow-ask

`flow-ask` answers project questions using confirmed context, local search, and optional indexed retrieval.

Retrieval tiers:

- Tier 0: confirmed context docs plus local text search.
- Tier 1: local source manifest and chunk map.
- Tier 2: optional local vector index.
- Tier 3: optional external/vector provider integrations.

`flow-ask` must cite sources, state confidence, distinguish sourced facts from inference, and say when an answer is unknown. Vector search is optional support, not the source of truth.
