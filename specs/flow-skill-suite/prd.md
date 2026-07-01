# Flow Skill Suite PRD

## Problem Statement

Teams often need a lightweight way to turn product ideas into clear, human-readable specs, functional designs, wireframes, and implementation handoffs. Existing skill systems can be powerful, but they may feel too technical, too heavy, or too oriented toward agents instead of PMs, designers, developers, and clients working together.

The user wants a simpler skill suite inspired by ChrisAI agents and Matt Pocock's SDD skills, but easier to follow, more client-facing, and less process-heavy than spec-kit-style systems.

## Solution

Create a new Flow skill suite that guides product-development work from idea to handoff using predictable repository folders and plain-language documents.

Flow is not an acronym. It is the name of the workflow: moving from an idea, through decisions, into specs, functional design, wireframes, and implementation handoff.

Flow v1 includes:

1. `flow-scaffold`
2. `flow-grill`
3. `flow-spec`
4. `flow-design`
5. `flow-wireframe`
6. `flow-handoff`

The suite writes documents under `docs/`, keeps spec revisions immutable, uses human-readable statuses, and creates files by default when running inside a repository. It does not publish to an external tracker in v1.

## User Stories

1. As a product manager, I want a simple workflow for shaping product ideas, so that I can create clear specs without learning a complex framework.
2. As a designer, I want functional design documents separate from wireframes, so that design decisions and visual exploration can evolve at different speeds.
3. As a developer, I want implementation handoff documents, so that I can understand what is decided, what is flexible, and what still needs engineering judgment.
4. As a client stakeholder, I want product documents written in plain language, so that I can review and approve work without decoding technical jargon.
5. As a founder, I want a lightweight product-development structure, so that a small team can collaborate without adopting a full delivery platform.
6. As an agent, I want predictable folders and file names, so that I can create, update, and link documents consistently.
7. As a team member, I want each feature revision to have a canonical source of truth, so that people know where to start reading.
8. As a reviewer, I want immutable numbered revisions, so that approved decisions are not accidentally rewritten.
9. As a PM, I want a structured grilling skill, so that weak assumptions are clarified before specs are created.
10. As a non-technical stakeholder, I want the grilling process to be collaborative instead of confrontational, so that product discovery feels accessible.
11. As a user of the workflow, I want each grilling question to include a recommended answer, so that I can make decisions faster.
12. As an agent using Flow, I want to inspect the codebase before asking questions, so that I do not ask the user for information already available in the repo.
13. As a product team, I want specs to use multiple focused files, so that each concern stays simple and scoped.
14. As a reader, I want the spec `README.md` to be an entry point, so that I can quickly find status, ownership, links, and the table of contents.
15. As a PM, I want standard spec files for overview, scope, requirements, decisions, risks, and tasks, so that every feature revision is easy to navigate.
16. As a designer, I want functional design files for experience, screens, rules, and open questions, so that I can communicate behavior before visual polish.
17. As a stakeholder, I want static HTML/CSS wireframes, so that I can open and review them without a dev server or frontend framework.
18. As a designer, I want wireframes to be low-to-medium fidelity but polished, so that feedback focuses on flow and usability instead of unfinished visuals.
19. As a developer, I want task files inside the spec revision, so that implementation work stays tied to the product decision it came from.
20. As a team member, I want task files to include status, assignee, external link, and notes, so that multiple people can coordinate without a heavy tracker.
21. As a maintainer, I want `flow-track` left out of v1, so that the first version stays focused and simple.
22. As a repo maintainer, I want `flow-scaffold` to update `AGENTS.md` briefly, so that future agents understand the Flow conventions.
23. As a collaborator, I want Flow skills to avoid overwriting existing revisions, so that existing decisions are protected.
24. As a user, I want Flow to create files by default inside a repo, so that I get usable artifacts instead of only chat output.
25. As a team, I want spec, design, and wireframe revisions to share the same revision slug, so that linked artifacts are easy to find.
26. As a developer, I want a handoff document that can be read in five minutes, so that implementation can start with minimal ambiguity.
27. As a future maintainer, I want tracking to be possible later without changing the folder structure, so that Flow can grow only when needed.

## Implementation Decisions

- Build Flow as a family of separate skills rather than one large skill.
- Use the `flow-*` prefix for all skills.
- Keep `Flow` as a plain workflow name, not an acronym.
- Include six v1 skills: `flow-scaffold`, `flow-grill`, `flow-spec`, `flow-design`, `flow-wireframe`, and `flow-handoff`.
- Exclude `flow-track` from v1 while keeping task metadata compatible with future tracking.
- Use `docs/specs/[feature]/[revision]/README.md` as the canonical source of truth in the suite definition.
- For this local PRD/task output, use the user-requested path `specs/flow-skill-suite/`.
- Use simple numbered immutable revisions such as `001-initial-checkout`.
- Use human-readable feature statuses: `Draft`, `In Review`, `Approved`, `In Build`, `Shipped`, and `Superseded`.
- Use lightweight task statuses: `Backlog`, `Ready`, `In Progress`, `Blocked`, `In Review`, `Done`, and `Skipped`.
- Keep task files inside the relevant spec revision, with optional external tracker links.
- `flow-scaffold` creates or updates `AGENTS.md` and docs index folders, while preserving unrelated instructions.
- `flow-grill` asks one question at a time, gives recommended answers, explains why each decision matters, and explores local context when possible.
- `flow-spec` creates a standard spec structure with `README.md`, `overview.md`, `scope.md`, `requirements.md`, `decisions.md`, `risks.md`, and `tasks/README.md`.
- `flow-design` creates a smaller standard functional design structure with `README.md`, `experience.md`, `screens.md`, `rules.md`, and `open-questions.md`.
- `flow-wireframe` creates a static HTML/CSS preview package with `README.md`, `index.html`, screen files, assets, and shared styles.
- `flow-handoff` creates a concise `handoff.md` that connects spec, design, wireframes, build order, risks, and external links.
- Flow skills create files by default inside a repo, but must not overwrite existing revisions unless explicitly asked.

## Testing Decisions

- Test the skills through generated artifacts rather than internal implementation details.
- The highest-value seam is the full skill invocation: given a product request or existing Flow document, the skill should create the expected files with the expected links and human-readable content.
- `flow-scaffold` should be tested against empty repos and repos with an existing `AGENTS.md`.
- `flow-spec` should be tested by creating a new revision, then rerunning against the same feature to ensure overwrite protection or next-revision behavior.
- `flow-design` should be tested from an existing spec revision and checked for correct back-links and scoped functional design files.
- `flow-wireframe` should be tested by opening the generated `index.html` and verifying the preview hub links to screen files and shared styles.
- `flow-handoff` should be tested from an approved spec/design and checked for concise implementation guidance plus task links.
- Generated documents should be reviewed for plain language, clear ownership/status fields, and absence of unnecessary machine-oriented structure.
- Because this workspace is currently not a Git repository and has no app code, there are no existing code test seams or prior automated tests to reuse yet.

## Out of Scope

- Publishing issues to GitHub, Jira, Linear, or another external issue tracker.
- Creating `flow-track` in v1.
- Building a machine-readable spec language.
- Building a full design system.
- Building a full project-management workflow.
- Enforcing statuses through tooling.
- Creating framework-native prototypes by default.
- Replacing existing product, design, or engineering issue trackers.

## Further Notes

The current suite definition lives at `docs/flow-overview.md`.

The local PRD and task breakdown requested by the user live under `specs/flow-skill-suite/`.

The next implementation step is to create the actual installable skills and templates, then test them on a sample feature.
