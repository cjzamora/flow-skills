# Flow Skills

Flow Skills is a lightweight product-development skill suite for turning ideas into clear specs, functional designs, wireframes, and implementation handoffs.

Flow is built for PMs, designers, developers, clients, stakeholders, and agents working together in the same repository. The documents are written for people first, not machines.

## What Is Included

| Skill | Purpose |
| --- | --- |
| `flow-scaffold` | Prepare a repo for Flow product docs. |
| `flow-grill` | Clarify a product idea before writing a spec. |
| `flow-spec` | Create readable product specs and task files. |
| `flow-design` | Create functional design docs. |
| `flow-wireframe` | Create static HTML/CSS wireframe previews. |
| `flow-handoff` | Create concise implementation handoffs. |
| `flow-context` | Scan and verify brownfield project context. |
| `flow-check` | Review Flow artifacts for context drift and readiness. |
| `flow-track` | Summarize Flow task status and blockers. |
| `flow-ask` | Answer project questions with cited local context. |
| `flow-export` | Generate issue-ready Markdown from Flow tasks. |

## Repository Layout

| Path | Purpose |
| --- | --- |
| `skills/` | Installable Flow skills. |
| `specs/flow-skill-suite/` | PRD and task breakdown for the original suite. |
| `specs/flow-v2-context-intelligence/` | Context intelligence PRD, tasks, and validation notes. |
| `specs/flow-v3-tracking-readiness-ask/` | Tracking, readiness, and ask PRD, tasks, and validation notes. |
| `specs/flow-v4-issue-export/` | Issue export PRD. |
| `examples/` | Validation fixtures for dogfooding. |
| `docs/flow-overview.md` | Suite design notes. |
| `docs/roadmap.md` | Future improvements and roadmap. |
| `AGENTS.md` | Agent guidance for this repo. |
| `bin/flow-skills.js` | Installer and validation CLI. |

## Install

From GitHub:

```sh
npx github:cjzamora/flow-skills install --target codex
npx github:cjzamora/flow-skills install --target claude
npx github:cjzamora/flow-skills install --target opencode
```

From a local clone:

```sh
npm run install:codex
npm run install:claude
npm run install:opencode
```

Install without activating the skills:

```sh
npm run install:codex:disabled
```

See [INSTALLATION.md](INSTALLATION.md) for paths, options, and examples.

## Usage

After installation, ask your agent to use one of the Flow skills:

| Request | Use when |
| --- | --- |
| `Use flow-scaffold to set up this repo for Flow.` | Starting Flow in a repo. |
| `Use flow-context to scan this brownfield project and draft Flow context.` | Building project context from existing code/docs. |
| `Use flow-check to review this Flow spec against confirmed context.` | Checking drift, readiness, or consistency. |
| `Use flow-track to summarize task status and blockers.` | Reviewing delivery health from task files. |
| `Use flow-ask to answer where invoice data access lives.` | Asking source-cited project questions. |
| `Use flow-export to generate issue-ready Markdown from these Flow tasks.` | Creating copy-ready issue Markdown. |
| `Use flow-grill to clarify this feature idea.` | Shaping an idea before a PRD. |
| `Use flow-spec to create a PRD for saved payment methods.` | Writing a product spec and task files. |
| `Use flow-design to create functional design docs for this feature.` | Defining UX behavior, screens, rules, and states. |
| `Use flow-wireframe to create static wireframes.` | Creating static HTML/CSS preview artifacts. |
| `Use flow-handoff to prepare this approved spec for implementation.` | Preparing concise implementation guidance. |

## Flow Document Convention

New scaffolded projects default to:

```text
.flow/
```

Local PRDs and task breakdowns use the configured Flow root:

```text
[flow-root]/specs/[feature]/prd.md
[flow-root]/specs/[feature]/tasks/
```

Existing projects can keep using `specs/` or another documented Flow root. The skills avoid overwriting existing specs or task files unless the user explicitly asks.

## Status

The v1, v2, and v3 skills are implemented under `skills/*`.

| Version | Status | Location |
| --- | --- | --- |
| V1 core workflow | Implemented | `specs/flow-skill-suite/` |
| V1 validation | Done | `specs/flow-skill-suite/tasks/008-validate-flow-suite.md` |
| V2 context intelligence | Implemented | `specs/flow-v2-context-intelligence/` |
| V3 tracking, readiness, and ask | Implemented | `specs/flow-v3-tracking-readiness-ask/` |
| V4 issue export | Implemented | `specs/flow-v4-issue-export/` |

## Roadmap

See [docs/roadmap.md](docs/roadmap.md) for the fuller roadmap.

Current direction:

| Direction | Boundary |
| --- | --- |
| Dogfood `flow-track`, readiness checks, and `flow-ask` against more brownfield fixtures. | Keep validation fixture-based and reviewable. |
| Use `flow-export` to generate issue-ready Markdown. | Keep external publishing opt-in. |
| Keep `flow-ask` source-cited and local-first. | Do not treat uncited answers as canonical. |
| Keep vector/RAG support opt-in. | Keep it outside the core Flow workflow. |

## Validate

Check bundled skill metadata and required sections:

```sh
npm run validate
```

Print the installed package version:

```sh
node bin/flow-skills.js version
```
