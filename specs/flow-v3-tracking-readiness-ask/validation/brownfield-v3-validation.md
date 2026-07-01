# Flow V3 Brownfield Validation

Status: Done
Last updated: 2026-07-02

## Fixture

Use:

```text
examples/brownfield-billing-app/
```

## Expected Flow Track Report

`flow-track` should summarize the invoice reconciliation tasks as:

- Total tasks: 4
- Done: 1
- In Progress: 1
- Blocked: 1
- Ready: 1
- Missing assignee: 2
- Stale or missing dates: 2
- External links: 2

Expected blocker:

- `002-export-behavior.md` is blocked by a finance stakeholder decision.

Expected next step:

- Resolve report export behavior before treating the feature as ready for implementation.

## Expected Flow Check Readiness Findings

`flow-check` should find:

### High

- Handoff is not implementation-ready because a task is blocked by an unresolved stakeholder decision.

### Medium

- `003-reconciliation-view.md` has no assignee and no `Last updated` value.
- Product context still has open questions about customer-admin access.

## Expected Flow Ask Tier 0 Answers

Question:

```text
Where should invoice data access live?
```

Expected answer:

- Database access should go through server modules.
- Cite `.flow/context/codebase-patterns.md`.
- Cite `server/invoices.ts`.
- Confidence: High.
- Retrieval tier: Tier 0.

Question:

```text
Can customer admins access reconciliation data?
```

Expected answer:

- Unknown from confirmed context.
- Cite `.flow/context/product.md` open questions.
- Confidence: Unknown.

## Expected Flow Ask Tier 1 Index Behavior

`flow-ask` should be able to use:

```text
.flow/index/manifest.md
.flow/index/sources.md
.flow/index/chunks.jsonl
```

Expected index behavior:

- Report that the index is Tier 1 support data.
- Keep source files and confirmed context canonical.
- Exclude unsafe/noisy paths listed in the manifest.
- Continue citing original sources, not only chunk ids.

## Vector Tier Boundary

Validation should confirm that Tier 2 and Tier 3 vector behavior is documented as optional and not required for normal Flow usage.

