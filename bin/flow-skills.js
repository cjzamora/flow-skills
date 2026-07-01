#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, "skills");

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
  flow-skills install --target <codex|claude|opencode> [--force] [--dry-run] [--dest <path>]
  flow-skills list

Examples:
  npx github:cjzamora/flow-skill install --target codex
  npx github:cjzamora/flow-skill install --target claude
  npx github:cjzamora/flow-skill install --target opencode

Options:
  --target   Agent target to install into.
  --dest     Override the target skills directory.
  --force    Replace existing Flow skill folders.
  --dry-run  Print what would happen without writing files.
  --help     Show this help.
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

  const destRoot = path.resolve(args.dest || DEFAULT_TARGETS[target]());
  const skillNames = listSkillNames();

  if (skillNames.length === 0) {
    throw new Error(`No Flow skills found in ${SKILLS_DIR}`);
  }

  console.log(`Installing Flow skills for ${target}`);
  console.log(`Destination: ${destRoot}`);

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
    else usage(command ? 1 : 0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
