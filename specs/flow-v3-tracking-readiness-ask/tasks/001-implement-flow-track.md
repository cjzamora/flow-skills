# Implement Flow Track Task Summaries

Status: Done
Assignee:
External link:
Last updated: 2026-07-02

## What to Build

Create a `flow-track` skill that reads local Flow task files and produces a plain-language delivery status report.

This slice should make existing task metadata useful without turning Flow into a full project-management system.

## Acceptance Criteria

- [x] `flow-track` exists as an installable Flow skill.
- [x] The skill uses manual-only trigger wording.
- [x] The skill reads task files under the configured Flow root.
- [x] The skill summarizes status counts across `Backlog`, `Ready`, `In Progress`, `Blocked`, `In Review`, `Done`, and `Skipped`.
- [x] The skill lists blocked tasks and their blockers.
- [x] The skill lists assignees and missing assignees.
- [x] The skill lists external links when present.
- [x] The skill flags stale or missing `Last updated` fields.
- [x] The skill recommends next delivery actions.
- [x] The skill does not change task statuses unless explicitly asked.

## Blocked By

None - can start immediately.

## User Stories Covered

- 1. As a Flow user, I want to summarize task status for a feature, so that I can quickly see what is done, blocked, stale, or ready.
- 2. As a Flow user, I want task summaries to include assignees and external links, so that local Flow docs can coexist with delivery trackers.
- 4. As a PM, I want `flow-track` to recommend next delivery actions, so that I know whether to resolve blockers, assign owners, review tasks, or proceed.
