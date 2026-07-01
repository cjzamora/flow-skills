# Implement flow-scaffold for Repo Setup

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create `flow-scaffold`, the skill that prepares a repository for Flow by creating the basic docs structure and adding a short Flow section to the appropriate agent instruction file.

The result should make a repo ready for Flow without forcing a heavy process or overwriting unrelated instructions.

## Acceptance Criteria

- [ ] The skill creates the expected docs index structure when it is missing.
- [ ] The skill creates or updates the repo's agent instruction file with a short Flow section.
- [ ] Existing unrelated agent instructions are preserved.
- [ ] The Flow section explains the source of truth, immutable revisions, and plain-language writing style.
- [ ] The skill handles an empty repository cleanly.
- [ ] The skill avoids duplicate Flow sections when rerun.

## Blocked By

- 001-create-flow-skill-suite-foundation.md

## User Stories Covered

- 6. As an agent, I want predictable folders and file names, so that I can create, update, and link documents consistently.
- 22. As a repo maintainer, I want `flow-scaffold` to update `AGENTS.md` briefly, so that future agents understand the Flow conventions.
- 24. As a user, I want Flow to create files by default inside a repo, so that I get usable artifacts instead of only chat output.
