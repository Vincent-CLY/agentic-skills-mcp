# 🚀 Agentic Skills & Rules OS (`agentic-skills-mcp`)

> **[English Version](#-english-documentation)** | **[廣東話版本](#-廣東話版本-cantonese-documentation)**

---

## 🌐 Language Setting Notice / 語言設定重要提示

* **Default Language**: The Agent OS is configured by default to converse in **natural Hong Kong Cantonese** mixed with English technical terms (Code, CLI commands, and identifiers remain strictly in English).
* **How to change to English or other languages**:
  Open `00-core-os.md` (or your project's `.clinerules/00-core-os.md` / `.github/instructions/00-core-os.instructions.md`), locate:
  ```text
  ## 1. I-Have-ADHD x ASD-STE100 Communication Protocol
  1. **Language**: Always converse in natural Hong Kong Cantonese...
  ```
  Change this line to your preferred language (e.g., `Always converse in fluent English.` or `Always converse in Traditional Chinese / Japanese.`).

---

# 🇬🇧 English Documentation

A zero-bloat, context-triggered **Universal AI Agent Operating System** designed for **VS Code (Cline & GitHub Copilot)**, **GitHub Codespaces**, **Cursor**, **Claude Code**, **OpenAI Codex**, and **Hermes**.

Instead of stuffing everything into a single giant prompt or overwriting framework-native `AGENTS.md` files (such as Next.js App Router defaults), this repository uses **Polyglot Modular Rules** (`00-core-os.md` + `01-ui-ux-master.md`) and **On-Demand CLI Execution (`npx -y` / `uvx`)**.

---

## ⚡ 1. Quick Start & Installation (⏱️ < 1 Minute)

Run a single command inside **any project terminal** (e.g., a fresh Next.js repo in VS Code) to fetch the latest rules and configure your environment interactively:

### Option A: Run directly via `pnpm` or `npx` (No `git clone` required)
```bash
# via npx
npx -y github:Vincent-CLY/agentic-skills-mcp

# or via pnpm
pnpm dlx github:Vincent-CLY/agentic-skills-mcp

# or via bun
bunx github:Vincent-CLY/agentic-skills-mcp
```

### Option B: Run via `curl` (Zero Node/Git prerequisite)
```bash
curl -fsSL https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh | bash
```

### Option C: Non-Interactive Auto Mode (For GitHub Codespaces Dotfiles)
```bash
bash install.sh --auto
```

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
| **`install.sh` & `cli.mjs`** | **CLI Setup Engine** | Zero-dependency high-contrast interactive terminal UI with arrow keys, space multi-toggle, and graceful TTY redirection. | Enables 1-command cross-platform setup across local machines and cloud containers. |

---

## 🧠 3. Installed Skills & Why They Were Selected

All skills in this OS **auto-trigger based on conversation context**—you do not need to memorize slash commands.

### A. Communication & Explanation Skills
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | Enforces a status banner on Line 1, immediate bottom-line verdict on Line 2, max 5 items per list (`Do Now` / `Later`), time estimates (`⏱️`), tangent parking (`🅿️`), and a single `<2 min` closing action (`👉 Next Step`). | Eliminates AI walls of text and keeps high-velocity engineering sessions focused. |
| **`ASD-STE100`** | Simplified Technical English rules: active voice only, one word = one meaning, strict 2-line error reporting (`Cause -> Fix`). | Replaces `Caveman` (which strips critical technical nuance) with crisp, unambiguous engineering precision. |
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
- **Copy-Paste Animated React/Tailwind Blocks**: `21st.dev`, `reactbits.dev`, `Magic UI`, `Bklit UI`, `Originkit`, `ui.live`
- **Animation Engines (Escalation Order)**: CSS Transitions -> `Motion` (Framer) -> `GSAP` (`gsap.com`) / `Anime.js` -> `Vivus SVG` -> `Zdog` (`zzz.dog`) -> `Three.js` + `threeui.com` + `Theatre.js`
- **Component Specs & Developer Assets**: `component.gallery`, `stacksorted.com`, `getlayers.ai`, `design-resources-for-developers`
- **Flows, Wireframes & High-Craft Showcases**: `Mobbin`, `Relume.ai`, `Pinterest`, `Godly.website`, `Awwwards`, `motionsites`, `curated.design`, `Landbook`, `startupwebsites.co`, `dark.design`, `httpster.net`, `websitevice.com`

---

## 🎮 5. Daily Usage Guide

Once installed in your project, **just talk to your AI Agent normally** in VS Code (Cline / Copilot), Cursor, or Claude Code. The rules trigger automatically by context:

1. **Brainstorming a New Feature**:
   * *You type*: `"I want to add a real-time notification system, how should we build it?"`
   * *What happens automatically*: Triggers **ADHD 5-Frame Ideation** -> **Grill-Me** (asks 1 clarifying question) -> **5-Advisor Decision Council** vote.
2. **Building or Polishing Frontend UI**:
   * *You open or edit*: Any `.tsx` or `.css` file.
   * *What happens automatically*: Attaches `01-ui-ux-master.md`, enforces **Hallmark/Taste tokens + Vercel Guidelines + Emil Kowalski Motion**, runs `npx -y impeccable detect` to eliminate AI slop, and checks rendering via **Playwright**.
3. **Debugging an Error**:
   * *You paste*: A terminal error or stack trace.
   * *What happens automatically*: Outputs a strict 2-line `Cause -> Fix`, checks `Graphify` call chains, and follows **Superpowers 4-Step Systematic Debugging**.
4. **Long Coding Sessions (10+ Turns)**:
   * *What happens automatically*: The agent compresses session state into `.agent-context.md` (<30 lines) so it never loses track of locked architectural decisions.

---

# 🇭🇰 廣東話版本 (Cantonese Documentation)

一個專為 **VS Code (Cline & GitHub Copilot)**、**GitHub Codespaces**、**Cursor**、**Claude Code**、**OpenAI Codex** 同 **Hermes** 設計嘅零冗餘、按對話脈絡自動觸發嘅**通用 AI Agent 作業系統**。

本架構拒絕將所有規則塞爆單一 Prompt，亦絕對唔會覆蓋專案原生嘅 `AGENTS.md`（例如 Next.js App Router 預設規範）；透過**多平台通用模組化規則**（`00-core-os.md` + `01-ui-ux-master.md`）配搭**按需即時執行（`npx -y` / `uvx`）**，確保極速、省 Token 兼零維護成本。

---

## ⚡ 1. 極速安裝與啟動 (⏱️ < 1 分鐘)

喺**任何專案終端機**（例如 VS Code 入面開緊嘅 Next.js 專案）輸入以下一行指令，即可自動由 GitHub 下載最新規則並透過互動式選單完成配置：

### 方式 A：直接透過 `pnpm` 或 `npx` 執行（毋須 `git clone`）
```bash
# 使用 npx
npx -y github:Vincent-CLY/agentic-skills-mcp

# 或使用 pnpm
pnpm dlx github:Vincent-CLY/agentic-skills-mcp

# 或使用 bun
bunx github:Vincent-CLY/agentic-skills-mcp
```

### 方式 B：透過 `curl` 執行（零 Node/Git 前置需求）
```bash
curl -fsSL https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh | bash
```

### 方式 C：非互動自動安裝模式（適用於 GitHub Codespaces Dotfiles）
```bash
bash install.sh --auto
```

### 安裝器核心特點：
1. **自由選擇安裝範圍**：可選「只裝落當前 Project（預設）」、「裝落全域系統」或「兩者皆裝」。
2. **按需建立 AI 工具目錄**：問你用緊邊隻 AI 工具（支援多選），**只會建立**對應嘅目錄（例如 Cline 用 `.clinerules/`、Copilot 用 `.github/instructions/`），絕對唔會喺硬碟留低未用嘅垃圾 Folder。
3. **保護原生 `AGENTS.md`**：採用增量疊加規則目錄，Next.js 或其他框架自帶嘅 `AGENTS.md` 100% 保持原狀。
4. **保持 Git 乾淨**：自動將注入嘅規則路徑加入 `.git/info/exclude`，`git status` 永遠零污染。

---

## 📂 2. 核心規則架構與檔案分工

| 檔案 | 觸發範圍 | 核心功能職責 | 點解要拆開？ |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **永遠常駐** (`**/*`) | 規範對話結構、發散構思、決策委員會、寫 Code 防過度設計階梯、系統除錯、邊界安全審查、AST 代碼導航及記憶壓縮。 | 確保每次對話與改動都守住最高工程紀律與清晰度。 |
| **`01-ui-ux-master.md`** | **掂親前端自動載入** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | 執行 Impeccable 防 AI Slop 規則、鎖定字體/色板 Token、Vercel 介面指標、Emil Kowalski 動畫物理法則及全網高質設計庫路由。 | 寫 Backend / API 時唔會浪費 Token，掂親 UI 檔先自動精準掛載。 |
| **`install.sh` & `cli.mjs`** | **安裝引擎** | 零依賴、高對比現代 TUI（支援方向鍵選擇、空白鍵多選及 `/dev/tty` 鍵盤重定向）。 | 提供跨電腦、跨容器極速一鍵配置體驗。 |

---

## 🧠 3. 內建技能庫與入選原因

所有技能**純靠對話語意自動觸發**，完全毋須特登背誦 Slash Commands。

### A. 溝通與原理解釋技能
| 技能名稱 | 具體運作方式 | 點解揀佢？ |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | 強制第 1 行顯示狀態 Banner、第 2 行直接講結論/指令、清單上限 5 項（超過則拆成 `即刻做` / `遲啲先`）、標註時間預估（`⏱️`）、離題點子泊入底層（`🅿️`）、結尾單一 2 分鐘內行動（`👉 下一步`）。 | 徹底消除 AI 廢話長篇大論，維持極高開發專注力。 |
| **`ASD-STE100`** | 簡化技術英文規範（STE）：限用主動語態、一詞一義、錯誤回報強制 2 行 `Cause -> Fix`。 | 取代會斬走關鍵因果細節嘅 `Caveman`，提供極致精準無歧義嘅解釋。 |
| **`Annotated-Illustration` & `3Blue1Brown (Manim)`** | 解釋演算法、數學或系統架構時，自動以 ASCII/Mermaid 步驟圖展示資料變化，並主動提供可直接執行的 `Manim` Python 或單檔 `Three.js` 互動網頁視覺化。 | 將抽象架構轉化為具體可見嘅動態模型。 |

### B. 需求發散、規格鎖定與決策技能
| 技能名稱 | 自動觸發情境 | 具體運作與入選原因 |
| :--- | :--- | :--- |
| **`ADHD 5-Frame Ideation`** | 提出模糊點子或架構難題 | 自動剔除 3 個教科書式罐頭答案，從 5 個正交視角（`🏛️ 監管者`、`⚡ 極速通關`、`🧬 自我修復`、`🪙 零預算`、`🧒 10歲簡化法`）發散解法並評分 `[新穎, 可行, 契合]`，明確標出 `★ 奇招之選` 同 `⚠️ 伏位陷阱`。 |
| **`grill-me` & `to-spec`** (`matt-pocock/skills`) | 需求存在未定義邊界或假設 | 嚴禁盲猜寫 Code；每次只問 1 條高槓桿關鍵問題（`grill-me`），逼供完後自動鎖死成具體規格清單（`to-spec`）。 |
| **`Decision Council`** (`get-more-perspectives`) | 比較不同套件、架構或技術取捨 | 召開 5 人決策委員會（`🔧 執行架構`、`⚠️ 質疑審查`、`🚀 遠景槓桿`、`👤 用家體驗`、`💰 成本ROI`）投票篩選出前 `N` 個生還方案，拒絕「睇情況」模稜兩可。 |

### C. 工程編程、除錯與安全審核
| 技能名稱 | 自動觸發情境 | 具體運作與入選原因 |
| :--- | :--- | :--- |
| **`Karpathy x Ponytail 7-Rung Ladder`** | 撰寫或重構任何程式碼 | 寫 Code 前由第 1 階爬到第 7 階：*(1) 使唔使存在？ -> (2) 現有 Repo 有無？ -> (3) 語言內建 Stdlib？ -> (4) 現成套件？ -> (5) 乾淨單行？ -> (6) 手術刀最小修改 -> (7) 邊界安全絕不偷工*。防過度設計。 |
| **`Superpowers`** (`obra/superpowers`) | 修復 Bug、測試失敗或開發功能 | 強制執行四步根源除錯（重現 -> 隔離邊界 -> 確定根因 -> 測試修復）以及測試驅動開發（`RED -> GREEN -> REFACTOR`）。 |
| **`Security Review Team` & `/ponytail-review`** | 每次完成 Code Diff | 依序嚴格審核：`1. 正確 -> 2. 安全 (OWASP/XSS/Auth/密鑰) -> 3. 高負載穩定 -> 4. 具備測試 -> 5. 效能 (Core Web Vitals) -> 6. 精簡`。 |
| **`Skill-Creator`** (`Anthropic-skills`) | 同一流程重複手動做咗 2 次以上 | 主動提議將自訂工作流程自動封裝成獨立嘅 `SKILL.md`。 |

### D. 前端設計、動態物理與防 AI 罐頭感 (`01-ui-ux-master.md`)
| 技能名稱 | 具體運作方式 | 點解揀佢？ |
| :--- | :--- | :--- |
| **`Impeccable`** | 具備 62 條確定性檢測規則（`npx -y impeccable detect`），自動封殺霓虹紫藍漸變、罐頭三欄卡片及任意間距。 | 作為自動化守門員，杜絕一眼假嘅 AI 罐頭 UI。 |
| **`Hallmark` + `taste-skill` + `ui-ux-pro-max`** | 寫 JSX/CSS 前先鎖定層次、字體配對（`fontpair.co`、`chalk.ist`）、色彩（`pigment.shapefactory.co`）、UX 法則及不對稱 Hero 排版。 | 保證所有全新頁面具備雜誌級藝術指導質感。 |
| **`web-design-guidelines`** (Vercel) | 數值強制 `tabular-nums`、標題 `text-wrap: balance`、清晰鍵盤聚焦環、防跳動 Skeleton 及 URL Query 狀態同步。 | 守住專業級前端在無障礙與細節上的工藝底線。 |
| **`Emil Kowalski Motion Protocol`** (`emilkowalski/skills`) | 動畫僅限 `transform` 與 `opacity`、採用客製指數 Easing 或彈簧物理、強制包含 `prefers-reduced-motion` 退場清理。 | 讓微互動具備高反應性與物理質感，拒絕廉價動畫。 |

---

## 🛠️ 4. CLI 工具鏈、MCP 與設計參考路由

系統優先選用**本地確定性工具與即時 `npx -y` / `uvx`**，取代浪費 Token 的多 Agent 搜尋迴圈。

### A. 命令列工具與 MCP 整合
| 套件 / 工具 | 執行 / 安裝指令 | 角色與入選原因 |
| :--- | :--- | :--- |
| **`Graphify`** (`graphifyy`) | `uvx --from graphifyy graphify .` | 建立本地 Tree-sitter AST 相依性與呼叫鏈知識圖譜（`graphify-out/`），比傳統 Grep **節省約 71 倍 Context Token**。 |
| **`Nvidia Auto Ontology`** | `00-core-os.md` 內建協議 | 在設計資料庫架構、知識圖譜或 RAG 時，強制先抽取實體關係三元組與嚴格邊界約束。 |
| **`Context7` MCP** | `npx -y @upstash/context7-mcp` | 精準拉取最新官方文件（Next.js App Router、React 19、Tailwind v4、GSAP），杜絕 AI 用過期 API 寫錯 Code。 |
| **`Exa` MCP** | 透過 MCP Client 設定 | 針對技術文章、學術論文及 GitHub 代碼庫進行語意神經搜尋。 |
| **`Scrapling` & `Lightpanda`** | `pip install scrapling` / Zig 無頭瀏覽器 | 具備 Cloudflare 隱身與自適應 DOM 追蹤的高速低記憶體爬蟲，取代反應緩慢的多 Agent 網頁搜尋。 |
| **`Crawlee`** | 撰寫多頁爬蟲腳本時調用 | 專為需要佇列、頻率限制與自動重試的大規模網頁爬取而設。 |
| **`Playwright`** | `npx -y playwright` | 驅動**自動確認驗收迴圈**：修改 UI/路由後自動開本地 Dev Server 檢查 Console 錯誤與 Hydration 狀況，並驗收桌機（1440px）與手機（375px）排版。 |
| **`AI Access Routers`** | `Omniroute`、`OpenRouter`、`Nvidia NIM`、`9router`、`Nararouter`、`AIMixHub` | 支援多供應商故障轉移，並將大量 Extraction/Embedding 任務分流至低成本或免費端點（如 `Nvidia NIM` 或 Flash 模型）。 |

### B. 精選 UI 與動畫參考矩陣（內建於 `01-ui-ux-master.md`）
- **複製即用動態 React/Tailwind 組件庫**：`21st.dev`、`reactbits.dev`、`Magic UI`、`Bklit UI`、`Originkit`、`ui.live`
- **動畫引擎升級矩陣**：純 CSS Transitions -> `Motion` (Framer) -> `GSAP` (`gsap.com`) / `Anime.js` -> `Vivus SVG` -> `Zdog` (`zzz.dog`) -> `Three.js` + `threeui.com` + `Theatre.js`
- **組件規格與開發者資產**：`component.gallery`、`stacksorted.com`、`getlayers.ai`、`design-resources-for-developers`
- **互動流程、線框圖與頂級靈感庫**：`Mobbin`、`Relume.ai`、`Pinterest`、`Godly.website`、`Awwwards`、`motionsites`、`curated.design`、`Landbook`、`startupwebsites.co`、`dark.design`、`httpster.net`、`websitevice.com`

---

## 🎮 5. 日常使用與自動觸發情境

安裝完成後，喺 VS Code（Cline / Copilot）、Cursor 或 Claude Code **正常同 AI 對話即可**，系統會按上下文自動觸發：

1. **構思新功能**：
   * *你輸入*：`"我想加個即時通知系統，你覺得點整好？"`
   * *自動觸發*：**ADHD 5-Frame 發散** -> **Grill-Me**（逐條問清邊界） -> **5 人決策委員會**投票評選。
2. **編寫或微調前端介面**：
   * *你開啟或修改*：任何 `.tsx` 或 `.css` 檔案。
   * *自動觸發*：自動掛載 `01-ui-ux-master.md`，鎖定 **Hallmark/Taste Tokens + Vercel 規範 + Emil Kowalski 動態物理**，背景跑 `npx -y impeccable detect` 阻截 AI Slop，並透過 **Playwright** 驗收排版。
3. **遇到報錯與除錯**：
   * *你貼上*：終端機報錯或 Stack Trace。
   * *自動觸發*：強制以兩行 `Cause -> Fix` 輸出，查詢 `Graphify` 呼叫鏈，遵循 **Superpowers 4 步系統除錯法**。
4. **長對話防遺忘（超過 10 個回合）**：
   * *自動觸發*：自動將目標、已確定決策、改動檔案濃縮更新至專案根目錄嘅 `.agent-context.md`（上限 30 行），保證長對話絕不遺忘初衷。
