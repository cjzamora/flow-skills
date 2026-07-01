# Flow V2 Context Intelligence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Flow v2 context intelligence by adding configurable Flow roots, recommended next steps, brownfield context scanning guidance, codebase pattern capture, drift review, and validation artifacts.

**Architecture:** Flow remains a Markdown-first skill suite. The implementation updates existing skill instructions, adds new installable skill folders, and validates behavior through generated artifacts and lightweight repository checks instead of introducing a runtime framework.

**Tech Stack:** Markdown skill files, OpenAI skill metadata YAML, Node-based installer CLI, local Markdown specs/tasks, shell verification with `node` and `rg`.

---

## File Structure

- Modify `skills/flow-scaffold/SKILL.md` to finish the `.flow/` configurable root behavior.
- Modify `skills/flow-spec/SKILL.md`, `skills/flow-design/SKILL.md`, `skills/flow-wireframe/SKILL.md`, `skills/flow-handoff/SKILL.md`, and `skills/flow-grill/SKILL.md` to include recommended next steps and context-reading behavior.
- Create `skills/flow-context/SKILL.md` and `skills/flow-context/agents/openai.yaml`.
- Create `skills/flow-check/SKILL.md` and `skills/flow-check/agents/openai.yaml`.
- Modify `README.md` and `INSTALLATION.md` to list the v2 skills.
- Create `specs/flow-v2-context-intelligence/validation/sample-brownfield-project.md`.
- Modify `specs/flow-v2-context-intelligence/tasks/*.md` statuses as slices are completed.

## Task 1: Configurable Flow Root

- [ ] Update `flow-scaffold` to document root detection, `.flow/` default, legacy root preservation, and no default `docs/flow-overview.md`.
- [ ] Verify with `rg -n "docs/flow-overview|\\.flow|flow root" skills/flow-scaffold/SKILL.md`.

## Task 2: Recommended Next Steps

- [ ] Add a `Recommended Next Steps` section to every existing Flow skill.
- [ ] Ensure each section can recommend Flow skills, outside-suite review steps, and "do not do yet" guidance.
- [ ] Verify with `rg -n "Recommended Next Steps" skills/flow-*/SKILL.md`.

## Task 3: Flow Context Draft Scan

- [ ] Create `flow-context` with scan sources, draft context outputs, evidence, confidence levels, and verification questions.
- [ ] Add install metadata for Codex/OpenAI surfaces.
- [ ] Verify with `node bin/flow-skills.js list`.

## Task 4: Context Confirmation and Canonical Docs

- [ ] Extend `flow-context` instructions with draft-to-confirmed lifecycle and canonical docs under the configured Flow root.
- [ ] Include product, users, workflows, architecture, data model, UI patterns, testing patterns, agent standards, and open questions.
- [ ] Verify with `rg -n "Confirmed|canonical|Draft|Needs Review" skills/flow-context/SKILL.md`.

## Task 5: Codebase and Database Patterns

- [ ] Add codebase pattern output guidance to `flow-context`.
- [ ] Include canonical, allowed, legacy, and avoid pattern statuses.
- [ ] Verify with `rg -n "Canonical|Allowed|Legacy|Avoid|database" skills/flow-context/SKILL.md`.

## Task 6: Flow Check Drift Review

- [ ] Create `flow-check` with review targets, finding categories, and recommended actions.
- [ ] Add install metadata for Codex/OpenAI surfaces.
- [ ] Verify with `node bin/flow-skills.js list`.

## Task 7: Validation and Docs

- [ ] Add a v2 validation artifact showing expected brownfield scan and drift review behavior.
- [ ] Update README and installation docs with new skills.
- [ ] Mark v2 tasks Done if their acceptance criteria are satisfied by the implemented skill instructions.
- [ ] Run final verification: `node bin/flow-skills.js list`, `rg -n "flow-context|flow-check|Recommended Next Steps|docs/flow-overview" skills README.md INSTALLATION.md specs/flow-v2-context-intelligence`, and `git status --short`.

