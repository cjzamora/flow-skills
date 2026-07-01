# Installation Guide

Flow Skills can be installed into Codex, Claude, or OpenCode-style skill folders with the bundled Node CLI.

## Install From GitHub

```sh
npx github:cjzamora/flow-skills install --target codex
npx github:cjzamora/flow-skills install --target claude
npx github:cjzamora/flow-skills install --target opencode
```

Examples using the requested style:

```sh
npx github:cjzamora/flow-skills install --target codex
npx github:cjzamora/flow-skills install --target claude
npx github:cjzamora/flow-skills install --target opencode
```

## Install From a Local Clone

```sh
npm run install:codex
npm run install:claude
npm run install:opencode
```

You can also run the CLI directly:

```sh
node bin/flow-skills.js install --target codex
node bin/flow-skills.js install --target claude
node bin/flow-skills.js install --target opencode
```

Install without activating the skills:

```sh
node bin/flow-skills.js install --target codex --disabled
```

## Default Install Paths

```text
codex     $CODEX_HOME/skills or ~/.codex/skills
claude    $CLAUDE_HOME/skills or ~/.claude/skills
opencode  $OPENCODE_HOME/skills or ~/.config/opencode/skills
```

## Options

Preview the install without writing files:

```sh
npx github:cjzamora/flow-skills install --target codex --dry-run
```

Replace existing Flow skill folders:

```sh
npx github:cjzamora/flow-skills install --target codex --force
```

Install to a custom skills directory:

```sh
npx github:cjzamora/flow-skills install --target codex --dest /path/to/skills
```

List bundled skills:

```sh
npx github:cjzamora/flow-skills list
```

Validate bundled skills:

```sh
npx github:cjzamora/flow-skills validate
```

Print the package version:

```sh
npx github:cjzamora/flow-skills version
```

Install under `.disabled/flow-skills` instead of the active skills directory:

```sh
npx github:cjzamora/flow-skills install --target codex --disabled
```

## What Gets Installed

The installer copies these folders:

```text
skills/flow-check
skills/flow-context
skills/flow-scaffold
skills/flow-grill
skills/flow-spec
skills/flow-design
skills/flow-wireframe
skills/flow-handoff
```

Existing skill folders are skipped by default. Use `--force` to replace them.

When `--disabled` is used, skills are copied under:

```text
[target skills directory]/.disabled/flow-skills/
```

This keeps the files available for inspection without making them active skills.

## Verify

After installation, confirm the target skills directory contains the Flow folders. Then ask the target agent to use one:

```text
Use flow-scaffold to set up this repo for Flow.
Use flow-context to scan this project and draft Flow context.
Use flow-check to review a Flow artifact against confirmed context.
```
