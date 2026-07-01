# Implement Flow Ask Tier 0 Question Answering

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create a `flow-ask` skill that answers project questions using confirmed context docs and local text search, with citations, confidence, and clear unknowns.

This slice should provide useful project Q&A without requiring a vector database.

## Acceptance Criteria

- [x] `flow-ask` exists as an installable Flow skill.
- [x] The skill uses manual-only trigger wording.
- [x] The skill reads confirmed context docs first.
- [x] The skill uses local text search when context docs do not answer the question.
- [x] Answers include citations to source files or context docs.
- [x] Answers distinguish sourced facts from inference.
- [x] Answers include a confidence level.
- [x] The skill says when it cannot answer.
- [x] The skill recommends `flow-context` updates when it finds durable project knowledge.
- [x] The skill does not update confirmed context automatically.

## Blocked By

None - can start immediately.

## User Stories Covered

- 7. As an agent, I want to ask where product or code concepts live, so that I can understand a repo faster.
- 8. As an agent, I want project answers to include citations, so that I can inspect the source instead of trusting unsupported claims.
- 9. As an agent, I want answers to distinguish sourced facts from inference, so that I can avoid treating guesses as project truth.
- 10. As a maintainer, I want `flow-ask` to work without a vector database, so that the skill remains portable.
- 15. As a user, I want `flow-ask` to say when it cannot answer, so that missing context becomes visible instead of hallucinated.
