# Dogfood Flow Context Notes

Status: Done
Last updated: 2026-07-02

## Fixture

The dogfood fixture lives at:

```text
examples/brownfield-billing-app/
```

## Expected Scan Signals

`flow-context` should infer:

- Product purpose: billing operations for finance users.
- Users: finance operators, with customer-admin access unresolved.
- Workflows: review unpaid invoices, inspect customer history, export reports.
- Architecture: route files under `app/`, shared UI under `components/ui/`, server logic under `server/`.
- Data model: Customer, Invoice, and Payment concepts from `prisma/schema.prisma`.
- Testing pattern: workflow tests under `tests/`.

## Expected Verification Questions

`flow-context` should ask:

- Is the product only for internal finance operators?
- Are reports manual exports or scheduled delivery?
- Is `components/ui/` canonical for all shared UI?
- Should all database access go through server modules?

## Expected Drift Check

`flow-check` should flag a handoff that asks developers to query invoices directly from UI components, because the fixture suggests server-side modules own data access.

