# Flow Skills

Flow Skills is a lightweight product-development skill suite for turning ideas into clear specs, functional designs, wireframes, and implementation handoffs.

Flow is built for PMs, designers, developers, clients, stakeholders, and agents working together in the same repository. The documents are written for people first, not machines.

## What Is Included

```text
flow-scaffold   Prepare a repo for Flow product docs.
flow-context    Scan and verify brownfield project context.
flow-check      Review Flow artifacts for context drift.
flow-track      Summarize Flow task status and blockers.
flow-ask        Answer project questions with cited local context.
flow-grill      Clarify a product idea before writing a spec.
flow-spec       Create readable product specs and task files.
flow-design     Create functional design docs.
flow-wireframe  Create static HTML/CSS wireframe previews.
flow-handoff    Create concise implementation handoffs.
```

## Repository Layout

```text
skills/                       Installable Flow skills
specs/flow-skill-suite/        PRD and task breakdown for this suite
examples/                      Validation fixtures for dogfooding
docs/flow-overview.md          Suite design notes
docs/roadmap.md                Future improvements and roadmap
AGENTS.md                      Agent guidance for this repo
bin/flow-skills.js             Installer CLI
```

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

```text
Use flow-scaffold to set up this repo for Flow.
Use flow-context to scan this brownfield project and draft Flow context.
Use flow-check to review this Flow spec against confirmed context.
Use flow-track to summarize task status and blockers.
Use flow-ask to answer where invoice data access lives.
Use flow-grill to clarify this feature idea.
Use flow-spec to create a PRD for saved payment methods.
Use flow-design to create functional design docs for this feature.
Use flow-wireframe to create static wireframes.
Use flow-handoff to prepare this approved spec for implementation.
```

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

V1 validation on a sample feature is tracked in:

```text
specs/flow-skill-suite/tasks/008-validate-flow-suite.md
```

V2 context intelligence is tracked in:

```text
specs/flow-v2-context-intelligence/
```

V3 tracking, readiness, and ask is drafted in:

```text
specs/flow-v3-tracking-readiness-ask/
```

## Roadmap

See [docs/roadmap.md](docs/roadmap.md) for the fuller roadmap.

Current direction:

- Dogfood `flow-track`, readiness checks, and `flow-ask` against more brownfield fixtures.
- Keep `flow-ask` source-cited and local-first.
- Keep vector/RAG support opt-in and outside the core Flow workflow.

## Validate

Check bundled skill metadata and required sections:

```sh
npm run validate
```

Print the installed package version:

```sh
node bin/flow-skills.js version
```
