# Flow Roadmap

Status: Draft
Last updated: 2026-07-02

This roadmap collects likely future improvements for Flow. It is intentionally practical: each item should preserve Flow's core promise of lightweight, human-readable product development docs.

## Guiding Principles

- Keep Flow Markdown-first and readable by PMs, designers, developers, clients, stakeholders, and agents.
- Make advanced intelligence optional, not required.
- Prefer local files and clear citations over hidden state.
- Treat generated or inferred knowledge as draft until confirmed by the user.
- Avoid replacing existing issue trackers, design systems, or documentation platforms.

## Implemented

### V1: Core Flow Skills

Implemented skills:

```text
flow-scaffold
flow-grill
flow-spec
flow-design
flow-wireframe
flow-handoff
```

Outcome:

- Turn product ideas into specs, functional designs, wireframes, and implementation handoffs.
- Keep artifacts local, plain-language, and safe from accidental overwrites.

### V2: Context Intelligence

Implemented skills:

```text
flow-context
flow-check
```

Outcome:

- Scan brownfield projects.
- Create draft project context with evidence, confidence, and verification questions.
- Promote confirmed context to canonical docs.
- Review specs, designs, wireframes, and handoffs for context drift.

### V3: Tracking, Readiness, and Ask

Spec:

```text
specs/flow-v3-tracking-readiness-ask/prd.md
```

Implemented skills and updates:

```text
flow-track
flow-ask
flow-export
flow-check readiness upgrades
```

Outcome:

- Summarize local task status, blockers, assignees, stale dates, and external links.
- Upgrade `flow-check` so readiness review includes blocked tasks, missing owners, draft context, and unresolved questions.
- Add `flow-ask` for source-cited project Q&A.
- Start `flow-ask` with confirmed context and local search.
- Add local source manifests and chunk maps before introducing optional vector search.
- Generate issue-ready Markdown without automatic external publishing.

Validation:

```text
specs/flow-v3-tracking-readiness-ask/validation/brownfield-v3-validation.md
```

## Planned Next

### V4 Candidate: Export and Broader Dogfooding

Potential direction:

- Add more fixture projects.
- Expand `flow-ask` validation with additional context shapes.
- Explore optional local vector implementation only after Tier 0 and Tier 1 are proven useful.
- Consider explicit, opt-in tracker publishing after local export is dogfooded.

## Candidate Improvements

### Local Knowledge Index

Create a local index under the configured Flow root:

```text
[flow-root]/index/
  manifest.md
  sources.md
  chunks.jsonl
  notes.md
```

Purpose:

- Help agents cheaply understand a project.
- Preserve source visibility.
- Keep citations easy to inspect.

Boundary:

- The index is derived support data, not the source of truth.

### Optional Vector Search

Add vector retrieval only after Tier 0 and Tier 1 prove useful.

Potential tiers:

- Tier 0: confirmed context docs plus local text search.
- Tier 1: local source manifest and chunk map.
- Tier 2: optional local vector index.
- Tier 3: optional external/vector provider integrations.

Boundary:

- Vector search must be opt-in.
- Answers must still cite sources.
- Flow must work without embeddings or provider keys.

### Issue Export

Generate issue-ready Markdown for GitHub, Jira, Linear, or another tracker.

Implemented first step:

- `flow-export` generates local/copy-ready Markdown under the configured Flow root.

Boundary:

- Start with export files or copy-ready Markdown.
- Avoid automatic tracker publishing until users explicitly ask for it.

### Fixture-Based Validation

Expand `examples/` with small fixture projects.

Potential fixtures:

- Brownfield SaaS dashboard.
- Backend/API-only service.
- Design-heavy marketing or onboarding flow.
- Multi-package workspace.

Purpose:

- Dogfood skills before release.
- Validate that generated artifacts stay readable.
- Catch vague skill instructions early.

### Release and Install Quality

Continue improving the CLI:

- Validate required skill sections.
- Validate install metadata.
- Validate package contents.
- Support disabled installs.
- Track changelog and version updates.

## Keep Out for Now

- Replacing Jira, Linear, GitHub Issues, or other delivery trackers.
- Making a vector database mandatory.
- Replacing source files or confirmed docs with indexed retrieval.
- Automatically enforcing architecture rules in code.
- Automatically changing task statuses during read-only tracking.
- Treating inferred context as canonical without user confirmation.
- Building a full enterprise project-management framework.
