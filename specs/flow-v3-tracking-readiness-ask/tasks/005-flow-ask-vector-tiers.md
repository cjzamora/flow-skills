# Define Optional Vector Tiers for Flow Ask

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Document optional Tier 2 and Tier 3 retrieval behavior for `flow-ask` without requiring vector dependencies in the first implementation.

This slice should keep the path open for local vector search and provider integrations while protecting Flow's lightweight defaults.

## Acceptance Criteria

- [x] `flow-ask` documents Tier 2 as optional local vector index behavior.
- [x] `flow-ask` documents Tier 3 as optional external/vector provider integrations.
- [x] The skill states that vectors are opt-in and not required for normal Flow use.
- [x] The skill requires source-cited answers even when vectors are used.
- [x] The skill explains which retrieval tier was used in each answer.
- [x] The skill documents safe indexing boundaries for secrets and noisy files.
- [x] No external provider is required in this slice.

## Blocked By

- 004-flow-ask-tier-1-index.md

## User Stories Covered

- 13. As a future maintainer, I want vector search to be opt-in, so that Flow does not force heavy dependencies on simple projects.
- 18. As an agent, I want `flow-ask` to explain which retrieval tier it used, so that I understand whether the answer came from context, text search, chunks, or vectors.
