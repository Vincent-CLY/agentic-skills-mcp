#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
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
  dim: '\x1b[2m',
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

async function runSelect({ title, items, multi = false }) {
  return new Promise((resolve) => {
    let cursor = 0;
    let lastRenderedRows = 0;
    const selected = new Set(multi ? items.map((it, idx) => (it.checked ? idx : -1)).filter((i) => i >= 0) : []);

    const input = process.stdin.isTTY ? process.stdin : fs.createReadStream('/dev/tty');
    const output = process.stdout;
    readline.emitKeypressEvents(input);
    if (input.isTTY) input.setRawMode(true);

    output.write('\x1b[?25l');

    const cleanup = () => {
      output.write('\x1b[?25h');
      if (input.isTTY) input.setRawMode(false);
      if (typeof input.pause === 'function') input.pause();
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
      if (!key) return;
      if (key.ctrl && key.name === 'c') {
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
      } else if (key.name === 'return') {
        input.removeListener('keypress', onKey);
        cleanup();
        if (lastRenderedRows > 0) {
          output.write(`\x1b[${lastRenderedRows}A\r\x1b[0J`);
        }
        output.write(`${sym.success}  ${c.bold}${c.sand}${title}${c.reset}\n`);
        if (multi) resolve(Array.from(selected).map((idx) => items[idx].value));
        else resolve(items[cursor].value);
      }
    };

    input.on('keypress', onKey);
  });
}

function fetchRemoteOrLocal(filename, preferRemote = false) {
  const localPath = path.join(path.dirname(new URL(import.meta.url).pathname), filename);
  if (!preferRemote && fs.existsSync(localPath)) {
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

  console.log(`\n${c.cyanDeep}┌  Agent-OS Setup & Updater${c.reset} ${c.teal}(Ponytail x ADHD x Ocean-Amber Palette)${c.reset}`);
  console.log(`${sym.bar}  Target Directory: ${c.sand}${TARGET_DIR}${c.reset}`);

  // Fetch latest rules from GitHub (or bundle) first so we can compare hashes
  const coreOs = fetchRemoteOrLocal('00-core-os.md', forceUpdate);
  const uiMaster = fetchRemoteOrLocal('01-ui-ux-master.md', forceUpdate);
  const { detected, outdated } = detectInstalledAgents(TARGET_DIR, sha256(coreOs), sha256(uiMaster));

  if (detected.length > 0) {
    const statusBadge = outdated
      ? `${c.amber}⚡ Update available from GitHub!${c.reset}`
      : `${c.mint}✔ Rules match latest version${c.reset}`;
    console.log(`${sym.bar}  Detected Existing: ${c.mint}${detected.join(', ')}${c.reset} — ${statusBadge}`);
  }
  console.log(`${sym.bar}`);

  let scope = 'project';
  let agents = detected.length > 0 ? detected : ['cline', 'copilot'];
  let tooling = 'minimal';

  if (forceUpdate && detected.length > 0) {
    console.log(`${sym.bar}  ${c.amber}⚡ Running instant --update for [${detected.join(', ')}]...${c.reset}`);
  } else if (!autoMode) {
    if (detected.length > 0) {
      const action = await runSelect({
        title: 'Existing Agent-OS installation found. What would you like to do?',
        items: [
          { label: '⚡ Quick Update / Replace All Existing Rules', hint: `Updates [${detected.join(', ')}] in 1 click`, value: 'quick-update' },
          { label: '🔧 Reconfigure Agents & Tooling', hint: 'Add/remove AI agents or install CLI packages', value: 'reconfigure' },
        ],
      });

      if (action === 'quick-update') {
        tooling = 'minimal';
      } else {
        scope = await runSelect({
          title: 'Where do you want to install the agent rules?',
          items: [
            { label: 'Current Project only', hint: 'Isolated; preserves native AGENTS.md', value: 'project' },
            { label: 'Global system directory only', hint: 'Applies to all new windows', value: 'global' },
            { label: 'Both Project and Global', hint: 'Project + Global', value: 'both' },
          ],
        });
        agents = await runSelect({
          title: 'Which AI agents are you using? (Space to toggle, Enter to confirm)',
          multi: true,
          items: [
            { label: 'VS Code - Cline', hint: '.clinerules/', value: 'cline', checked: detected.includes('cline') },
            { label: 'VS Code - GitHub Copilot', hint: '.github/instructions/', value: 'copilot', checked: detected.includes('copilot') },
            { label: 'Cursor', hint: '.cursor/rules/', value: 'cursor', checked: detected.includes('cursor') },
            { label: 'Claude Code', hint: '.claude/rules/', value: 'claude', checked: detected.includes('claude') },
            { label: 'OpenAI Codex / Hermes', hint: '.agents/', value: 'codex', checked: detected.includes('codex') },
          ],
        });
        tooling = await runSelect({
          title: 'Skill Packs & Automation Tooling Level:',
          items: [
            { label: 'Complete Setup / Update All', hint: 'Skills + Unslop + Impeccable + Playwright + Graphify', value: 'full' },
            { label: 'Core Skills Only', hint: 'Matt Pocock + Superpowers + Emil Kowalski + Unslop', value: 'core' },
            { label: 'Rules Only (Skip CLI re-install)', hint: 'Fastest; uses npx/uvx on demand', value: 'minimal' },
          ],
        });
      }
    } else {
      scope = await runSelect({
        title: 'Where do you want to install the agent rules?',
        items: [
          { label: 'Current Project only', hint: 'Isolated; preserves native AGENTS.md', value: 'project' },
          { label: 'Global system directory only', hint: 'Applies to all new windows', value: 'global' },
          { label: 'Both Project and Global', hint: 'Project + Global', value: 'both' },
        ],
      });
      agents = await runSelect({
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
      tooling = await runSelect({
        title: 'Skill Packs & Automation Tooling Level:',
        items: [
          { label: 'Complete Setup', hint: 'Skills + Unslop + Impeccable + Playwright + Graphify', value: 'full' },
          { label: 'Core Skills Only', hint: 'Matt Pocock + Superpowers + Emil Kowalski + Unslop', value: 'core' },
          { label: 'Minimal / On-Demand', hint: 'Zero install; run on demand via npx/uvx', value: 'minimal' },
        ],
      });
    }
  }

  console.log(`${sym.bar}`);
  console.log(`${sym.bar}  ${c.teal}Writing latest rule files...${c.reset}`);

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

  console.log(`${sym.bar}  ${sym.success} Rules synced & replaced for [${agents.join(', ')}].`);

  if (tooling === 'full' || tooling === 'core') {
    console.log(`${sym.bar}  ${c.amber}◇${c.reset}  Installing skill packs (including Unslop, Anatomy & Impeccable)...`);
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
  console.log(`${c.mint}└  All done! Your agents are updated and ready.${c.reset}\n`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
