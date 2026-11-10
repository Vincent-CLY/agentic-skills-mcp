# 🚀 Agentic Skills & Rules OS (`agentic-skills-mcp`)

A zero-bloat, context-triggered **Universal AI Agent Operating System** designed for **VS Code (Cline & GitHub Copilot)**, **GitHub Codespaces**, **Cursor**, **Claude Code**, **OpenAI Codex**, and **Hermes**.

Instead of stuffing everything into a single giant prompt or overwriting framework-native `AGENTS.md` files (such as Next.js App Router defaults), this repository uses **Polyglot Modular Rules** (`00-core-os.md` + `01-ui-ux-master.md`) and **On-Demand CLI Execution (`npx -y` / `uvx`)**.

---

## ⚡ 1. Quick Start & Installation (⏱️ < 1 Minute)

Run a single command inside **any project terminal** (e.g., a fresh Next.js repo in VS Code) to fetch the latest rules and configure your environment interactively:

### Option A: Run directly via `pnpm` or `npx` (No `git clone` required)
~~~bash
pnpm dlx github:YOUR_GITHUB_USERNAME/agentic-skills-mcp
# or using npx:
npx -y github:YOUR_GITHUB_USERNAME/agentic-skills-mcp
~~~

### Option B: Run via `curl` (Zero Node/Git prerequisite)
~~~bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/agentic-skills-mcp/main/install.sh | bash
~~~

### Option C: Non-Interactive Auto Mode (For GitHub Codespaces Dotfiles)
~~~bash
bash install.sh --auto
~~~

### What the Installer Does:
1. **Asks Where to Install**: Current Project only (default), Global machine directories, or Both.
2. **Asks Which AI Tools You Use**: Creates **only** the folders for the tools you select (e.g., `.clinerules/` for Cline and `.github/instructions/` for Copilot)—zero unused folders on your hard drive.
3. **Preserves Native `AGENTS.md`**: Uses additive rule folders so framework-native `AGENTS.md` files (like Next.js) remain 100% untouched.
4. **Keeps Git Clean**: Automatically appends injected rule paths to `.git/info/exclude` so your `git status` stays clean.

---

## 📂 2. Active Rule Files & Architecture

| File | Scope & Trigger | Core Responsibility | Why Separated? |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **Always Active** (`**/*`) | Controls communication style, ideation, decision council, coding guardrails, debugging, security review, AST navigation, and context compression. | Ensures foundational engineering discipline and communication clarity on every turn. |
| **`01-ui-ux-master.md`** | **Auto-Triggered on Frontend** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | Enforces anti-AI-slop design rules, typography/color token locks, Vercel interface guidelines, Emil Kowalski motion physics, and UI component references. | Saves context tokens during backend/API tasks and loads automatically only when touching UI files. |
| **`install.sh` & `package.json`** | **CLI Setup** | Fetches the two rule files from GitHub, sets up agent folders, and optionally installs CLI dependencies. | Enables 1-command setup across local machines and GitHub Codespaces. |

---

## 🧠 3. Installed Skills & Why They Were Selected

All skills in this OS **auto-trigger based on conversation context**—you do not need to memorize slash commands.

### A. Communication & Explanation Skills
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | Enforces a status banner on Line 1, immediate bottom-line verdict on Line 2, max 5 items per list (`即刻做` / `遲啲先`), time estimates (`⏱️`), tangent parking (`🅿️`), and a single `<2 min` closing action (`👉 下一步`). | Eliminates AI walls of text and keeps high-velocity engineering sessions focused. |
| **`ASD-STE100`** | Simplified Technical English rules adapted for Cantonese/English tech workflow: active voice only, one word = one meaning, strict 2-line error reporting (`Cause -> Fix`). | Replaces `Caveman` (which strips critical technical nuance) with crisp, unambiguous engineering precision. |
| **`Annotated-Illustration` & `3Blue1Brown (Manim)`** | Explains complex algorithms, math, and architectures via ASCII/Mermaid state-transformation diagrams, and offers runnable `Manim` Python or interactive `Three.js` HTML visualizations. | Turns abstract architecture or data-flow explanations into concrete visual models. |

