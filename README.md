# 🚀 Agentic Skills & Rules OS (`agentic-skills-mcp`)

> 🌐 **Language Navigation / 語言導航**: [🇬🇧 Pure English Documentation](#-english-documentation) | [🇭🇰 純廣東話完整文檔](#-廣東話完整文檔-cantonese-version)
>
> 💡 **Note on Default Conversation Language / 預設語言提示**:
> By default, `00-core-os.md` instructs the AI Agent to converse in **Hong Kong Cantonese (廣東話口語夾雜英文 tech terms)** while keeping all code, comments, and CLI commands strictly in **English**.
> - **How to change it**: Open **`00-core-os.md`** -> go to **`## 1. I-Have-ADHD x ASD-STE100 Communication Protocol`** -> edit **Item `1. Language:`** (Line 12) to `"Always converse in clear, concise English"` (or any language you prefer).

---

# 🇬🇧 English Documentation

A zero-bloat, context-triggered **Universal AI Agent Operating System** built for **VS Code (Cline & GitHub Copilot)**, **GitHub Codespaces**, **Cursor**, **Claude Code**, **OpenAI Codex**, and **Hermes**.

Instead of stuffing everything into a single giant prompt, blindly "vibe-coding" black-box files, or overwriting framework-native `AGENTS.md` files (such as Next.js App Router defaults), this repository uses **Polyglot Modular Rules** (`00-core-os.md` + `01-ui-ux-master.md`), **Auto-Detected One-Click Updates (`cli.mjs`)**, and **On-Demand CLI Execution (`npx -y` / `uvx`)**.

---

## ⚡ 1. Quick Start, Installation & Updating (⏱️ < 1 Minute)

Run a single command inside **any project terminal** (e.g., a fresh Next.js repo in VS Code) to launch the interactive **Ocean-Amber Truecolor TUI** and configure your environment:

### Option A: Run via `npx` (Click to copy)
~~~bash
npx -y github:Vincent-CLY/agentic-skills-mcp
~~~

### Option B: Run via `pnpm dlx` (Click to copy)
~~~bash
pnpm dlx github:Vincent-CLY/agentic-skills-mcp
~~~

### Option C: Run via `curl` (Supports macOS `zsh` & Linux `bash`)
~~~bash
curl -fsSL [https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh](https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh) | zsh
~~~

### Option D: Instant One-Command Update / Replace All (When rules change on GitHub)
~~~bash
curl -fsSL [https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh](https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh) | zsh -s -- --update
~~~

### Option E: Non-Interactive Auto Mode (For GitHub Codespaces Dotfiles)
~~~bash
bash install.sh --auto
~~~

### What the Interactive Installer (`cli.mjs`) Does:
1. **Detects Existing Installations & Checks SHA-256 Hashes**: Automatically scans your project to see which agents are already configured and whether an update is available on GitHub, offering a 1-click **`⚡ Quick Update / Replace All Existing Rules`** option.
2. **Creates Zero Unused Folders**: Creates **only** the directories for the AI tools you select with Arrow Keys & Spacebar (e.g., `.clinerules/` for Cline and `.github/instructions/` for Copilot).
3. **Preserves Framework-Native `AGENTS.md`**: Uses additive rule folders so Next.js or framework-native `AGENTS.md` files remain 100% untouched.
4. **Keeps `git status` Clean**: Automatically appends injected rule paths to `.git/info/exclude`.

---

## 📂 2. Active Rule Files & Architecture

| File | Scope & Trigger | Core Responsibility | Why Separated? |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **Always Active** (`**/*`) | Controls communication style (`I-Have-ADHD` + `ASD-STE100`), ideation, 5-advisor decision council, `Manware` anti-vibe-coding learning mentor, `Anatomy` interactive explanations, `Ponytail` coding guardrails, debugging, and security review. | Ensures foundational engineering discipline, active learning, and clear communication on every turn. |
| **`01-ui-ux-master.md`** | **Auto-Triggered on Frontend** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | Enforces `Impeccable` + `Unslop` 9-Pass anti-AI-slop rules, `Hallmark`/`Taste` design tokens, `Vercel` interface guidelines, `designer-skills` state machines, and `Emil Kowalski` + `MotionSites` animation physics. | Saves context tokens during backend/API tasks and attaches automatically only when touching UI files. |
| **`cli.mjs` & `install.sh`** | **Interactive TUI Installer & Updater** | Zero-dependency 24-bit Truecolor CLI that fetches rules, detects outdated files, configures agent folders, and installs skill packs. | Enables instant setup and 1-click updates across local machines and GitHub Codespaces. |

---

## 🧠 3. Installed Skills & Why They Were Selected

All skills in this OS **auto-trigger based on conversation context**—you do not need to memorize slash commands.

### A. Communication, Visual Explanation & Active Learning Skills (`00-core-os.md`)
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | Enforces a progress banner on Line 1, immediate bottom-line verdict on Line 2, max 5 items per list (`即刻做` / `遲啲先`), time estimates (`⏱️`), tangent parking (`🅿️`), and a single `<2 min` closing action (`👉 下一步`). | Eliminates AI walls of text and keeps high-velocity engineering sessions focused. |
| **`ASD-STE100`** | Simplified Technical English precision: active voice only, one word = one meaning, strict 2-line error reporting (`Cause -> Fix`). | Replaces `Caveman` (which strips critical technical nuance) with crisp, unambiguous engineering clarity. |
| **`Manware's AI Learning Toolkit`** (`i-am-manware/Manware-s-AI-Learning-Toolkit`) | Enforces **Anti-Vibe-Coding Co-Builder Mode**: drafts UI 1 section at a time with a 3-bullet Architecture X-Ray and 1 `/read` verification question; uses `Predict -> /hint -> Implement -> /explain -> /autopsy` for core TypeScript/React logic (say `"ship this"` for full auto-coding). | Ensures you genuinely master Next.js, React, and TypeScript while building fast, instead of passively copy-pasting black-box code. |
| **`Anatomy`** (`wheresryan22/anatomy`) + **`Annotated-Illustration`** + **`3Blue1Brown (Manim)`** | Explains abstract technical concepts by inventing a concrete physical machine and building interactive isometric **SVG / WebGL / 3D / React** figures, alongside ASCII/Mermaid state diagrams and runnable `Manim` scripts. | Turns invisible system behaviors (like caching, connection pools, or React hydration) into tangible, interactive visual models. |

### B. Ideation, Specification & Decision Skills (`00-core-os.md`)
| Skill | Auto-Trigger Context | What It Does & Why Selected |
| :--- | :--- | :--- |
| **`ADHD 5-Frame Ideation`** | Sharing a rough idea or open design problem | Silently bans the top 3 textbook answers and generates 5 orthogonal solutions (`🏛️ Regulator`, `⚡ Speedrunner`, `🧬 Biology`, `🪙 $0 Budget`, `🧒 10yo Simplifier`) scored on `[Novelty, Viability, Fit]`, highlighting `★ Best Pick` and `⚠️ Trap`. |
| **`grill-me` & `to-spec`** (`matt-pocock/skills`) | Requirements have >1 unstated assumption | Stops the AI from writing speculative code; asks 1 high-leverage question at a time until constraints are locked into an atomic spec. |
| **`Decision Council`** (`get-more-perspectives`) | Comparing libraries, architectures, or workflows | Convenes a 5-Advisor panel (`🔧 Operator`, `⚠️ Skeptic`, `🚀 Visionary`, `👤 Customer`, `💰 Finance`) to vote and narrow choices down to the top `N` survivor(s) instead of saying "it depends". |

### C. Engineering, Debugging & Security Skills (`00-core-os.md`)
| Skill | Auto-Trigger Context | What It Does & Why Selected |
| :--- | :--- | :--- |
| **`Karpathy x Ponytail 7-Rung Ladder`** | Writing or refactoring any code | Walks 7 rungs before coding: *(1) Does it need to exist? -> (2) In repo? -> (3) Stdlib? -> (4) Existing dep? -> (5) Clean 1-liner? -> (6) Surgical diff -> (7) Never cut boundary safety*. Prevents over-engineering. |
| **`Superpowers`** (`obra/superpowers`) | Fixing bugs, flaky tests, or building features | Enforces 4-stage `systematic-debugging` (Reproduce -> Isolate -> Root Cause -> Fix) and `test-driven-development` (`RED -> GREEN -> REFACTOR`). |
| **`Security Review Team` & `/ponytail-review`** | Completing any code diff | Audits diffs in strict order: `1. Correct -> 2. Safe (OWASP/XSS/Auth/Secrets) -> 3. Holds Under Load -> 4. Tested -> 5. Fast (Core Web Vitals) -> 6. Lean`. |
| **`Skill-Creator`** (`Anthropic-skills`) | Repeating a multi-step workflow 2+ times | Proactively offers to codify recurring workflows into a reusable `SKILL.md`. |

### D. Web Design, Motion & Anti-AI-Slop Skills (`01-ui-ux-master.md`)
| Skill | What It Does | Why It Was Selected |
| :--- | :--- | :--- |
| **`Impeccable`** + **`Unslop` 9-Pass Protocol** (`heydamir/unslop`) | Combines `npx -y impeccable detect` (62 static lint rules) with `Unslop`'s 9-Pass redline sequence (`Spacing -> Color -> Icons -> Copy -> Type -> Layout -> Details -> Visuals -> Motion`). | Eliminates purple/indigo AI gradients, glowing blobs, emoji headers, and shouty copy while systematically refactoring vibecoded UIs. |
| **`Hallmark` + `taste-skill` + `ui-ux-pro-max`** | Locks surface hierarchy, font pairings (`fontpair.co`, `chalk.ist`), color palettes (`pigment.shapefactory.co`), UX laws (`lawsofux.com`), and asymmetric hero layouts before writing JSX/CSS. | Ensures every greenfield frontend looks art-directed rather than template-generated. |
| **`web-design-guidelines`** (Vercel) + **`designer-skills`** (`Owl-Listener`) | Enforces `tabular-nums`, `text-wrap: balance`, `:focus-visible` rings, zero CLS skeletons, URL state sync, and explicit **Component State Machines (`Idle -> Loading -> Success -> Empty -> Error`)**. | Guarantees production accessibility and complete edge-case interaction flows without installing 270+ bloated enterprise plugins. |
| **`Emil Kowalski Motion`** + **`MotionSites` Recipes** | Enforces custom exponential easing (`cubic-bezier(0.22, 1, 0.36, 1)`), compositor-only properties (`transform`, `opacity`), and 55+ cinematic hero recipes (liquid glass, word-by-word blur reveals, mouse-scrubbed video, spotlight reveals). | Delivers both snappy SaaS micro-interactions and award-winning landing page choreography. |

---

## 🛠️ 4. Installed Packages, MCP Toolchain & Reference Routers

### A. CLI & MCP Packages
| Package / Tool | Install / On-Demand Command | Role & Why Selected |
| :--- | :--- | :--- |
| **`Graphify`** (`graphifyy`) | `uvx --from graphifyy graphify .` | Builds a local Tree-sitter AST dependency & call-chain graph (`graphify-out/`). Saves **~71x context tokens** compared to raw file grepping. |
| **`Nvidia Auto Ontology`** | Schema Protocol in `00-core-os.md` | Extracts strict Entity-Relation triples and schema invariants before designing databases, knowledge graphs, or RAG pipelines. |
| **`Context7` MCP** | `npx -y @upstash/context7-mcp` | Pulls version-exact official documentation (Next.js App Router, React 19, Tailwind v4, GSAP) so the AI never hallucinates outdated APIs. |
| **`Exa` MCP** | Configured via MCP client | Performs semantic neural search across technical blogs, papers, and GitHub repositories. |
| **`Scrapling` & `Lightpanda`** | `pip install scrapling` / Headless Zig Browser | Fast, low-RAM web extraction with Cloudflare Turnstile stealth and adaptive DOM tracking. Replaces slow multi-agent LLM web searches. |
| **`Crawlee`** | Used when writing crawler scripts | Selected automatically when building persistent, queue-based, rate-limited multi-page scrapers. |
| **`Playwright`** | `npx -y playwright` | Powers the **Auto-Confirmation Loop**: opens `localhost` after UI/route edits to verify zero console/hydration errors across desktop (`1440px`) and mobile (`375px`). |
| **`AI Access Routers`** | `Omniroute`, `OpenRouter`, `Nvidia NIM`, `9router`, `Nararouter`, `AIMixHub` | Provides multi-provider failover and routes high-volume extraction/embedding tasks to low-cost or free high-throughput endpoints. |

### B. Curated UI & Animation Reference Matrix (Built into `01-ui-ux-master.md`)
- **Copy-Paste Animated React/Tailwind Blocks**: `21st.dev`, `reactbits.dev`, `Magic UI`, `Bklit UI`, `Originkit`, `ui.live`
- **Animation Engines (Escalation Order)**: CSS Transitions -> `Motion` (Framer) -> `GSAP` (`gsap.com`) / `Anime.js` -> `Vivus SVG` -> `Zdog` (`zzz.dog`) -> `Three.js` + `threeui.com` + `Theatre.js`
- **Component Specs & Developer Assets**: `component.gallery`, `stacksorted.com`, `getlayers.ai`, `design-resources-for-developers`
- **Flows, Wireframes & High-Craft Showcases**: `Mobbin`, `Relume.ai`, `Pinterest`, `Godly.website`, `Awwwards`, `motionsites`, `curated.design`, `Landbook`, `startupwebsites.co`, `dark.design`, `httpster.net`, `websitevice.com`

---
---

# 🇭🇰 廣東話完整文檔 (Cantonese Version)

一套零廢話、零臃腫、全靠對話語境與檔案類型**自動觸發**嘅 **全平台 AI Agent 作業系統**，完美支援 **VS Code (Cline & GitHub Copilot)**、**GitHub Codespaces**、**Cursor**、**Claude Code**、**OpenAI Codex** 同 **Hermes**。

呢套系統唔會將所有嘢塞入單一巨型 Prompt，拒絕令你盲目「Vibe-Code」出一堆自己睇唔明嘅 Code，亦唔會覆蓋 Next.js 等框架原生自帶嘅 `AGENTS.md`，而係採用 **雙模組分離架構**（`00-core-os.md` + `01-ui-ux-master.md`）配搭 **SHA-256 自動偵測更新器 (`cli.mjs`)** 及 **即叫即行工具鏈 (`npx -y` / `uvx`)**。

> 💡 **修改預設對話語言位置**：
> 系統預設要求 AI 用 **自然香港廣東話口語夾雜英文 Tech Terms** 溝通（所有 Code 同 CLI 指令維持純英文）。
> - **點樣轉語言**：打開 **`00-core-os.md`** -> 搵 **`## 1. I-Have-ADHD x ASD-STE100 Communication Protocol`** -> 修改第 1 點 **`1. Language:`**（第 12 行）做你想用嘅語言即可。

---

## ⚡ 1. 極速安裝與一鍵更新指南（⏱️ 預計：< 1 分鐘）

喺任何新 Project 嘅 VS Code Terminal 入面，揀下面任何一行指令直接撳右上角 **Copy** 貼落去行，就會彈出 **深海青配琥珀金（Ocean-Amber）方向鍵互動選單**：

### 方式 A：用 `npx` 一行即時安裝（一撳即 Copy）
~~~bash
npx -y github:Vincent-CLY/agentic-skills-mcp
~~~

### 方式 B：用 `pnpm dlx` 一行即時安裝（一撳即 Copy）
~~~bash
pnpm dlx github:Vincent-CLY/agentic-skills-mcp
~~~

### 方式 C：用 `curl` 直接安裝（支援 macOS `zsh` 及 Linux `bash`）
~~~bash
curl -fsSL [https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh](https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh) | zsh
~~~

### 方式 D：0.5 秒極速無問題更新現有規則（當你喺 GitHub 改咗規則之後）
~~~bash
curl -fsSL [https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh](https://raw.githubusercontent.com/Vincent-CLY/agentic-skills-mcp/main/install.sh) | zsh -s -- --update
~~~

### 方式 E：GitHub Codespaces 自動靜默安裝模式
~~~bash
bash install.sh --auto
~~~

### 呢個互動安裝器（`cli.mjs`）會幫你做啲咩？
1. **自動偵測舊版並支援一鍵 Replace All**：打開時會自動掃描當前 Project 裝咗邊幾款 AI 規則，並同 GitHub 最新版比對 SHA-256；如果已經裝過，Menu 第一項會自動變成 **`⚡ Quick Update / Replace All Existing Rules`**，撳一下 `Enter` 即刻替換晒所有檔案。
2. **零多餘垃圾 Folder**：你用方向鍵同空白鍵揀邊款 AI（例如只揀 Cline 同 Copilot），佢就只會建立 `.clinerules/` 同 `.github/instructions/`，絕唔會喺硬碟製造無用嘅空資料夾。
3. **100% 保護原生 `AGENTS.md`**：採用疊加式規則資料夾，完全唔會覆蓋 Next.js 安裝時自帶嘅 `AGENTS.md`。
4. **保持 Git 乾淨**：自動將規則路徑寫入本地 `.git/info/exclude`，唔會污染 `git status`。

---

## 📂 2. 核心規則檔架構與分工

| 檔案名稱 | 生效範圍與觸發條件 | 核心職責 | 點解要拆開？ |
| :--- | :--- | :--- | :--- |
| **`00-core-os.md`** | **全天候常駐** (`**/*`) | 負責溝通排版（`I-Have-ADHD` + `ASD-STE100`）、5 維度腦震盪、5 人決策委員會、`Manware` 防 Vibe-Coding 導師模式、`Anatomy` 互動圖解、`Ponytail` 7 級寫 Code 階梯、除錯同安全審查。 | 確保每一輪對話都守住最高工程紀律、主動思考同清晰溝通。 |
| **`01-ui-ux-master.md`** | **掂親前端檔案自動載入** (`*.tsx`, `*.jsx`, `*.vue`, `*.svelte`, `*.css`, `components/**`, `app/**`) | 強制執行 `Impeccable` + `Unslop` 9 步執漏、字體與色板鎖定、Vercel 介面規範、`designer-skills` 狀態機、以及 `Emil Kowalski` + `MotionSites` 動畫特效規範。 | 寫純 Backend / API 時唔會浪費 Context Token，一開前端檔案即刻自動掛載大師級設計規範。 |
| **`cli.mjs` & `install.sh`** | **互動安裝與更新器** | 零外部依賴 24-bit Truecolor 互動介面，自動從 GitHub 拉取最新 `.md` 檔、比對版本並裝埋 CLI 工具。 | 跨電腦、跨專案一行指令搞掂晒所有配置同更新。 |

---

## 🧠 3. 已整合技能包（Skills）與入選原因

呢套系統入面嘅所有技能都會**根據你講嘢嘅語境自動觸發**，完全唔使背指令：

### A. 溝通排版、立體圖解與防 Vibe-Coding 學習技能 (`00-core-os.md`)
| 技能名稱 | 實際功能 | 點解揀佢？（入選原因） |
| :--- | :--- | :--- |
| **`I-Have-ADHD`** | 強制第 1 行顯示進度 Banner、第 2 行直接講結論、每個 List 最多 5 點（超額拆分為 `即刻做` / `遲啲先`）、標註預計時間（`⏱️`）、支線放底（`🅿️`）、最後必備 1 個 2 分鐘內搞掂嘅 `👉 下一步`。 | 徹底消滅 AI 長篇大論嘅廢話牆，一眼睇穿重點。 |
| **`ASD-STE100`** | 航太級簡化技術英語規範：只准用主動語態、一詞一義、報錯嚴格限制 2 行（`Cause -> Fix`）。 | 完美取代會斬走重要技術細節嘅 `Caveman`，做到極簡得嚟 100% 精準。 |
| **`Manware's AI Learning Toolkit`** (`i-am-manware`) | **防 Vibe-Coding 共建導師模式**：起 UI 時每次只出 1 個 Section 草稿，附帶 **3 點架構 X 光片 + 1 條 `/read` 閱讀題**確認你睇得明；寫核心 React/TS 邏輯時行 `你先預測 -> /hint 逐步提示 -> 親手寫 -> /explain 驗收 -> /autopsy 復盤`（講句 `"ship this"` 即切換全自動代寫）。 | 幫你快速起貨兼破除白紙恐懼，同時逼你真正掌握 Next.js / React / TypeScript 底層邏輯，唔會淪為只識 Copy & Paste 嘅 Vibe Coder。 |
| **`Anatomy`** (`wheresryan22/anatomy`) + **`Annotated-Illustration`** + **`3Blue1Brown (Manim)`** | 解釋抽象技術概念時，自動發明一個對應嘅真實機械結構（例如用彈珠鎖解釋 Cache），生成**互動式等軸測 SVG / WebGL / 3D / React 組件圖解**，配合 ASCII 狀態流圖或可執行嘅 `Manim` 動畫腳本。 | 將睇唔見嘅系統運作（如 DB Connection Pool、React 渲染流）變成可以親手撳、親眼睇嘅立體機械模型。 |

### B. 腦震盪、需求逼供與決策委員會 (`00-core-os.md`)
| 技能名稱 | 自動觸發語境 | 實際功能與入選原因 |
| :--- | :--- | :--- |
| **`ADHD 5-Frame Ideation`** | 提出初步想法、開放式設計或卡關時 | 自動靜音頭 3 個最平庸嘅罐頭答案，強制從 5 個獨立視角（`🏛️ 規管者`、`⚡ Speedrunner`、`🧬 生物自癒`、`🪙 $0 成本`、`🧒 10 歲降維`）出方案並評分，標出 `★ 奇招之選` 同 `⚠️ 伏位陷阱`。 |
| **`grill-me` & `to-spec`** (`matt-pocock/skills`) | 需求有超過 1 個模糊假設時 | 禁止 AI 盲目估計寫 Code；每次只問 1 條最關鍵嘅問題逼供需求，鎖定晒邊界先出結構化 Spec。 |
| **`Decision Council`** (`get-more-perspectives`) | 比較方案、揀 Library 或架構取捨時 | 自動召集 5 人決策委員會（`🔧 工程執行`、`⚠️ 風險懷疑論`、`🚀 遠景槓桿`、`👤 用家體驗`、`💰 成本財務`）投票表決，幫你篩選到最後 `N` 個贏家，絕唔講「視乎情況」。 |

### C. 寫 Code 護欄、除錯與安全審查 (`00-core-os.md`)
| 技能名稱 | 自動觸發語境 | 實際功能與入選原因 |
| :--- | :--- | :--- |
| **`Karpathy x Ponytail 7 級階梯`** | 寫任何新 Code 或重構時 | 寫 Code 前先走 7 級階梯：*(1) 使唔使存在？ -> (2) Repo 有無現成？ -> (3) 原生 Stdlib 搞唔搞得掂？ -> (4) 現有依賴有無？ -> (5) 清晰一行寫法 -> (6) 手術刀最小修改 -> (7) 死守邊界安全*。徹底根治 Over-engineering。 |
| **`Superpowers`** (`obra/superpowers`) | 報錯、修 Bug 或寫新功能時 | 強制執行 4 步根源除錯（`systematic-debugging`：重現 -> 隔離 -> 搵根源 -> 修復）同埋 `TDD` 紅綠燈測試循環。 |
| **`Security Review Team` & `/ponytail-review`** | 完成任何 Code 修改時 | 按嚴格優先級審查：`1. 正確性 -> 2. 安全性 (OWASP/XSS/Auth/Secrets) -> 3. 高負載穩定度 -> 4. 測試覆蓋 -> 5. 效能 (Core Web Vitals) -> 6. 精簡度`。 |
| **`Skill-Creator`** (`Anthropic-skills`) | 同一個多步驟流程重複做咗 2 次以上 | 主動提議幫你將個流程打包成可重用嘅 `SKILL.md`。 |

### D. 前端設計、動畫物理與防 AI 罐頭介面 (`01-ui-ux-master.md`)
| 技能名稱 | 實際功能 | 點解揀佢？（入選原因） |
| :--- | :--- | :--- |
| **`Impeccable`** + **`Unslop` 9 步紅線改造** (`heydamir/unslop`) | 結合 `npx -y impeccable detect`（62 條靜態檢測規則）同 `Unslop` 嘅 9 步執漏順序（`間距 -> 顏色 -> Icon -> 文案去水分 -> 字體 -> 排版 -> 標誌細節 -> 產品視覺 -> 動態`）。 | 一鍵捉晒藍紫霓虹漸變、發光波波、Emoji 標題同罐頭三欄卡片，將 Vibe-code 頁面改造成有靈魂嘅設計。 |
| **`Hallmark` + `taste-skill` + `ui-ux-pro-max`** | 寫 Code 前先鎖定視覺層次、字體配搭（`fontpair.co`、`chalk.ist`）、色板（`pigment.shapefactory.co`）、UX 定律（`lawsofux.com`）同非對稱 Hero 排版。 | 確保每個新網站都有設計師 Art Direction 級數嘅質感。 |
| **`web-design-guidelines`** (Vercel) + **`designer-skills`** (`Owl-Listener`) | 強制數字用 `tabular-nums`、標題 `text-wrap: balance`、鍵盤 `:focus-visible` 焦點環、零 CLS 骨架屏，以及**完整組件狀態機（`Idle -> Loading -> Success -> Empty -> Error`）**。 | 唔使裝齊 273 個臃腫插件，直接抽最核心嘅生產級細節同錯誤恢復流程。 |
| **`Emil Kowalski 動畫規範`** + **`MotionSites` 電影級配方** | 限制只動畫化 `transform` 同 `opacity`，強制用指數級 Easing（`cubic-bezier(0.22, 1, 0.36, 1)`）或彈簧物理，並內置 `MotionSites` 55+ 款電影級 Hero 配方（液態玻璃、逐字模糊揭示、滑鼠控制影片幀、聚光燈特效）。 | 同時兼顧極速順滑嘅日常互動同埋 Awwwards 級數嘅 Landing Page 視覺衝擊。 |

---

## 🛠️ 4. 自動化工具鏈、MCP 與設計參考路由

| 工具 / 套件名稱 | 執行 / 按需呼叫指令 | 核心作用與入選原因 |
| :--- | :--- | :--- |
| **`Graphify`** (`graphifyy`) | `uvx --from graphifyy graphify .` | 用本地 Tree-sitter AST 建立專案依賴與呼叫圖譜（`graphify-out/`），比盲目 grep 檔案**節省高達 71 倍 Context Token**。 |
| **`Nvidia Auto Ontology`** | 內置於 `00-core-os.md` | 設計 DB Schema、RAG 或知識圖譜前，先抽取嚴格嘅 Entity-Relation 同邊界 Invariant。 |
| **`Context7` MCP** | `npx -y @upstash/context7-mcp` | 即時拉取最新官方 Docs（Next.js App Router、React 19、Tailwind v4、GSAP），杜絕 AI 寫出過時舊 API。 |
| **`Exa` MCP** | 於 MCP Client 配置 | 語意搜尋高質技術文章、論文同 GitHub 源碼。 |
| **`Scrapling` & `Lightpanda`** | `pip install scrapling` / Zig 極速無頭瀏覽器 | 自帶 Cloudflare Turnstile 隱身穿透同動態 DOM 追蹤，取代又貴又慢嘅 Multi-agent LLM 搜尋。 |
| **`Crawlee`** | 寫大型爬蟲腳本時自動選用 | 需要 Queue、Rate-limit 同自動 Retry 嘅多頁爬蟲時自動升級使用。 |
| **`Playwright`** | `npx -y playwright` | 驅動 **自動開 Browser 驗收循環**：改完 UI 自動檢查 Console 零報錯，並確認桌面（`1440px`）同手機（`375px`）排版正常。 |
| **`AI Access Routers`** | `Omniroute`, `OpenRouter`, `Nvidia NIM`, `9router`, `Nararouter`, `AIMixHub` | 多路由自動 Failover，將大批量數據抽取分流去免費/低成本嘅 `Nvidia NIM` 或 Flash 模型。 |
