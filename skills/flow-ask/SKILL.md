---
name: flow-ask
description: Answer project questions using Flow context, local search, and optional indexed retrieval. Use only when the user explicitly invokes flow-ask or explicitly asks Flow to answer project questions from local context.
---

# Flow Ask

Answer project questions with citations, confidence, and clear boundaries.

`flow-ask` is an optional intelligence layer. It does not replace confirmed context docs, source files, or human review.

Core rule:

```text
Flow remains Markdown-first. Indexed retrieval is optional support, not the source of truth.
```

## Flow Root

Find the configured Flow root by reading:

- `AGENTS.md`, `CLAUDE.md`, or other agent guidance.
- Existing `.flow/`, `specs/`, `docs/flow/`, or `docs/specs/` folders.

If no Flow root exists, recommend running `flow-scaffold` before building an index.

## Retrieval Tiers

Use the lowest useful tier. Always state which tier was used.

### Tier 0: Context and Local Search

Use:

- Confirmed context docs under `[flow-root]/context/`.
- Specs, design docs, wireframes, handoffs, and task files under the Flow root.
- Local text search with `rg`.
- Project docs such as README files and ADRs.
- Source files when the answer is about code structure or behavior.

Tier 0 requires no index and no vector database.

### Tier 1: Source Manifest and Chunk Map

Use local derived index files when they exist:

```text
[flow-root]/index/
  manifest.md
  sources.md
  chunks.jsonl
  notes.md
```

The index is support data. Source files and confirmed context remain canonical.

`manifest.md` should explain:

- Generated date.
- Retrieval tier.
- Included source roots.
- Ignored source roots.
- Known gaps.

`sources.md` should list source groups in human-readable form.

`chunks.jsonl` should use one JSON object per line:

```json
{"id":"chunk-001","source":"README.md","kind":"doc","anchor":"# Overview","summary":"Project overview and primary workflows.","citation":"README.md"}
```

Chunk entries should include:

- Stable chunk id.
- Source path.
- Source type.
- Heading, symbol, or anchor when available.
- Short summary.
- Citation target.

### Tier 2: Optional Local Vector Index

Use only when the project has explicitly opted in and dependencies are available.

Requirements:

- Keep source citations.
- State the vector index location.
- State when the index was generated.
- Fall back to Tier 0 or Tier 1 if the vector index is stale, missing, or unavailable.

Do not require a vector database for normal Flow use.

### Tier 3: Optional External Provider

Use only when the user explicitly opts in to an external provider.

Requirements:

- Do not send secrets or ignored files.
- State which provider or connector was used.
- Keep source citations.
- Respect the same confidence and unknown-answer rules as local retrieval.

## Safe Source Rules

Do not index or quote from:

- Secrets or environment files.
- Dependency folders such as `node_modules/`.
- Build outputs such as `dist/`, `build/`, `.next/`, or coverage folders.
- Binary files.
- Generated artifacts unless the user explicitly asks.
- Large lockfiles unless the question is about dependencies.

When unsure, exclude the file and mention the gap.

## Answer Format

Use this structure:

```md
## Answer

[Direct answer in plain language.]

## Sources

- `[path]` - [why it matters]

## Confidence

High | Medium | Low | Unknown

## Retrieval

Tier used: Tier 0 | Tier 1 | Tier 2 | Tier 3

## Inference Notes

- [Only include if any part of the answer is inferred.]

## Recommended Next Steps

Recommended:
- ...

Optional:
- ...

Do not do yet:
- ...
```

If the answer is not supported, say so:

```md
## Answer

I cannot answer this from the available Flow context or local sources.

## Sources

- No supporting source found.

## Confidence

Unknown
```

## Durable Knowledge

When an answer reveals durable project knowledge that is not in confirmed context, recommend a `flow-context` update.

Do not silently update confirmed context.

Example:

```md
Recommended:
- Run `flow-context` to add the confirmed data-access pattern if the team agrees this answer is correct.
```

## Index Maintenance

When the user asks to build or refresh a Tier 1 index:

1. Discover safe source files with `rg --files`.
2. Exclude unsafe and noisy paths.
3. Write or update `[flow-root]/index/manifest.md`.
4. Write or update `[flow-root]/index/sources.md`.
5. Write or update `[flow-root]/index/chunks.jsonl`.
6. Report included sources, ignored sources, and known gaps.

Do not create embeddings unless the user explicitly asks for Tier 2.

## Recommended Next Steps

End with a short recommendation block:

```md
## Recommended Next Steps

Recommended:
- Run `flow-context` when a sourced answer should become durable confirmed project context.
- Refresh the Tier 1 index if answers rely on stale or missing source coverage.

Optional:
- Use Tier 2 local vector search only after Tier 0 and Tier 1 are useful and the project opts in.

Do not do yet:
- Do not treat uncited or inferred answers as canonical project truth.
```

