#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import tty from 'node:tty';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import readline from 'node:readline';

const GITHUB_REPO = process.env.AGENT_OS_REPO || 'Vincent-CLY/agentic-skills-mcp';
const GITHUB_BRANCH = process.env.AGENT_OS_BRANCH || 'main';
const RAW_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const TARGET_DIR = process.env.INIT_CWD || process.cwd();

// Palette 3: Deep Oceanic to Fiery Amber (Exact 24-bit Truecolor ANSI)
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyanDeep: '\x1b[38;2;0;95;115m',     // #005f73 - Structural vertical guide lines
  teal: '\x1b[38;2;10;147;150m',       // #0a9396 - Step icons & hints
  mint: '\x1b[38;2;148;210;189m',      // #94d2bd - Active hover text & success
  sand: '\x1b[38;2;233;216;166m',      // #e9d8a6 - Crisp champagne white for unselected text
  amber: '\x1b[38;2;238;155;0m',       // #ee9b00 - Question titles
  rust: '\x1b[38;2;202;103;2m',        // #ca6702 - Active pointer indicator ❯
  burnt: '\x1b[38;2;187;62;3m',        // #bb3e03 - Cancelled / warnings
  dimIcon: '\x1b[38;2;70;90;100m',     // Subdued slate for unselected radio/bullets
};

const sym = {
  bar: `${c.cyanDeep}│${c.reset}`,
  step: `${c.amber}◇${c.reset}`,
  success: `${c.mint}✔${c.reset}`,
  bulletOn: `${c.mint}●${c.reset}`,
  bulletOff: `${c.dimIcon}○${c.reset}`,
  radioOn: `${c.mint}◉${c.reset}`,
  radioOff: `${c.dimIcon}◯${c.reset}`,
};

const stripAnsi = (str) => str.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '');
const sha256 = (str) => crypto.createHash('sha256').update(str.trim()).digest('hex');

// Initialize TTY Input Stream ONCE globally to prevent skipped prompts
let sharedInput = process.stdin;
if (!process.stdin.isTTY) {
  try {
    const fd = fs.openSync('/dev/tty', 'r');
    sharedInput = new tty.ReadStream(fd);
  } catch {
    sharedInput = process.stdin;
  }
}
readline.emitKeypressEvents(sharedInput);

async function runSelect({ title, items, multi = false }) {
  return new Promise((resolve) => {
    let cursor = 0;
    let lastRenderedRows = 0;
    let ready = false;
    const selected = new Set(multi ? items.map((it, idx) => (it.checked ? idx : -1)).filter((i) => i >= 0) : []);

    const output = process.stdout;
    sharedInput.resume();
    if (typeof sharedInput.setRawMode === 'function') sharedInput.setRawMode(true);
    output.write('\x1b[?25l');

    // Debounce 80ms so previous Enter keystroke (\r\n) never skips the next menu
    setTimeout(() => {
      ready = true;
    }, 80);

    const cleanup = () => {
      output.write('\x1b[?25h');
      if (typeof sharedInput.setRawMode === 'function') sharedInput.setRawMode(false);
      sharedInput.pause();
    };

    const render = (first = false) => {
      const cols = output.columns || 80;
      if (!first && lastRenderedRows > 0) {
        output.write(`\x1b[${lastRenderedRows}A\r\x1b[0J`);
      }

      const lines = [];
      lines.push(`${sym.step}  ${c.bold}${c.amber}${title}${c.reset}`);

      items.forEach((item, idx) => {
        const isHover = idx === cursor;
        const icon = multi
          ? selected.has(idx) ? sym.bulletOn : sym.bulletOff
          : idx === cursor ? sym.radioOn : sym.radioOff;

        const prefix = isHover ? `${c.rust}❯${c.reset}` : ' ';
        const text = isHover ? `${c.mint}${c.bold}${item.label}${c.reset}` : `${c.sand}${item.label}${c.reset}`;
        const hint = item.hint ? ` ${c.teal}(${item.hint})${c.reset}` : '';
        lines.push(`${sym.bar}  ${prefix} ${icon} ${text}${hint}`);
      });

      let totalRows = 0;
      lines.forEach((l) => {
        const len = stripAnsi(l).length;
        totalRows += Math.max(1, Math.ceil(len / cols));
      });
      lastRenderedRows = totalRows;

      output.write(lines.map((l) => `\r\x1b[K${l}`).join('\n') + '\n');
    };

    render(true);

    const onKey = (_, key) => {
      if (!key || !ready) return;
      if (key.ctrl && key.name === 'c') {
        sharedInput.removeListener('keypress', onKey);
        cleanup();
        output.write(`\n\r${sym.bar}  ${c.burnt}Setup cancelled.${c.reset}\n\r`);
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
      } else if (key.name === 'return' || key.name === 'enter') {
        ready = false;
        sharedInput.removeListener('keypress', onKey);
        cleanup();
        if (lastRenderedRows > 0) {
          output.write(`\x1b[${lastRenderedRows}A\r\x1b[0J`);
        }
        output.write(`${sym.success}  ${c.bold}${c.sand}${title}${c.reset}\n`);
        if (multi) resolve(Array.from(selected).map((idx) => items[idx].value));
        else resolve(items[cursor].value);
      }
    };

    sharedInput.on('keypress', onKey);
  });
}

