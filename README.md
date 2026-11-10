# 🚀 Agentic Skills & Rules OS (`agentic-skills-mcp`)

[English](#-english-documentation) | [廣東話 (Cantonese)](#-廣東話文檔-cantonese-documentation)

---

# 🌐 English Documentation

A zero-bloat, context-triggered **Universal AI Agent Operating System** designed for **VS Code (Cline & GitHub Copilot)**, **GitHub Codespaces**, **Cursor**, **Claude Code**, **OpenAI Codex**, and **Hermes**.

Instead of stuffing everything into a single giant prompt or overwriting framework-native `AGENTS.md` files (such as Next.js App Router defaults), this repository uses **Polyglot Modular Rules** (`00-core-os.md` + `01-ui-ux-master.md`) and **On-Demand CLI Execution (`npx -y` / `uvx`)**.

---

### ⚠️ Note on Default Language (Cantonese by Default)

> **Important**: This OS is pre-configured to converse in **Natural Hong Kong Cantonese (廣東話口語)** mixed with English technical terms by default.
>
> **How to change to English, Mandarin, Japanese, or any other language:**
> 1. Open `00-core-os.md`.
> 2. Locate **`## 1. I-Have-ADHD x ASD-STE100 Communication Protocol`**.
> 3. Modify item **`1. **Language**:`** to your preferred language (e.g., `Always converse in concise American English. Code/CLI strictly in English.`).
> 4. Save or re-run the installer. All AI tools will immediately switch to your chosen language.

---

## ⚡ 1. Quick Start & Installation (⏱️ < 1 Minute)

Run any of the single-line commands below inside **any project terminal** (e.g., inside a fresh Next.js project in VS Code) to configure your environment interactively:

### Option A1: Run via `npx` (No `git clone` needed)
```bash
npx -y github:Vincent-CLY/agentic-skills-mcp
```

### Option A2: Run via `pnpm dlx` (Fast & clean)
```bash
pnpm dlx github:Vincent-CLY/agentic-skills-mcp
```

### Option B: Run via `curl` (Zero Node/Git pre-requisites)
```bash
curl -fsSL https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh | bash
```

### Option C: Non-Interactive Auto Mode (For GitHub Codespaces Dotfiles)
```bash
bash install.sh --auto
```

### What the Installer Does:
1. **Asks Where to Install**: Current project only (default), global system directories, or both.
2. **Asks Which AI Tools You Use**: Generates **only** the folders for the tools you select (e.g., `.clinerules/` for Cline and `.github/instructions/` for Copilot)—zero unused folders.
3. **Preserves Native `AGENTS.md`**: Uses additive modular rules so framework-native `AGENTS.md` files (such as Next.js) remain 100% untouched.
4. **Keeps Git Clean**: Automatically appends installed rule paths to `.git/info/exclude` so your `git status` stays spotless.

---

## 📂 2. Active Rule Files & Architecture

| File | Scope & Trigger | Core Responsibility | Why Separated? |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **Always Active** (`**/*`) | Controls communication style, ideation, decision council, coding guardrails, debugging, security review, AST navigation, and context compression. | Ensures foundational engineering discipline and communication clarity on every turn. |
| **`01-ui-ux-master.md`** | **Auto-Triggered on Frontend** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | Enforces anti-AI-slop design rules, typography/color token locks, Vercel interface guidelines, Emil Kowalski motion physics, and UI component references. | Saves context tokens during backend/API tasks and loads automatically only when touching UI files. |
| **`cli.mjs` & `install.sh`** | **CLI Engine** | Interactive terminal prompter (arrow keys, space multi-select, enter) that fetches rules and configures tooling. | Delivers a modern zero-dependency setup across macOS, Linux, and Windows. |

---

## 🧠 3. Installed Skills & Why They Were Selected

All skills in this OS **auto-trigger based on conversation context**—no need to memorize slash commands.

### A. Communication & Explanation Skills
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | Enforces a status banner on Line 1, immediate bottom-line verdict on Line 2, max 5 items per list (`Do Now` / `Later`), time estimates (`⏱️`), tangent parking (`🅿️`), and a single `<2 min` closing action (`👉 下一步`). | Eliminates AI walls of text and keeps high-velocity engineering sessions focused. |
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
- **Flows, Wireframes & High-Craft Showcases**: `Mobbin`, `Relume.ai`, `Pinterest`, `Godly.website`, `Awwwards`, `Dribbble`, `Pinterest`, `motionsites`, `curated.design`, `Landbook`, `startupwebsites.co`, `dark.design`, `httpster.net`, `websitevice.com`

---

## 🎮 5. Daily Usage Guide

Once installed in your project, **just talk to your AI Agent normally** in VS Code (Cline / Copilot), Cursor, or Claude Code. The rules trigger automatically by context:

1. **Brainstorming a New Feature**:
   - *You type*: `"I want to add a real-time notification engine, how should we build it?"`
   - *What happens automatically*: Triggers **ADHD 5-Frame Ideation** -> **Grill-Me** (asks 1 clarifying question) -> **5-Advisor Decision Council** vote.
2. **Building or Polishing Frontend UI**:
   - *You open or edit*: Any `.tsx`, `.jsx`, or `.css` file.
   - *What happens automatically*: Attaches `01-ui-ux-master.md`, enforces **Hallmark/Taste tokens + Vercel Guidelines + Emil Kowalski Motion**, runs `npx -y impeccable detect` to eliminate AI slop, and checks rendering via **Playwright**.
3. **Debugging an Error**:
   - *You paste*: A terminal error or stack trace.
   - *What happens automatically*: Outputs a strict 2-line `Cause -> Fix`, checks `Graphify` call chains, and follows **Superpowers 4-Step Systematic Debugging**.
4. **Long Coding Sessions (10+ Turns)**:
   - *What happens automatically*: The agent compresses session state into `.agent-context.md` (<30 lines) so it never loses track of locked architectural decisions.

---
---

# 🇭🇰 廣東話文檔 (Cantonese Documentation)

一個為 **VS Code (Cline & GitHub Copilot)**、**GitHub Codespaces**、**Cursor**、**Claude Code**、**OpenAI Codex** 及 **Hermes** 量身打造嘅**全天候通用 AI Agent 作業系統**。

本架構拒絕將所有規則塞爆單一 Prompt，亦**絕唔會覆蓋專案原生嘅 `AGENTS.md`**（例如 Next.js App Router 預設規則）；透過 **多檔案語意路由（`00-core-os.md` + `01-ui-ux-master.md`）** 與 **即叫即行 CLI（`npx -y` / `uvx`）**，達成零硬碟負擔、按需自動掛載。

---

### ⚠️ 預設語言重要說明（預設為香港廣東話口語）

> **特別注意**：本系統預設強制 AI 使用**自然流暢嘅香港廣東話口語（夾雜英文科技名詞）**進行對話。
>
> **如果你想轉做英文、普通話、日文或其他語言：**
> 1. 打開 `00-core-os.md`。
> 2. 搵到 **`## 1. I-Have-ADHD x ASD-STE100 Communication Protocol`** 呢個章節。
> 3. 將第 1 點 **`1. **Language**:`** 改成你想要嘅語言（例如：`Always converse in English` 或 `使用繁體中文書面語對話`）。
> 4. 存檔或重新行一次安裝器，所有 AI 工具就會即時切換成你指定嘅語言！

---

## ⚡ 1. 極速安裝與啟動教學 (⏱️ < 1 分鐘)

喺**任何專案終端機**（例如啱啱開好嘅 Next.js 專案）直接行以下任何一行指令，即可啟動現代互動式安裝器：

### 選項 A1：透過 `npx` 執行（最通用，免 git clone）
```bash
npx -y github:Vincent-CLY/agentic-skills-mcp
```

### 選項 A2：透過 `pnpm dlx` 執行（現代前端專案極速推薦）
```bash
pnpm dlx github:Vincent-CLY/agentic-skills-mcp
```

### 選項 B：透過 `curl` 執行（跨平台純終端機一鍵跑）
```bash
curl -fsSL https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh | bash
```

### 選項 C：靜默無人值守模式（供 GitHub Codespaces Dotfiles 自動開機）
```bash
bash install.sh --auto
```

### 安裝器核心特點：
1. **自由選擇安裝範圍**：只裝喺當前 Project（預設）、全域電腦目錄（Global）、或者兩邊一齊裝。
2. **只建立你用緊嘅 AI 資料夾**：支援多選（例如淨係揀 VS Code Cline 同 Copilot），**只會建立** `.clinerules/` 同 `.github/instructions/`，絕唔會整多餘嘅 `.cursor` 或 `.claude` 空資料夾霸位。
3. **100% 保留原生 `AGENTS.md`**：採用模組化疊加注入，Next.js 原生規則完好無缺。
4. **Git Status 零污染**：全自動將規則路徑寫入 `.git/info/exclude`，團隊 Git Commit 乾乾淨淨。

---

## 📂 2. 模組化規則檔案與職責分工

| 檔案名稱 | 觸發範圍 | 核心職責 | 點解要拆開？ |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **全天候常駐** (`**/*`) | 掌控溝通結構（ADHD/STE100）、5維發散腦暴、5人決策委員會、Ponytail 7級程式碼階梯、4步根源除錯、安全審查及 Context 防腐壓縮。 | 確保 AI 喺任何時候寫 Code 同討論架構都守住最高工程紀律。 |
| **`01-ui-ux-master.md`** | **掂親前端檔案自動載入** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | 鎖死反 AI 罐頭設計（Anti-Slop）、字體配色 Token、Vercel 官方介面規範、Emil Kowalski 物理動態、及 30+ 個精選設計庫路由。 | 寫後端/API 時完全唔載入以慳 Token；一寫 UI 自動化身設計大師。 |
| **`cli.mjs` & `install.sh`** | **安裝引擎** | 零依賴原生終端機互動選單（支援方向鍵、空白鍵多選、Enter 確認），自動 Fetch 遠端檔案與配置環境。 | 跨 macOS、Linux、Windows 均可喺 0.2 秒內秒速啟動。 |

---

## 🧠 3. 已掛載之技能庫 (Skills) 與入選原因

所有技能**純靠對話語境（Context）自動觸發**，你完全唔需要死記任何 Slash 指令。

### A. 溝通與認知結構規範
| 技能名稱 | 核心功能 | 點解揀佢？（入選原因） |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | 強制第 1 行顯示進度與使用技能狀態列，第 2 行直接畀結論/指令；每個清單最多 5 點（拆成 `即刻做` 同 `遲啲先`）；強制每節標明時間預算（`⏱️`）；離題想法泊喺底層（`🅿️ 順帶一提`）；每次回覆必以單一 `<2分鐘` 行動收尾（`👉 下一步`）。 | 徹底消滅 AI 傳統「客套廢話」與長篇大論，維持極限工程推進速度。 |
| **`ASD-STE100`** | 簡明技術英文（Simplified Technical English）規則：一詞一義、只用主動語態、拋棄修飾贅字、Bug 報告嚴格行 `Cause -> Fix` 兩行制。 | 取代會過度閹割技術因果與邊界細節嘅 `Caveman`，提供極致精準嘅技術溝通。 |
| **`Annotated-Illustration` & `3Blue1Brown (Manim)`** | 解釋演算法、數學模型或架構時，自動畫出 ASCII/Mermaid 狀態演變圖，並主動提供可直接執行嘅 `Manim (Python)` 或單一 HTML `Three.js` 視覺化程式碼。 | 將抽象架構轉化為可見、可互動嘅直觀動態模型。 |

### B. 腦力發散、需求逼供與架構決策
| 技能名稱 | 自動觸發情境 | 核心功能與入選原因 |
| :--- | :--- | :--- |
| **`ADHD 5-Frame Ideation`** | 提出模糊新 Idea 或開放式架構難題 | 自動剔除 3 個最平庸嘅教科書答案，從 5 個正交視角（`🏛️ 監管者`、`⚡ 極速通關`、`🧬 自癒生物`、`🪙 $0 預算`、`🧒 10歲小童`）提出解法並評分 `[新穎度, 可行性, 契合度]`，標明 `★ 奇招` 與 `⚠️ 伏位`。 |
| **`grill-me` & `to-spec`** (`matt-pocock/skills`) | 需求含有 >1 個未明言嘅盲點假設 | 阻止 AI 盲目寫 Code；每次只問 1 條高槓桿反問，直至所有邊界鎖定，再自動濃縮成 Atomic 規格與驗收清單。 |
| **`Decision Council`** (`get-more-perspectives`) | 比較不同 Library、架構抉擇或取捨 | 自動召集 5 人決策委員會（`🔧 執行架構`、`⚠️ 質疑風控`、`🚀 遠景槓桿`、`👤 用家體驗`、`💰 成本ROI`）進行投票，淘汰劣選並聚焦至最佳方案，拒絕「模棱兩可」嘅廢話。 |

### C. 軟體工程、除錯與安全守門員
| 技能名稱 | 自動觸發情境 | 核心功能與入選原因 |
| :--- | :--- | :--- |
| **`Karpathy x Ponytail 7-Rung Ladder`** | 撰寫、修改或重構任何程式碼 | 寫 Code 前強制行 7 級階梯：*(1) 使唔使存在？ -> (2) Repo入面有無現成？ -> (3) 原生語言 Stdlib？ -> (4) 現有已裝依賴？ -> (5) 乾淨單行？ -> (6) 手術刀最小 Diff -> (7) 死守邊界安全*。由源頭杜絕過度工程。 |
| **`Superpowers`** (`obra/superpowers`) | 修復 Bug、處理失敗測試或實作功能 | 強制執行 4 步系統化除錯法（重現 -> 隔離邊界 -> 查明 Root Cause -> 修復）與測試驅動開發（TDD 紅綠燈循環）。 |
| **`Security Review Team` & `/ponytail-review`** | 每次完成 Code Diff 修改 | 嚴格按優先順序審查：`1. 正確 -> 2. 安全 (OWASP/XSS/Auth/密鑰) -> 3. 高載重承受度 -> 4. 測試覆蓋 -> 5. 效能速度 -> 6. 精簡度`。 |
| **`Skill-Creator`** (`Anthropic-skills`) | 同一個複雜流程喺對話重複出現 2 次以上 | 主動提議將自訂工作流程自動打包成標準獨立嘅 `SKILL.md`。 |

### D. 前端設計、動態物理與防 AI 罐頭設計 (`01-ui-ux-master.md`)
| 技能名稱 | 核心功能 | 點解揀佢？（入選原因） |
| :--- | :--- | :--- |
| **`Impeccable`** | 62 條確定性 UI 檢測引擎（`npx -y impeccable detect`），強制封殺紫色/靛藍霓虹漸變、罐頭置中三卡片、及隨機 Spacing。 | 作為自動化設計門禁，消滅一眼睇得出嘅「AI 塑膠罐頭介面（AI Slop）」。 |
| **`Hallmark` + `taste-skill` + `ui-ux-pro-max`** | 寫 JSX 前預先鎖死層次架構、字體配對（`fontpair.co`、`chalk.ist`）、色彩盤（`pigment.shapefactory.co`）、UX 人因法則（`lawsofux.com`）及非對稱 Hero 排版。 | 保證所有全新開發嘅 Frontend 呈現高級藝術指導級別嘅視覺水準。 |
| **`web-design-guidelines`** (Vercel) | 強制數字套用 `tabular-nums`、標題 `text-wrap: balance`、清晰 `:focus-visible` 外框、零跳動骨架屏、及 URL Query 狀態同步。 | 補足一般設計提示詞容易遺漏嘅真實生產環境細節與無障礙體驗。 |
| **`Emil Kowalski Motion Protocol`** (`emilkowalski/skills`) | 動畫僅限 `transform` 與 `opacity`，強制採用指數型 Ease-out 或 Spring 彈簧物理曲線，並嚴格處理 `prefers-reduced-motion` 退場。 | 賦予微互動極致跟手、快速且符合真實物理嘅動態手感。 |

---

## 🛠️ 4. 本地依賴、MCP 工具鏈與參考資源庫

本架構全面採用**確定性本機工具與即叫即行（`npx -y` / `uvx`）模式**，徹底取代高延遲、燒 Token 嘅 Multi-agent 迴圈。

### A. CLI 與 MCP 工具鏈
| 工具名稱 | 執行 / 呼叫方式 | 核心定位與入選原因 |
| :--- | :--- | :--- |
| **`Graphify`** (`graphifyy`) | `uvx --from graphifyy graphify .` | 透過本機 Tree-sitter 建立 AST 依賴與呼叫鏈知識圖譜（`graphify-out/`），相比 raw grep 慳返 **~71 倍 Context Tokens**。 |
| **`Nvidia Auto Ontology`** | 寫喺 `00-core-os.md` 嘅設計協議 | 喺設計 DB Schema、RAG 管線或知識圖譜前，自動抽取出精確嘅 Entity-Relation 三元組與 Schema 不變量（Invariants）。 |
| **`Context7` MCP** | `npx -y @upstash/context7-mcp` | 即時拉取官方版本匹配文檔（Next.js App Router、React 19、Tailwind v4、GSAP），杜絕 AI 用過期 API 寫錯 Code。 |
| **`Exa` MCP** | 透過 MCP Client 設定 | 針對技術 Blog、論文與 GitHub 倉庫進行語意神經搜尋。 |
| **`Scrapling` & `Lightpanda`** | `pip install scrapling` / Zig 極速 Headless Browser | 極低記憶體消耗嘅網頁擷取工具，自帶 Cloudflare Turnstile 隱身與 DOM 變動跟蹤，比開多隻 Sub-agents 搜網快兼平。 |
| **`Crawlee`** | 撰寫複雜爬蟲腳本時自動調用 | 當需要編寫具備 Queue、速率限制與自動重試嘅多頁面爬蟲系統時自動選用。 |
| **`Playwright`** | `npx -y playwright` | 驅動**自動驗收迴圈（Auto-Confirmation Loop）**：改完 UI 或 Route 自動打開 Localhost，檢查 Console/Hydration 零報錯並驗證 1440px / 375px 渲染。 |
| **`AI Access Routers`** | `Omniroute`, `OpenRouter`, `Nvidia NIM`, `9router`, `Nararouter`, `AIMixHub` | 支援多供應商自動 Failover，並將大規模提取/嵌入工作路由至極低成本或免費嘅端點（如 `Nvidia NIM` 或 Flash 模型）。 |

### B. 精選 UI 與動畫參考矩陣（已內建於 `01-ui-ux-master.md`）
- **即炒即用動態 React/Tailwind 組件**：`21st.dev`、`reactbits.dev`、`Magic UI`、`Bklit UI`、`Originkit`、`ui.live`
- **動畫引擎升級矩陣**：CSS Transitions -> `Motion` (Framer) -> `GSAP` (`gsap.com`) / `Anime.js` -> `Vivus SVG` -> `Zdog` (`zzz.dog`) -> `Three.js` + `threeui.com` + `Theatre.js`
- **組件規格與開發者資產**：`component.gallery`、`stacksorted.com`、`getlayers.ai`、`design-resources-for-developers`
- **真實應用流程、線框圖與頂級靈感庫**：`Mobbin`、`Relume.ai`、`Pinterest`、`Godly.website`、`Awwwards`、`Dribbble`、`Pinterest`、`motionsites`、`curated.design`、`Landbook`、`startupwebsites.co`、`dark.design`、`httpster.net`、`websitevice.com`

---

## 🎮 5. 日常開發實戰指南

安裝完成後，喺 VS Code (Cline / Copilot)、Cursor 或 Claude Code **正常打字溝通即可**，規則會隨語境全自動運轉：

1. **討論模糊新功能 / 架構選型**：
   - *你打*：`"我想加個即時通知系統，你覺得點整好？"`
   - *自動觸發*：**ADHD 5維發散** -> **Grill-Me**（反問 1 條關鍵問題） -> **5人決策委員會投票**。
2. **開發或潤飾前端 UI**：
   - *你打開或編輯*：任何 `.tsx`、`.jsx` 或 `.css` 檔案。
   - *自動觸發*：自動掛載 `01-ui-ux-master.md`，鎖死 **Hallmark/Taste tokens + Vercel 介面規範 + Emil Kowalski 動畫**，自動跑 `npx -y impeccable detect` 捉 AI 罐頭設計，並透過 **Playwright** 驗證渲染。
3. **終端機報錯除錯**：
   - *你貼上*：終端機 Error 或 Stack trace。
   - *自動觸發*：嚴格以兩行 `Cause -> Fix` 交代，查閱 `Graphify` 呼叫圖譜，並依照 **Superpowers 4步除錯法** 追蹤根源。
4. **長時間對話（超過 10 個回合）**：
   - *自動觸發*：AI 會自動喺 `.agent-context.md` 寫入/更新精簡狀態快照（<30 行），確保永不遺失已鎖定嘅架構決策。
