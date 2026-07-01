#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, "skills");
const PACKAGE_JSON = path.join(ROOT, "package.json");

const DEFAULT_TARGETS = {
  codex: () => path.join(process.env.CODEX_HOME || path.join(os.homedir(), ".codex"), "skills"),
  claude: () => path.join(process.env.CLAUDE_HOME || path.join(os.homedir(), ".claude"), "skills"),
  opencode: () =>
    path.join(
      process.env.OPENCODE_HOME || path.join(os.homedir(), ".config", "opencode"),
      "skills",
    ),
};

function usage(exitCode = 0) {
  const stream = exitCode === 0 ? process.stdout : process.stderr;
  stream.write(`Flow Skills

Usage:
  flow-skills install --target <codex|claude|opencode> [--force] [--dry-run] [--disabled] [--dest <path>]
  flow-skills list
  flow-skills validate
  flow-skills version

Examples:
  npx github:cjzamora/flow-skills install --target codex
  npx github:cjzamora/flow-skills install --target claude
  npx github:cjzamora/flow-skills install --target opencode
  npx github:cjzamora/flow-skills install --target codex --disabled

Options:
  --target    Agent target to install into.
  --dest      Override the target skills directory.
  --force     Replace existing Flow skill folders.
  --dry-run   Print what would happen without writing files.
  --disabled  Install under .disabled/flow-skills instead of active skills.
  --help      Show this help.
`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--force") args.force = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--disabled") args.disabled = true;
    else if (arg === "--target" || arg === "--dest") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${arg} requires a value`);
      }
      args[arg.slice(2)] = value;
      i += 1;
    } else {
      args._.push(arg);
    }
  }
  return args;
}

function listSkillNames() {
  if (!fs.existsSync(SKILLS_DIR)) {
    throw new Error(`Skills directory not found: ${SKILLS_DIR}`);
  }
  return fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => name.startsWith("flow-"))
    .sort();
}

function readPackage() {
  return JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf8"));
}

function parseFrontmatter(content, file) {
  if (!content.startsWith("---\n")) {
    throw new Error(`${file} is missing frontmatter`);
  }

  const end = content.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error(`${file} has unterminated frontmatter`);
  }

  const raw = content.slice(4, end).trim();
  const data = {};
  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) {
      data[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }

  return data;
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function removeDirectory(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

function install(args) {
  const target = args.target;
  if (!target || !DEFAULT_TARGETS[target]) {
    throw new Error("install requires --target codex, --target claude, or --target opencode");
  }

  const activeRoot = path.resolve(args.dest || DEFAULT_TARGETS[target]());
  const destRoot = args.disabled
    ? path.join(activeRoot, ".disabled", "flow-skills")
    : activeRoot;
  const skillNames = listSkillNames();

  if (skillNames.length === 0) {
    throw new Error(`No Flow skills found in ${SKILLS_DIR}`);
  }

  console.log(`Installing Flow skills for ${target}`);
  console.log(`Destination: ${destRoot}`);
  if (args.disabled) {
    console.log("Mode: disabled (skills will not be active until moved into the active skills directory)");
  }

  for (const skillName of skillNames) {
    const src = path.join(SKILLS_DIR, skillName);
    const dest = path.join(destRoot, skillName);
    const exists = fs.existsSync(dest);

    if (exists && !args.force) {
      console.log(`skip   ${skillName} already exists (use --force to replace)`);
      continue;
    }

    if (args.dryRun) {
      console.log(`${exists ? "replace" : "install"} ${skillName}`);
      continue;
    }

    if (exists) removeDirectory(dest);
    copyDirectory(src, dest);
    console.log(`${exists ? "replaced" : "installed"} ${skillName}`);
  }

  if (args.dryRun) {
    console.log("Dry run complete. No files were changed.");
  } else {
    console.log("Done.");
  }
}

function validate() {
  const skillNames = listSkillNames();
  const errors = [];
  const warnings = [];

  for (const skillName of skillNames) {
    const skillDir = path.join(SKILLS_DIR, skillName);
    const skillFile = path.join(skillDir, "SKILL.md");
    const agentFile = path.join(skillDir, "agents", "openai.yaml");

    if (!fs.existsSync(skillFile)) {
      errors.push(`${skillName}: missing SKILL.md`);
      continue;
    }

    const content = fs.readFileSync(skillFile, "utf8");
    let metadata;
    try {
      metadata = parseFrontmatter(content, skillFile);
    } catch (error) {
      errors.push(`${skillName}: ${error.message}`);
      continue;
    }

    if (metadata.name !== skillName) {
      errors.push(`${skillName}: frontmatter name must be "${skillName}"`);
    }
    if (!metadata.description) {
      errors.push(`${skillName}: missing description`);
    }
    if (!content.includes(`# ${skillName.replace("flow-", "Flow ").replace(/\b\w/g, (char) => char.toUpperCase())}`)) {
      warnings.push(`${skillName}: heading does not match standard display form`);
    }
    if (!content.includes("Recommended Next Steps")) {
      errors.push(`${skillName}: missing Recommended Next Steps section`);
    }
    if (!metadata.description.includes("Use only when the user explicitly")) {
      errors.push(`${skillName}: description must use manual-only trigger wording`);
    }
    if (!fs.existsSync(agentFile)) {
      errors.push(`${skillName}: missing agents/openai.yaml`);
    } else {
      const agent = fs.readFileSync(agentFile, "utf8");
      if (!agent.includes("display_name:")) {
        errors.push(`${skillName}: agents/openai.yaml missing display_name`);
      }
      if (!agent.includes("short_description:")) {
        errors.push(`${skillName}: agents/openai.yaml missing short_description`);
      }
      if (!agent.includes("default_prompt:")) {
        errors.push(`${skillName}: agents/openai.yaml missing default_prompt`);
      }
      if (!agent.includes("Manual only:")) {
        errors.push(`${skillName}: agents/openai.yaml short_description must say Manual only`);
      }
    }
  }

  for (const warning of warnings) {
    console.log(`warning ${warning}`);
  }

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`error   ${error}`);
    }
    throw new Error(`Validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}`);
  }

  console.log(`Validated ${skillNames.length} Flow skills.`);
}

function version() {
  const pkg = readPackage();
  console.log(`${pkg.name} ${pkg.version}`);
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage(1);
  }

  if (args.help) usage(0);

  const command = args._[0];
  try {
    if (command === "install") install(args);
    else if (command === "list") listSkillNames().forEach((name) => console.log(name));
    else if (command === "validate") validate();
    else if (command === "version") version();
    else usage(command ? 1 : 0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