function fetchRemoteOrLocal(filename, forceRemote = false) {
  const localPath = path.join(path.dirname(new URL(import.meta.url).pathname), filename);
  if (!forceRemote && fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf8');
  }
  return execSync(`curl -fsSL "${RAW_URL}/${filename}?t=${Date.now()}"`).toString();
}

function detectInstalledAgents(baseDir, latestCoreHash, latestUiHash) {
  const checks = [
    { id: 'cline', core: path.join(baseDir, '.clinerules', '00-core-os.md'), ui: path.join(baseDir, '.clinerules', '01-ui-ux-master.md') },
    { id: 'copilot', core: path.join(baseDir, '.github', 'instructions', '00-core-os.instructions.md'), ui: path.join(baseDir, '.github', 'instructions', '01-ui-ux-master.instructions.md') },
    { id: 'cursor', core: path.join(baseDir, '.cursor', 'rules', '00-core-os.mdc'), ui: path.join(baseDir, '.cursor', 'rules', '01-ui-ux-master.mdc') },
    { id: 'claude', core: path.join(baseDir, '.claude', 'rules', '00-core-os.md'), ui: path.join(baseDir, '.claude', 'rules', '01-ui-ux-master.md') },
    { id: 'codex', core: path.join(baseDir, '.agents', 'AGENTS.md'), ui: null },
  ];

  const detected = [];
  let outdated = false;

  for (const ch of checks) {
    if (fs.existsSync(ch.core)) {
      detected.push(ch.id);
      if (sha256(fs.readFileSync(ch.core, 'utf8')) !== latestCoreHash) outdated = true;
      if (ch.ui && fs.existsSync(ch.ui) && sha256(fs.readFileSync(ch.ui, 'utf8')) !== latestUiHash) outdated = true;
    }
  }
  return { detected, outdated };
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
  const args = process.argv.slice(2);
  const forceUpdate = args.includes('--update') || args.includes('-u');
  const autoMode = args.includes('--auto');

  console.log(`\n${c.cyanDeep}┌  Agent-OS Installer${c.reset} ${c.teal}(Ponytail x ADHD x Manware)${c.reset}`);
  console.log(`${sym.bar}  Target Directory: ${c.sand}${TARGET_DIR}${c.reset}\n${sym.bar}`);

  let scope = 'project';
  let agents = ['cline', 'copilot'];
  let tooling = 'full';
  let forceRemoteFetch = forceUpdate;

  if (!autoMode && !forceUpdate) {
    // Main 3-Option Menu requested by user
    const mode = await runSelect({
      title: 'Select installation mode:',
      items: [
        { label: '1) Full Installation (Default)', hint: '1-click: Cline + Copilot rules + all skill packs & tools', value: 'full-install' },
        { label: '2) Custom / Trimmed Installation', hint: 'Choose scope, specific AI agents & lightweight options', value: 'custom' },
        { label: '3) Check & Apply Updates', hint: 'Fetch latest GitHub rules & replace existing files', value: 'update' },
      ],
    });

    if (mode === 'custom') {
      scope = await runSelect({
        title: 'Where do you want to install the agent rules?',
        items: [
          { label: 'Current Project only', hint: 'Isolated; preserves native AGENTS.md', value: 'project' },
          { label: 'Global system directory only', hint: 'Applies to all new windows', value: 'global' },
          { label: 'Both Project and Global', hint: 'Project + Global', value: 'both' },
        ],
      });

      const chosenAgents = await runSelect({
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
      if (chosenAgents.length > 0) agents = chosenAgents;

      tooling = await runSelect({
        title: 'Skill Packs & Automation Tooling Level:',
        items: [
          { label: 'Minimal / Rules Only (Trimmed)', hint: 'Zero pre-install; run on demand via npx/uvx', value: 'minimal' },
          { label: 'Core Skills Only', hint: 'Matt Pocock + Superpowers + Emil Kowalski + Unslop + Anatomy', value: 'core' },
          { label: 'Complete Setup', hint: 'All Skills + Impeccable + Playwright + Graphify', value: 'full' },
        ],
      });
    } else if (mode === 'update') {
      forceRemoteFetch = true;
      tooling = 'minimal';
    }
  }

  console.log(`${sym.bar}`);
  console.log(`${sym.bar}  ${c.teal}Fetching latest rule files...${c.reset}`);

  const coreOs = fetchRemoteOrLocal('00-core-os.md', forceRemoteFetch);
  const uiMaster = fetchRemoteOrLocal('01-ui-ux-master.md', forceRemoteFetch);

  if (forceRemoteFetch) {
    const { detected, outdated } = detectInstalledAgents(TARGET_DIR, sha256(coreOs), sha256(uiMaster));
    if (detected.length > 0) {
      agents = detected;
      const statusMsg = outdated
        ? `${c.amber}⚡ Newer version found on GitHub! Updating [${detected.join(', ')}]...${c.reset}`
        : `${c.mint}✔ Already on latest version. Refreshing [${detected.join(', ')}]...${c.reset}`;
      console.log(`${sym.bar}  ${statusMsg}`);
    } else {
      console.log(`${sym.bar}  ${c.amber}No existing rules found in project; installing default [cline, copilot]...${c.reset}`);
    }
  }

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
        const agentDir = path.join(baseDir, '.github', 'agents');
        fs.mkdirSync(dir, { recursive: true });
        fs.mkdirSync(agentDir, { recursive: true });
        fs.writeFileSync(path.join(dir, '00-core-os.instructions.md'), coreOs);
        fs.writeFileSync(path.join(dir, '01-ui-ux-master.instructions.md'), uiMaster);
        // Auto-create top-level Custom Agent so ask.agent.md never overrides Cantonese/ADHD rules
        const customAgent = `---\nname: "Agent-OS"\ndescription: "Cantonese ADHD x Ponytail x Manware Co-Builder"\n---\n<rules>\n1. ALWAYS reply in natural Hong Kong Cantonese (廣東話口語夾雜英文 tech terms) even if prompted in English.\n2. Line 1 MUST be: 📍 進度：Step X/Y | 🛠️ 技能：[Active Skills]\n3. Strictly follow .github/instructions/00-core-os.instructions.md and 01-ui-ux-master.instructions.md.\n</rules>\n`;
        fs.writeFileSync(path.join(agentDir, 'agent-os.agent.md'), customAgent);
        // Auto-fetch Manware's 12 slash prompts (/hint, /read, /learn, /debug, etc.)
        try {
          fs.mkdirSync(path.join(baseDir, '.github', 'prompts'), { recursive: true });
          execSync(`curl -fsSL https://github.com/i-am-manware/Manware-s-AI-Learning-Toolkit/archive/refs/heads/copilot.tar.gz | tar -xz --strip-components=2 -C "${path.join(baseDir, '.github')}" Manware-s-AI-Learning-Toolkit-copilot/.github/prompts Manware-s-AI-Learning-Toolkit-copilot/.github/skills`, { stdio: 'ignore' });
        } catch {}
        addGitExclude('.github/instructions/00-core-os.instructions.md');
        addGitExclude('.github/instructions/01-ui-ux-master.instructions.md');
        addGitExclude('.github/agents/');
        addGitExclude('.github/prompts/');
        addGitExclude('.github/skills/');
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

  console.log(`${sym.bar}  ${sym.success} Rules configured for [${agents.join(', ')}].`);

  if (tooling === 'full' || tooling === 'core') {
    console.log(`${sym.bar}  ${c.amber}◇${c.reset}  Installing skill packs (Matt Pocock, Superpowers, Emil, Unslop, Anatomy, Impeccable)...`);
    try {
      execSync('npx -y skills add mattpocock/skills obra/superpowers emilkowalski/skills heydamir/unslop wheresryan22/anatomy -g', { stdio: 'ignore' });
      execSync('npm install -g impeccable', { stdio: 'ignore' });
    } catch {}
  }

  if (tooling === 'full') {
    console.log(`${sym.bar}  ${c.amber}◇${c.reset}  Installing Playwright & Graphify...`);
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
  console.log(`${c.mint}└  All done! Your agents are armed and ready.${c.reset}\n`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