### B. Ideation, Specification & Decision Skills
| Skill | Auto-Trigger Context | What It Does & Why Selected |
| :--- | :--- | :--- |
| **`ADHD 5-Frame Ideation`** | Sharing a rough idea or open design problem | Silently bans the top 3 textbook answers and generates 5 orthogonal solutions (`🏛️ Regulator`, `⚡ Speedrunner`, `🧬 Biology`, `🪙 $0 Budget`, `🧒 10yo Simplifier`) scored on `[Novelty, Viability, Fit]`, highlighting `★ Best Pick` and `⚠️ Trap`. |
| **`grill-me` & `to-spec`** (`matt-pocock/skills`) | Requirements have >1 unstated assumption | Stops the AI from writing speculative code; asks 1 high-leverage question at a time until constraints are locked into an atomic spec. |
| **`Decision Council`** (`get-more-perspectives`) | Comparing libraries, architectures, or tradeoffs | Convenes a 5-Advisor panel (`🔧 Operator`, `⚠️ Skeptic`, `🚀 Visionary`, `👤 Customer`, `💰 Finance`) to vote and narrow choices down to the top `N` survivor(s) instead of saying "it depends". |

### C. Engineering, Debugging & Security Skills
| Skill | Auto-Trigger Context | What It Does & Why Selected |
| :--- | :--- | :--- |
| **`Karpathy x Ponytail 7-Rung Ladder`** | Writing or refactoring any code | Walks 7 rungs before coding: *(1) Does it need to exist? -> (2) In repo? -> (3) Stdlib? -> (4) Existing dep? -> (5) Clean 1-liner? -> (6) Surgical diff -> (7) Never cut boundary safety*. Prevents over-engineering. |
| **`Superpowers`** (`obra/superpowers`) | Fixing bugs, flaky tests, or building features | Enforces 4-stage `systematic-debugging` (Reproduce -> Isolate -> Root Cause -> Fix) and `test-driven-development` (`RED -> GREEN -> REFACTOR`). |
| **`Security Review Team` & `/ponytail-review`** | Completing any code diff | Audits diffs in strict order: `1. Correct -> 2. Safe (OWASP/XSS/Auth/Secrets) -> 3. Holds Under Load -> 4. Tested -> 5. Fast (Core Web Vitals) -> 6. Lean`. |
| **`Skill-Creator`** (`Anthropic-skills`) | Repeating a multi-step workflow 2+ times | Proactively offers to codify recurring workflows into a reusable `SKILL.md`. |

### D. Web Design, Motion & Anti-AI-Slop Skills (`01-ui-ux-master.md`)
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`Impeccable`** | Deterministic 62-rule UI detector (`npx -y impeccable detect`) that blocks purple/indigo neon gradients, generic 3-card icon rows, and inconsistent spacing. | Acts as an automated lint gate against recognizable "AI slop" interfaces. |
| **`Hallmark` + `taste-skill` + `ui-ux-pro-max`** | Locks surface hierarchy, font pairings (`fontpair.co`, `chalk.ist`), color palettes (`pigment.shapefactory.co`), UX laws (`lawsofux.com`), and asymmetric hero layouts before writing JSX/CSS. | Ensures every greenfield frontend looks art-directed rather than template-generated. |
| **`web-design-guidelines`** (Vercel) | Enforces `tabular-nums` on numbers, `text-wrap: balance` on headings, visible `:focus-visible` rings, zero CLS skeletons, and URL query state sync. | Covers production polish and accessibility details that visual prompts miss. |
| **`Emil Kowalski Motion Protocol`** (`emilkowalski/skills`) | Restricts animation to `transform` and `opacity`, enforces custom exponential easing (`cubic-bezier(0.22, 1, 0.36, 1)`) or springs, and mandates `prefers-reduced-motion` cleanup. | Makes micro-interactions feel fast, physical, and intentional. |

---

## 🛠️ 4. Installed Packages, MCP Toolchain & Reference Routers

The system prioritizes **deterministic local tools and on-demand `npx -y` / `uvx` execution** over token-heavy multi-agent loops.

