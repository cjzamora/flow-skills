# Add Flow Ask Tier 1 Source Manifest and Chunk Map

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Extend `flow-ask` with a local Tier 1 index convention: a source manifest and chunk map under the configured Flow root.

This slice should make project knowledge inspectable and reusable without requiring embeddings.

## Acceptance Criteria

- [x] `flow-ask` defines a Tier 1 local index convention.
- [x] The index includes a human-readable source manifest.
- [x] The index includes a machine-readable chunk map.
- [x] The index records source paths, source types, generated time, and ignored paths.
- [x] Chunk entries include source path, heading or symbol when available, excerpt summary, and citation anchor.
- [x] Indexing guidance excludes secrets, dependency folders, build outputs, binary files, and generated artifacts by default.
- [x] The index is treated as derived support data, not the source of truth.
- [x] The brownfield fixture can be used to validate expected manifest and chunk-map content.

## Blocked By

- 003-flow-ask-tier-0.md

## User Stories Covered

- 11. As a maintainer, I want a local source manifest and chunk map, so that project knowledge can be inspected and updated without hidden state.
- 12. As a maintainer, I want indexing to exclude secrets, generated files, dependency folders, and noisy artifacts, so that knowledge search is safe and useful.
- 16. As a team, I want Flow tracking and asking to remain compatible with local Markdown workflows, so that users can review everything in GitHub or an editor.
