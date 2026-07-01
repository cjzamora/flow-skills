# Flow V3 Tracking, Readiness, and Ask Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Implement Flow v3 by adding task tracking, readiness checks, and source-cited project Q&A with optional indexed retrieval tiers.

**Architecture:** Flow remains an installable Markdown skill suite. V3 adds two new skill folders, expands `flow-check`, updates docs and validation artifacts, and relies on the existing CLI validator to verify skill metadata and required sections.

**Tech Stack:** Markdown skill files, OpenAI skill metadata YAML, Node CLI validator, local brownfield fixture, local Markdown specs/tasks.

---

## Tasks

- [x] Add `flow-track` with task summary, blocker, owner, stale-date, external-link, and next-step guidance.
- [x] Upgrade `flow-check` with readiness review for task health, draft context, blocked tasks, missing owners, and unresolved questions.
- [x] Add `flow-ask` with Tier 0 context/search answering, Tier 1 manifest/chunk-map guidance, and Tier 2/3 optional vector guidance.
- [x] Add v3 validation artifacts to the brownfield fixture.
- [x] Update README, overview, roadmap, changelog, and package version.
- [x] Mark v3 task files complete.
- [x] Verify with `npm test --if-present`, `node bin/flow-skills.js list`, `node bin/flow-skills.js validate`, fixture test, install dry-runs, and package dry-run.

