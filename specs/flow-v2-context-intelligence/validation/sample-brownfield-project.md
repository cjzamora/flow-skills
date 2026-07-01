# Flow V2 Brownfield Validation

Status: Done
Last updated: 2026-07-02

## Purpose

This validation describes the expected end-to-end behavior for Flow v2 context intelligence on a brownfield project.

It validates skill instructions rather than a framework runtime.

## Sample Project Signals

Assume a brownfield app with these visible signals:

- `README.md` says the app manages customer billing operations.
- `package.json` includes a web framework and test scripts.
- App routes include dashboard, customers, invoices, and reports.
- Shared UI components live under a reusable component folder.
- Server-side business logic appears separate from page components.
- Database schema or model files include Customer, Invoice, and Payment concepts.
- Tests include examples for user workflows and server behavior.

## Expected `flow-scaffold` Behavior

- Detects any existing Flow root before creating a new one.
- Recommends `.flow/` when no Flow root exists.
- Creates short index files under the chosen root.
- Records the chosen root in agent guidance.
- Does not create `docs/flow-overview.md` unless the user chooses a docs-based Flow root.

## Expected `flow-context` Draft

The skill should create draft context with evidence and confidence:

```md
## Product Purpose

Status: Draft
Confidence: Medium

Summary:
The product appears to help teams manage customer billing operations.

Evidence:
- `README.md` mentions customer billing operations.
- Route names include customers, invoices, and reports.

Needs confirmation:
- Is billing the full product or one module inside a larger platform?
```

## Expected Codebase Pattern Capture

The skill should identify practical operating patterns:

```md
## Shared UI

Status: Draft
Pattern status: Canonical
Confidence: Medium

Summary:
Reusable UI appears to live in the shared component area.

Evidence:
- Shared button and dialog components are grouped together.

Needs confirmation:
- Should all new reusable UI be added there, or are some shared components feature-local?
```

```md
## Database Access

Status: Draft
Pattern status: Unknown
Confidence: Low

Summary:
Database models are visible, but the expected access pattern is not fully clear.

Evidence:
- Model files include customer, invoice, and payment concepts.

Needs confirmation:
- Should new database access go through service modules, repositories, route handlers, or another pattern?
```

## Expected Confirmation Behavior

- High-confidence facts can be confirmed quickly.
- Medium- and low-confidence claims remain draft until the user confirms or corrects them.
- Confirmed claims become canonical context.
- Rejected claims are corrected instead of hidden.

## Expected `flow-check` Drift Review

Given confirmed context that says database access belongs in service modules, `flow-check` should flag a new handoff that instructs engineers to query the database directly from UI components.

Expected finding:

```md
### High

- Handoff conflicts with confirmed data-access pattern.
  - Target: implementation handoff
  - Context: confirmed codebase patterns
  - Issue: The handoff recommends direct database access from UI code, but confirmed context says data access belongs in service modules.
  - Recommendation: Update the artifact.
```

## Validation Result

The v2 skills satisfy the intended behavior when they:

- Keep inferred context as draft.
- Attach evidence and confidence to important claims.
- Ask verification questions for uncertain or high-impact claims.
- Promote only confirmed context to canonical context.
- Capture codebase, database, UI, and testing patterns.
- Report drift without enforcing changes automatically.
- Recommend useful next steps after each skill.

