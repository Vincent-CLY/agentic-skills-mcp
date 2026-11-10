#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import readline from 'node:readline';

const GITHUB_REPO = process.env.AGENT_OS_REPO || 'Vincent-CLY/agentic-skills-mcp';
const GITHUB_BRANCH = process.env.AGENT_OS_BRANCH || 'main';
const RAW_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const TARGET_DIR = process.env.INIT_CWD || process.cwd();

// ANSI Color & Styling Tokens (Clack Aesthetic)
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  gray: '\x1b[90m',
  magenta: '\x1b[35m',
};

const sym = {
  bar: `${c.gray}│${c.reset}`,
  barEnd: `${c.gray}└${c.reset}`,
  step: `${c.cyan}◇${c.reset}`,
  success: `${c.green}✔${c.reset}`,
  bulletOn: `${c.green}●${c.reset}`,
  bulletOff: `${c.gray}○${c.reset}`,
  radioOn: `${c.cyan}◉${c.reset}`,
  radioOff: `${c.gray}◯${c.reset}`,
};

// Interactive Terminal Prompter Engine (Arrows, Space, Enter)
async function runSelect({ title, items, multi = false }) {
  return new Promise((resolve) => {
    let cursor = 0;
    const selected = new Set(multi ? items.map((it, idx) => (it.checked ? idx : -1)).filter((i) => i >= 0) : []);

    const input = process.stdin.isTTY ? process.stdin : fs.createReadStream('/dev/tty');
    const output = process.stdout;
    readline.emitKeypressEvents(input);
    if (input.isTTY) input.setRawMode(true);

    const render = (first = false) => {
      if (!first) {
        output.write(`\x1b[${items.length + 1}A`); // Move cursor up
      }
      output.write(`\r\x1b[K${sym.step}  ${c.bold}${title}${c.reset}\n`);
      items.forEach((item, idx) => {
        const isHover = idx === cursor;
        const icon = multi
          ? selected.has(idx) ? sym.bulletOn : sym.bulletOff
          : idx === cursor ? sym.radioOn : sym.radioOff;
        const prefix = isHover ? `${c.cyan}❯${c.reset}` : ' ';
        const text = isHover ? `${c.cyan}${item.label}${c.reset}` : `${item.label}`;
        const hint = item.hint ? ` ${c.gray}(${item.hint})${c.reset}` : '';
        output.write(`\r\x1b[K${sym.bar}  ${prefix} ${icon} ${text}${hint}\n`);
      });
    };

    render(true);

    const onKey = (_, key) => {
      if (!key) return;
      if (key.ctrl && key.name === 'c') {
        output.write(`\n\r${sym.barEnd}  ${c.yellow}Setup cancelled.${c.reset}\n`);
        process.exit(0);
      }
      if (key.name === 'up') {
        cursor = (cursor - 1 + items.length) % items.length;
        render();
      } else if (key.name === 'down') {
        cursor = (cursor + 1) % items.length;
        render();
      } else if (key.name === 'space' && multi) {
        if (selected.has(cursor)) selected.delete(cursor);
        else selected.add(cursor);
        render();
      } else if (key.name === 'return') {
        input.removeListener('keypress', onKey);
        if (input.isTTY) input.setRawMode(false);
        // Replace question block with clean completed checkmark
        output.write(`\x1b[${items.length + 1}A\r\x1b[K${sym.success}  ${title}\n`);
        for (let i = 0; i < items.length; i++) output.write(`\r\x1b[K`);
        output.write(`\x1b[${items.length}A`); // Reset to after line
        if (multi) resolve(Array.from(selected).map((idx) => items[idx].value));
        else resolve(items[cursor].value);
      }
    };

    input.on('keypress', onKey);
  });
}

function fetchFile(filename) {
  const localPath = path.join(path.dirname(new URL(import.meta.url).pathname), filename);
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf8');
  }
  return execSync(`curl -fsSL ${RAW_URL}/${filename}`).toString();
}

function addGitExclude(fileOrFolder) {
  const gitInfoDir = path.join(TARGET_DIR, '.git', 'info');
  if (fs.existsSync(gitInfoDir)) {
    const excludePath = path.join(gitInfoDir, 'exclude');
    const content = fs.existsSync(excludePath) ? fs.readFileSync(excludePath, 'utf8') : '';
    if (!content.includes(fileOrFolder)) {
      fs.appendFileSync(excludePath, `\n${fileOrFolder}`);
    }
  }
}

