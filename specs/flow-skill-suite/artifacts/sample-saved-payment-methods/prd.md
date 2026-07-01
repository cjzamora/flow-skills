# Saved Payment Methods PRD

Status: Draft
Owner: Flow validation
Reviewers:
Last updated: 2026-07-02

## Problem Statement

Returning customers need a faster checkout experience. Today they must re-enter payment details every time, which slows checkout and increases the chance they abandon the purchase.

## Solution

Let customers save a payment method during checkout and select it on future purchases. Customers should also be able to review and remove saved payment methods from their account.

## Users

- Returning customers
- Guest customers who create an account during checkout
- Support and operations teams who help customers troubleshoot payment issues

## Goals

- Reduce repeated payment entry for returning customers.
- Make saved payment methods clear and trustworthy.
- Give customers control over removing saved methods.
- Keep sensitive card details hidden.

## Non-Goals

- Building a full wallet product.
- Supporting non-card payment methods.
- Letting staff view full payment details.

## Scope

### In Scope

- Save payment method option during checkout.
- Select a saved payment method during checkout.
- View saved payment methods in account settings.
- Remove a saved payment method.

### Out of Scope

- Payment provider migration.
- Refund management.
- Subscription billing.

## Requirements

- Customers can opt in before saving a payment method.
- Saved payment methods show brand, last four digits, and expiration date.
- Customers can remove saved methods from account settings.
- Checkout handles expired or declined saved methods with clear recovery guidance.
- The system never displays full card numbers.

## User Stories

1. As a returning customer, I want to select a saved payment method, so that I can check out faster.
2. As a customer, I want to choose whether to save a payment method, so that I stay in control of my account.
3. As a customer, I want to remove a saved payment method, so that I can manage old or unwanted cards.
4. As a customer, I want clear errors when a saved card fails, so that I know how to complete checkout.
5. As a support teammate, I want customers to see clear saved-card labels, so that payment questions are easier to resolve.

## Decisions

- Saved payment methods are opt-in.
- The UI shows only safe card metadata.
- Customers manage saved methods in account settings.
- Expired or failed saved methods remain visible but require a different payment method at checkout.

## Risks and Open Questions

- Confirm payment provider tokenization requirements.
- Confirm whether guest checkout can save a method before account creation.
- Confirm the exact error copy required for failed saved payments.

## Success Criteria

- Returning customers can complete checkout with a saved method.
- Customers can remove saved methods without support help.
- No full card details appear in the UI.

## Links

- Tasks: tasks/README.md
- Design: design/README.md
- Wireframes: wireframes/index.html
- Handoff: handoff.md
