# Flow V2 Context Intelligence PRD

Status: Draft
Owner:
Reviewers:
Last updated: 2026-07-02

## Problem Statement

Flow v1 helps teams turn product ideas into specs, functional designs, wireframes, and handoffs. It does not yet give users enough guidance about what to do next, and it does not help agents understand an existing brownfield codebase before creating new product artifacts.

Users can be left guessing which Flow skill to use next. Agents can also miss important project context, such as where shared code belongs, how database access is organized, which UI patterns are canonical, or which workflows already exist. This creates avoidable drift between generated Flow documents and the real project.

## Solution

Create a Flow v2 context intelligence layer.

Flow v2 adds:

1. A recommendation system that every skill uses to suggest next Flow skills, outside-suite review steps, and actions that should not happen yet.
2. A `flow-context` skill that scans an existing project, infers product and codebase context, records evidence and confidence, asks the user to verify uncertain claims, and promotes confirmed context into canonical Flow documents.
3. A `flow-check` skill that compares new Flow artifacts against confirmed context and reports drift, gaps, and unsupported assumptions.
4. Updated `flow-scaffold` behavior that asks where Flow documents should live and defaults to `.flow/`.

The core rule is:

```text
Inferred context is draft. Confirmed context is canonical.
```

## User Stories

1. As a Flow user, I want every skill to recommend useful next steps, so that I am not left guessing what to do after an artifact is created.
2. As a Flow user, I want recommendations to include Flow skills and outside-suite actions, so that product work can move through review, design, implementation, and stakeholder approval.
3. As a Flow user, I want recommendations to warn me when not to proceed, so that I do not create handoffs or implementation tasks before important questions are resolved.
4. As a product manager, I want Flow to scan an existing project before writing new docs, so that generated specs reflect the real product.
5. As a developer, I want Flow to identify codebase structure, so that agents know where app code, shared code, server code, tests, and generated artifacts belong.
6. As a developer, I want Flow to identify common database patterns, so that new work follows existing data access conventions.
7. As a designer, I want Flow to identify UI and creative patterns, so that wireframes and designs do not contradict the existing product style.
8. As a stakeholder, I want inferred project context to include confidence levels, so that I can see what is known, guessed, or unknown.
9. As a maintainer, I want important claims to include evidence, so that I can audit why Flow reached a conclusion.
10. As a maintainer, I want uncertain context to become verification questions, so that weak assumptions are corrected early.
11. As an agent, I want confirmed context documents, so that future Flow skills can reuse the same product and codebase understanding.
12. As an agent, I want clear canonical, allowed, legacy, and avoid pattern statuses, so that I can follow the right conventions when working in a brownfield project.
13. As a repo owner, I want Flow documents to default to `.flow/`, so that product artifacts are grouped and do not collide with existing docs.
14. As a repo owner, I want `flow-scaffold` to detect existing Flow roots, so that current `specs/` projects can keep working without surprise migrations.
15. As a Flow user, I want the chosen Flow document root recorded in agent guidance, so that future agents know where to read and write Flow artifacts.
16. As a developer, I want Flow to detect drift between confirmed context and current code, so that stale documentation can be corrected.
17. As a PM, I want Flow to detect drift between confirmed context and new specs, so that product docs do not invent unsupported behavior.
18. As a designer, I want Flow to detect drift between confirmed UI patterns and new wireframes, so that visual and interaction patterns remain coherent.
19. As a maintainer, I want context generation to stay human-readable, so that the documents can be reviewed and maintained without special tooling.
20. As a future contributor, I want v2 skills to stay compatible with Codex, Claude, and OpenCode installation, so that the suite remains portable.

## Implementation Decisions

- Add a shared recommendation pattern to every existing Flow skill.
- Recommendations should include `Recommended`, `Optional`, and `Do not do yet` sections when relevant.
- Recommendations may point to Flow skills or outside-suite actions such as stakeholder review, engineering review, design review, external tracker updates, or implementation.
- Add `flow-context` as the brownfield intake and context-maintenance skill.
- `flow-context` should scan project files before asking the user for information that can be inferred locally.
- `flow-context` should generate draft context with claims, confidence, evidence, and verification questions.
- `flow-context` should create or update context documents only after preserving existing user-authored content.
- Confirmed context should live under the configured Flow root.
- The default Flow root for new scaffolds should be `.flow/`.
- `flow-scaffold` should ask the user where Flow documents should live, with `.flow/` as the recommended default.
- `flow-scaffold` should detect legacy roots such as `specs/` and `docs/` conventions before recommending a new root.
- The chosen Flow root should be recorded in agent guidance.
- `flow-scaffold` should not create `docs/flow-overview.md` by default; local Flow conventions should live in the chosen Flow root and agent guidance.
- Add `flow-check` as the context verification and drift detection skill.
- `flow-check` should compare specs, designs, wireframes, handoffs, and current code against confirmed context.
- `flow-check` should report mismatches as human-readable findings, not enforce them through tooling.
- Context documents should use simple statuses such as `Draft`, `Needs Review`, and `Confirmed`.
- Context claims should use simple confidence levels: `High`, `Medium`, `Low`, and `Unknown`.
- Codebase pattern docs should distinguish `Canonical`, `Allowed`, `Legacy`, and `Avoid` patterns.
- Flow v2 should stay Markdown-first and avoid creating a machine-readable schema as the primary artifact.

## Testing Decisions

- Test through generated artifacts and skill instructions rather than internal implementation details.
- The highest-value test seam is a full skill invocation against a small sample brownfield project.
- `flow-scaffold` should be tested against a repo with no Flow root, a repo with existing `specs/`, and a repo where the user chooses a custom root.
- `flow-context` should be tested by scanning a sample project and verifying that it produces draft context with evidence, confidence, and questions.
- `flow-context` should be tested for preservation of existing context files.
- `flow-check` should be tested by introducing deliberate mismatches between confirmed context and a sample spec or code pattern.
- Existing v1 skills should be tested for the new `Recommended Next Steps` output behavior.
- Tests should focus on external behavior: files created, guidance included, overwrite protection, confidence/evidence quality, and plain-language output.
- No test should require a specific application framework. Sample projects can provide small fixture structures for common patterns.

## Out of Scope

- Building a full RAG system or vector database.
- Automatically enforcing architecture rules in code.
- Replacing README files, architecture decision records, or external documentation systems.
- Migrating existing Flow projects from `specs/` to `.flow/` without explicit user approval.
- Publishing to GitHub Issues, Jira, Linear, or another external tracker in this PRD.
- Creating a complex machine-readable project schema as the main context artifact.
- Guaranteeing perfect project understanding from a scan alone.

## Further Notes

The v2 direction is not a replacement for Flow v1. It is an intelligence layer that makes v1 safer and more useful in brownfield projects.

The most important product boundary is that Flow can infer context, but the user decides when that context becomes canonical.
