---
name: flow-context
description: Build or update Flow project context for a brownfield repo. Use only when the user explicitly invokes flow-context or explicitly asks Flow to scan, ingest, verify, or maintain project context.
---

# Flow Context

Scan a brownfield project and create human-readable Flow context that future Flow skills can use.

Core rule:

```text
Inferred context is draft. Confirmed context is canonical.
```

Do not treat a scan as truth. Record evidence, confidence, and questions, then ask the user to confirm uncertain or high-impact claims.

## Flow Root

Read `AGENTS.md`, `CLAUDE.md`, and existing Flow folders to find the configured Flow root.

If no Flow root exists, recommend running `flow-scaffold` first. If the user wants to continue, use `.flow/` as the draft target.

Default context path:

```text
[flow-root]/context/
```

## Scan Sources

Inspect local project evidence before asking the user:

- README files and docs.
- Agent guidance such as `AGENTS.md`, `CLAUDE.md`, or similar files.
- Package, build, and tool configuration.
- App routes, pages, screens, components, and layouts.
- API handlers, controllers, services, jobs, and integrations.
- Database schemas, migrations, models, repositories, queries, and seed files.
- Auth, permissions, validation, and policy code.
- Tests, fixtures, mocks, factories, and test setup.
- Existing product specs, design docs, wireframes, handoffs, issues, and ADRs.

Prefer `rg` and `rg --files` for discovery.

## Draft Output

Create or update draft context under:

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

Only create files that have useful content. Keep each file short enough for humans to maintain.

Use this claim format when a section is inferred:

```md
## [Claim or Pattern]

Status: Draft
Confidence: High | Medium | Low | Unknown

Summary:
[Plain-language claim.]

Evidence:
- `[path]` shows [specific signal].
- `[path]` shows [specific signal].

Needs confirmation:
- [Question for the user, when confidence is not high or the impact is high.]
```

Confidence levels:

- `High`: multiple strong local signals support the claim.
- `Medium`: one strong signal or several weak signals support the claim.
- `Low`: the claim is inferred from names, partial structure, or indirect evidence.
- `Unknown`: there is not enough evidence.

## Context Areas

Cover only areas supported by evidence or needed by the user's request.

### Product

Capture:

- What the product appears to do.
- Who uses it.
- Core product objects and concepts.
- Primary workflows.
- Business rules visible in docs or code.
- Open product questions.

### Architecture

Capture:

- Frameworks, runtimes, and major dependencies.
- App boundaries and major modules.
- Frontend, backend, worker, integration, and data layers.
- Where configuration lives.
- Known deployment or environment assumptions.
- Architectural questions and risks.

### Codebase Patterns

Capture where work belongs:

- App routes, pages, screens, and layouts.
- Shared UI components.
- Feature-specific components.
- Shared utilities.
- Server-only logic.
- Domain or business logic.
- Data access.
- Validation.
- Permissions and auth.
- Tests and fixtures.
- Generated code.

Mark patterns with:

```text
Canonical
Allowed
Legacy
Avoid
Unknown
```

Use `Canonical` only when evidence or user confirmation supports it.

Example:

```md
## Shared UI Components

Status: Draft
Pattern status: Canonical
Confidence: Medium

Summary:
Reusable UI appears to live in `components/ui/`.

Evidence:
- `components/ui/button.tsx` defines a base button.
- `components/ui/dialog.tsx` defines a base dialog.

Needs confirmation:
- Should all new shared UI go in `components/ui/`, or are some components expected to stay feature-local?
```

### Data Model and Database

Capture:

- Database technology if visible.
- Schema and migration locations.
- Model naming conventions.
- Query/repository/service patterns.
- Whether database access is direct or wrapped.
- Transaction, validation, and seed-data conventions when visible.

Never infer sensitive production data or credentials. Do not expose secrets.

### UI and Creative Patterns

Capture:

- Layout conventions.
- Navigation patterns.
- Component usage.
- Empty, loading, error, and success states.
- Tone, copy, and brand cues.
- Visual conventions that wireframes should respect.

### Testing Patterns

Capture:

- Test command hints.
- Unit, integration, end-to-end, and fixture patterns.
- Test file locations.
- Existing examples future agents should imitate.

## Confirmation Flow

After creating draft context, show a concise verification summary:

```md
## Context Verification

High confidence:
- ...

Needs confirmation:
- ...

Unknown:
- ...

Recommended:
- Confirm the draft context that looks correct.
- Correct any wrong assumptions.
- Leave uncertain areas as `Needs Review` until the project owner can answer.
```

When the user confirms a claim, update its status to `Confirmed`. Confirmed context is canonical for future Flow work.

When the user rejects or corrects a claim, update the context with the corrected wording and preserve the useful evidence where relevant.

Do not overwrite existing confirmed context without explicit user approval. If the scan conflicts with confirmed context, report drift instead of silently replacing it.

## Drift Handling

When rerun on a repo with confirmed context:

- Compare current evidence to confirmed context.
- Report likely drift in `open-questions.md` or a short summary.
- Recommend `flow-check` for a focused review when the drift affects a spec, design, wireframe, handoff, or implementation decision.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Ask the user to confirm draft context before treating it as canonical.
- Run `flow-check` after confirmation if there are existing specs, designs, wireframes, or handoffs that may drift from the context.

Optional:
- Run `flow-spec` after product context is confirmed and the next feature is clear.
- Run `flow-design` after codebase, workflow, and UI patterns are confirmed for a user-facing feature.

Do not do yet:
- Do not treat low- or medium-confidence claims as canonical until the user confirms or corrects them.
```

