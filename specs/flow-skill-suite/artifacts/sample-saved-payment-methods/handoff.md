# Implementation Handoff

Status: Ready for Build
Owner: Flow validation
Engineering lead:
Design contact:
Last updated: 2026-07-02

## Related Docs

- PRD: prd.md
- Design: design/README.md
- Wireframes: wireframes/index.html
- Tasks: tasks/README.md

## What We Are Building

Saved payment methods for returning customers, including checkout selection and account management.

## What Is Already Decided

- Saving a payment method is opt-in.
- Only safe card metadata appears in the UI.
- Customers can remove saved methods.
- Failed saved methods show a recovery path.

## What Needs Engineering Judgment

- Tokenization details depend on the payment provider.
- Guest checkout behavior needs final confirmation.
- Default payment method behavior is not in v1 unless explicitly added.

## Suggested Build Order

1. Add saved method selection to checkout.
2. Add saved method removal in account settings.
3. Add error and expired-card states.

## Risks and Unknowns

- Payment provider constraints may change UI copy or flow.
- Guest-to-account conversion may affect when saving is allowed.

## Acceptance Notes

Implementation should satisfy the PRD success criteria and task acceptance criteria.

## External Links

None.