### A. CLI & MCP Packages
| Package / Tool | Install / On-Demand Command | Role & Why Selected |
| :--- | :--- | :--- |
| **`Graphify`** (`graphifyy`) | `uvx --from graphifyy graphify .` | Builds a local Tree-sitter AST dependency & call-chain graph (`graphify-out/`). Saves **~71x context tokens** compared to raw file grepping. |
| **`Nvidia Auto Ontology`** | Prompt/Schema Protocol in `00-core-os.md` | Extracts strict Entity-Relation triples and schema invariants before designing databases, knowledge graphs, or RAG pipelines. |
| **`Context7` MCP** | `npx -y @upstash/context7-mcp` | Pulls version-exact official documentation (Next.js App Router, React 19, Tailwind v4, GSAP) so the AI never hallucinates outdated APIs. |
| **`Exa` MCP** | Configured via MCP client | Performs semantic neural search across technical blogs, papers, and GitHub repositories. |
| **`Scrapling` & `Lightpanda`** | `pip install scrapling` / Headless Zig Browser | Fast, low-RAM web extraction with Cloudflare Turnstile stealth and adaptive DOM tracking. Replaces slow, expensive multi-agent LLM web searches. |
| **`Crawlee`** | Used when writing crawler scripts | Selected automatically when building persistent, queue-based, rate-limited multi-page scrapers. |
| **`Playwright`** | `npx -y playwright` | Powers the **Auto-Confirmation Loop**: opens `localhost` after UI/route edits to verify zero console/hydration errors across desktop (`1440px`) and mobile (`375px`). |
| **`AI Access Routers`** | `Omniroute`, `OpenRouter`, `Nvidia NIM`, `9router`, `Nararouter`, `AIMixHub` | Provides multi-provider failover and routes high-volume extraction/embedding tasks to low-cost or free high-throughput endpoints (`Nvidia NIM` / Flash models). |

### B. Curated UI & Animation Reference Matrix (Built into `01-ui-ux-master.md`)
* **Copy-Paste Animated React/Tailwind Blocks**: `21st.dev`, `reactbits.dev`, `Magic UI`, `Bklit UI`, `Originkit`, `ui.live`
* **Animation Engines (Escalation Order)**: CSS Transitions -> `Motion` (Framer) -> `GSAP` (`gsap.com`) / `Anime.js` -> `Vivus SVG` -> `Zdog` (`zzz.dog`) -> `Three.js` + `threeui.com` + `Theatre.js`
* **Component Specs & Developer Assets**: `component.gallery`, `stacksorted.com`, `getlayers.ai`, `design-resources-for-developers`
* **Flows, Wireframes & High-Craft Showcases**: `Mobbin`, `Relume.ai`, `Pinterest`, `Godly.website`, `Awwwards`, `motionsites`, `curated.design`, `Landbook`, `startupwebsites.co`, `dark.design`, `httpster.net`, `websitevice.com`

---

## 🎮 5. Daily Usage Guide (How to Use It)

Once installed in your project, **just talk to your AI Agent normally** in VS Code (Cline / Copilot), Cursor, or Claude Code. The rules trigger automatically by context:

1. **Brainstorming a New Feature**:
   * *You type*: `"我想加個即時通知系統，你覺得點整好？"`
   * *What happens automatically*: Triggers **ADHD 5-Frame Ideation** -> **Grill-Me** (asks 1 clarifying question) -> **5-Advisor Decision Council** vote.
2. **Building or Polishing Frontend UI**:
   * *You open or edit*: Any `.tsx` or `.css` file.
   * *What happens automatically*: Attaches `01-ui-ux-master.md`, enforces **Hallmark/Taste tokens + Vercel Guidelines + Emil Kowalski Motion**, runs `npx -y impeccable detect` to eliminate AI slop, and checks rendering via **Playwright**.
3. **Debugging an Error**:
   * *You paste*: A terminal error or stack trace.
   * *What happens automatically*: Outputs a strict 2-line `Cause -> Fix`, checks `Graphify` call chains, and follows **Superpowers 4-Step Systematic Debugging**.
4. **Long Coding Sessions (10+ Turns)**:
   * *What happens automatically*: The agent compresses session state into `.agent-context.md` (<30 lines) so it never loses track of locked architectural decisions.
