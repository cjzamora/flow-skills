# Flow V3 Tracking, Readiness, and Ask PRD

Status: Draft
Owner:
Reviewers:
Last updated: 2026-07-02

## Problem Statement

Flow now helps teams create product docs and confirmed project context, but users still need better help understanding delivery state and asking project questions cheaply.

Today task files can hold status, assignee, blockers, and external links, but there is no Flow skill that summarizes delivery progress across a feature. `flow-check` can review drift against context, but it does not yet check implementation readiness using task state, blockers, missing owners, or unresolved questions. Agents can also read context docs and search the codebase, but there is no dedicated `flow-ask` skill that answers project questions with citations, confidence, and a clear fallback path from simple search to optional indexed retrieval.

The user wants Flow to stay lightweight while supporting stronger project understanding for agents, including a future local knowledge base, codebase vector search, and local documentation reference vectors.

## Solution

Add a Flow v3 layer for tracking, readiness review, and optional project Q&A.

Flow v3 adds:

1. `flow-track` for lightweight local task tracking and delivery summaries.
2. `flow-check` readiness upgrades that use task state, open questions, confirmed context, and codebase patterns before handoff or implementation.
3. `flow-ask` for project Q&A with source-cited answers and a tiered retrieval model.
4. A local knowledge index convention that starts with manifests and chunk maps, then can grow into opt-in vector search later.

`flow-ask` should not make RAG mandatory for Flow. It should use capability tiers:

- Tier 0: confirmed context docs plus local text search.
- Tier 1: generated local source manifest and chunk map.
- Tier 2: optional local vector index if dependencies are available.
- Tier 3: optional external/vector provider integrations, explicitly opt-in.

Core rule:

```text
Flow remains Markdown-first. Indexed retrieval is optional support, not the source of truth.
```

## User Stories

1. As a Flow user, I want to summarize task status for a feature, so that I can quickly see what is done, blocked, stale, or ready.
2. As a Flow user, I want task summaries to include assignees and external links, so that local Flow docs can coexist with delivery trackers.
3. As a developer, I want blocked tasks and unresolved questions highlighted before handoff, so that implementation does not start from weak assumptions.
4. As a PM, I want `flow-track` to recommend next delivery actions, so that I know whether to resolve blockers, assign owners, review tasks, or proceed.
5. As a reviewer, I want `flow-check` to flag handoffs created before context is confirmed, so that implementation is not based on draft assumptions.
6. As a reviewer, I want `flow-check` to flag missing task owners, stale dates, and blocked tasks, so that readiness review includes delivery health.
7. As an agent, I want to ask where product or code concepts live, so that I can understand a repo faster.
8. As an agent, I want project answers to include citations, so that I can inspect the source instead of trusting unsupported claims.
9. As an agent, I want answers to distinguish sourced facts from inference, so that I can avoid treating guesses as project truth.
10. As a maintainer, I want `flow-ask` to work without a vector database, so that the skill remains portable.
11. As a maintainer, I want a local source manifest and chunk map, so that project knowledge can be inspected and updated without hidden state.
12. As a maintainer, I want indexing to exclude secrets, generated files, dependency folders, and noisy artifacts, so that knowledge search is safe and useful.
13. As a future maintainer, I want vector search to be opt-in, so that Flow does not force heavy dependencies on simple projects.
14. As a developer, I want `flow-ask` to suggest `flow-context` updates when it discovers durable project knowledge, so that confirmed context improves over time.
15. As a user, I want `flow-ask` to say when it cannot answer, so that missing context becomes visible instead of hallucinated.
16. As a team, I want Flow tracking and asking to remain compatible with local Markdown workflows, so that users can review everything in GitHub or an editor.
17. As a Flow maintainer, I want validation artifacts for tracking and ask behavior, so that future changes can be dogfooded against a known fixture.
18. As an agent, I want `flow-ask` to explain which retrieval tier it used, so that I understand whether the answer came from context, text search, chunks, or vectors.
19. As a product reviewer, I want `flow-check` to connect readiness findings to concrete next steps, so that reports are actionable.
20. As a Flow user, I want all v3 skills to keep the manual-only invocation behavior, so that they do not activate unexpectedly in unrelated projects.

## Implementation Decisions

- Add `flow-track` as a new installable skill.
- `flow-track` should read task files under the configured Flow root and summarize status, blockers, assignees, external links, and last-updated fields.
- `flow-track` should produce a plain-language status report and recommended next delivery actions.
- `flow-track` should not mutate task statuses unless the user explicitly asks.
- Update `flow-check` so readiness review includes task health, unresolved open questions, draft context, missing owners, and blocked tasks.
- `flow-check` should recommend whether to update artifacts, update context, ask the user, resolve blockers, or proceed.
- Add `flow-ask` as a new installable skill.
- `flow-ask` should answer project questions using citations and confidence.
- `flow-ask` should start with Tier 0 and Tier 1 behavior: confirmed context, local text search, source manifest, and chunk map.
- Define a local index convention under the configured Flow root.
- The local index should include a human-readable manifest and machine-readable chunk map, but the primary source of truth remains Markdown docs and source files.
- Vector search should be documented as Tier 2 and optional. Do not require a vector database in the first implementation.
- External/vector providers should be Tier 3 and explicitly opt-in.
- Indexing guidance must exclude secrets, dependency folders, generated outputs, build artifacts, binary files, and other noisy files.
- `flow-ask` should never silently update confirmed context; it may recommend `flow-context` updates.
- All v3 skills must keep manual-only trigger descriptions.
- Installer validation should include the new skills.

## Testing Decisions

- Test through generated artifacts and skill instructions rather than hidden implementation details.
- The highest-value seam is full skill invocation against the existing brownfield billing fixture.
- `flow-track` should be tested against local task files with mixed statuses, blockers, assignees, and external links.
- `flow-check` readiness upgrades should be tested against a handoff with blocked tasks, draft context, or unresolved open questions.
- `flow-ask` Tier 0 should be tested by answering questions from confirmed context and local search evidence.
- `flow-ask` Tier 1 should be tested by creating a source manifest and chunk map that cite fixture files.
- Validation should confirm that `flow-ask` refuses unsupported answers or marks them as unknown.
- Validation should confirm that `flow-ask` does not index ignored/noisy files.
- Existing CLI `validate` should be extended to include `flow-track` and `flow-ask` once those skills exist.

## Out of Scope

- Making a vector database required for Flow.
- Building external provider integrations in the first v3 implementation.
- Automatically publishing or syncing tasks to GitHub, Jira, Linear, or another tracker.
- Automatically changing task statuses during read-only tracking.
- Automatically updating confirmed context from `flow-ask` answers.
- Indexing secrets, dependency folders, build outputs, binary files, or generated artifacts by default.
- Replacing source files, README files, confirmed context docs, or human review with vector search.
- Guaranteeing perfect answers from `flow-ask`.

## Further Notes

`flow-track` is the safest first implementation slice because it builds on existing task metadata.

`flow-ask` should be specified now but implemented carefully. Tier 0 and Tier 1 are enough to prove the source model, citations, chunking rules, ignore rules, and update lifecycle before introducing embeddings or a vector database.