async function main() {
  console.log(`\n${c.cyan}┌  Agent-OS Setup${c.reset} ${c.dim}(Ponytail x ADHD x Modern UI)${c.reset}`);
  console.log(`${sym.bar}  Target: ${c.dim}${TARGET_DIR}${c.reset}\n${sym.bar}`);

  const scope = await runSelect({
    title: 'Where do you want to install the agent rules?',
    items: [
      { label: 'Current Project only', hint: 'Isolated, preserves native AGENTS.md', value: 'project' },
      { label: 'Global system directory only', hint: 'Applies to all new windows', value: 'global' },
      { label: 'Both Project and Global', hint: 'Recommended setup', value: 'both' },
    ],
  });

  const agents = await runSelect({
    title: 'Which AI agents are you using? (Space to toggle, Enter to confirm)',
    multi: true,
    items: [
      { label: 'VS Code - Cline', hint: '.clinerules/', value: 'cline', checked: true },
      { label: 'VS Code - GitHub Copilot', hint: '.github/instructions/', value: 'copilot', checked: true },
      { label: 'Cursor', hint: '.cursor/rules/', value: 'cursor', checked: false },
      { label: 'Claude Code', hint: '.claude/rules/', value: 'claude', checked: false },
      { label: 'OpenAI Codex / Hermes', hint: '.agents/', value: 'codex', checked: false },
    ],
  });

  const tooling = await runSelect({
    title: 'Skill Packs & Automation Tooling Level:',
    items: [
      { label: 'Complete Setup', hint: 'Skills Packs + Impeccable + Playwright + Graphify + Scrapling', value: 'full' },
      { label: 'Core Skills Only', hint: 'Matt Pocock + Superpowers + Emil Kowalski + Impeccable', value: 'core' },
      { label: 'Minimal / On-Demand', hint: 'No pre-install; run via npx -y / uvx when needed', value: 'minimal' },
    ],
  });

  console.log(`${sym.bar}`);
  console.log(`${sym.bar}  ${c.dim}Fetching and syncing rule files...${c.reset}`);

  const coreOs = fetchFile('00-core-os.md');
  const uiMaster = fetchFile('01-ui-ux-master.md');

  const writeTarget = (baseDir, agentList) => {
    agentList.forEach((ag) => {
      if (ag === 'cline') {
        const dir = path.join(baseDir, '.clinerules');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, '00-core-os.md'), coreOs);
        fs.writeFileSync(path.join(dir, '01-ui-ux-master.md'), uiMaster);
        addGitExclude('.clinerules/');
      } else if (ag === 'copilot') {
        const dir = path.join(baseDir, '.github', 'instructions');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, '00-core-os.instructions.md'), coreOs);
        fs.writeFileSync(path.join(dir, '01-ui-ux-master.instructions.md'), uiMaster);
        addGitExclude('.github/instructions/00-core-os.instructions.md');
        addGitExclude('.github/instructions/01-ui-ux-master.instructions.md');
      } else if (ag === 'cursor') {
        const dir = path.join(baseDir, '.cursor', 'rules');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, '00-core-os.mdc'), coreOs);
        fs.writeFileSync(path.join(dir, '01-ui-ux-master.mdc'), uiMaster);
        addGitExclude('.cursor/rules/');
      } else if (ag === 'claude') {
        const dir = path.join(baseDir, '.claude', 'rules');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, '00-core-os.md'), coreOs);
        fs.writeFileSync(path.join(dir, '01-ui-ux-master.md'), uiMaster);
        addGitExclude('.claude/rules/');
      } else if (ag === 'codex') {
        const dir = path.join(baseDir, '.agents');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'AGENTS.md'), coreOs);
        addGitExclude('.agents/');
      }
    });
    addGitExclude('.agent-context.md');
  };

  if (scope === 'project' || scope === 'both') {
    writeTarget(TARGET_DIR, agents);
  }
  if (scope === 'global' || scope === 'both') {
    const home = process.env.HOME || process.env.USERPROFILE;
    if (agents.includes('cline')) {
      const dir = path.join(home, 'Documents', 'Cline', 'Rules');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, '00-core-os.md'), coreOs);
      fs.writeFileSync(path.join(dir, '01-ui-ux-master.md'), uiMaster);
    }
    if (agents.includes('claude')) {
      const dir = path.join(home, '.claude', 'rules');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(home, '.claude', 'CLAUDE.md'), coreOs);
      fs.writeFileSync(path.join(dir, '00-core-os.md'), coreOs);
      fs.writeFileSync(path.join(dir, '01-ui-ux-master.md'), uiMaster);
    }
  }

  console.log(`${sym.bar}  ${sym.success} Rules written cleanly without touching native AGENTS.md.`);

  // Tooling Execution
  if (tooling === 'full' || tooling === 'core') {
    console.log(`${sym.bar}  ${sym.step} Installing skills packs & Impeccable...`);
    try {
      execSync('npx -y skills add mattpocock/skills obra/superpowers emilkowalski/skills -g', { stdio: 'ignore' });
      execSync('npm install -g impeccable', { stdio: 'ignore' });
    } catch {}
  }

  if (tooling === 'full') {
    console.log(`${sym.bar}  ${sym.step} Installing Playwright & Graphify...`);
    try {
      execSync('npx -y playwright install chromium', { stdio: 'ignore' });
      execSync('pip install -U graphifyy scrapling', { stdio: 'ignore' });
      if (scope !== 'global') {
        execSync(`graphify "${TARGET_DIR}"`, { stdio: 'ignore' });
        addGitExclude('graphify-out/');
      }
    } catch {}
  }

  console.log(`${sym.bar}`);
  console.log(`${c.green}└  Installation complete! Everything is armed and ready.${c.reset}\n`);
}

main().catch(console.error);
