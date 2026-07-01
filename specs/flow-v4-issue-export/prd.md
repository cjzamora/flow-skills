# Flow V4 Issue Export PRD

Status: Draft
Owner:
Reviewers:
Last updated: 2026-07-02

## Problem Statement

Flow task files are useful inside a repository, but teams often need copy-ready issue Markdown for GitHub, Jira, Linear, or another external tracker. Without a Flow export skill, users must manually copy task details and may lose acceptance criteria, blockers, source links, assignees, or external references.

## Solution

Add `flow-export` to generate local issue-ready Markdown from Flow task files, specs, handoffs, or `flow-track` reports.

The skill does not publish externally by default. It creates local export files or returns copy-ready Markdown so users can review before publishing.

## User Stories

1. As a Flow user, I want to export task files as issue Markdown, so that I can move work into a delivery tracker without rewriting it.
2. As a developer, I want exported issues to preserve acceptance criteria, so that implementation expectations stay clear.
3. As a PM, I want exported issues to preserve blockers and assignees, so that external tracker work does not lose delivery context.
4. As a maintainer, I want exported issues to link back to source Flow docs, so that the repo remains the source of product truth.
5. As a team member, I want blocked tasks to be clearly marked, so that they are not accidentally treated as ready.
6. As a Flow user, I want export to be local by default, so that Flow does not publish to external systems without explicit approval.

## Implementation Decisions

- Add `flow-export` as a manual-only installable skill.
- Export task files under `[flow-root]/exports/[feature]/` by default.
- Support chat-only output when the user asks not to create files.
- Preserve source links to task, spec, and handoff files.
- Preserve acceptance criteria, blockers, assignee, external link, and suggested labels.
- Skip `Done` and `Skipped` tasks unless the user explicitly asks to include them.
- Do not call external tracker APIs by default.
- Recommend `flow-check` before export when blockers or open questions affect implementation readiness.

## Testing Decisions

- Validate against the brownfield billing fixture.
- Confirm exported issue Markdown preserves task metadata.
- Confirm blocked tasks are marked as blocked.
- Confirm done tasks are listed as not exported.
- Confirm no external publishing is attempted.

## Out of Scope

- Automatically creating GitHub, Jira, Linear, or other tracker issues.
- Syncing status back from external trackers.
- Replacing local Flow task files with external tracker issues.
- Exporting secrets or private runtime data.

## Further Notes

External publishing can be considered later as an explicit, opt-in integration. The first version should stay local and reviewable.

