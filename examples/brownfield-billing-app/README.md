# Brownfield Billing App

This fixture is a small brownfield-style project used to validate Flow context scanning.

The product helps finance operators review customers, invoices, payments, and billing reports. It is intentionally incomplete: the point is to give `flow-context` enough evidence to infer product, architecture, UI, database, and testing patterns without depending on a real framework install.

## Workflows

- Finance operators review unpaid invoices.
- Operators open a customer account to inspect payment history.
- Operators export billing reports for reconciliation.

## Architecture Notes

- Route files live under `app/`.
- Shared UI lives under `components/ui/`.
- Server-side business logic lives under `server/`.
- Database schema lives under `prisma/schema.prisma`.
- Tests live under `tests/`.

