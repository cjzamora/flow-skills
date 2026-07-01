# Codebase Patterns

Status: Confirmed
Last updated: 2026-07-02

## Server Data Access

Pattern status: Canonical
Confidence: High

Summary:
Database access should go through server modules instead of UI components.

Evidence:
- `server/customers.ts` wraps customer access.
- `server/invoices.ts` wraps invoice access.
- `app/invoices/page.tsx` imports from the invoice server module.

## Shared UI

Pattern status: Canonical
Confidence: Medium

Summary:
Reusable UI components live under `components/ui/`.

Evidence:
- `components/ui/button.tsx`
- `components/ui/empty-state.tsx`

