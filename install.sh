#!/usr/bin/env bash
set -e

# 改做你嘅 GitHub 用戶名同 Repo 名 (供單獨執行 install.sh 時自動上網 Fetch 檔案)
GITHUB_REPO="${AGENT_OS_REPO:-Vincent-CLY/agentic-skills-mcp}"
GITHUB_BRANCH="${AGENT_OS_BRANCH:-main}"
RAW_BASE_URL="https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" 2>/dev/null && pwd || pwd)"
# 當用 pnpm dlx / npx 執行時，INIT_CWD 會指向你真正開緊嗰個 Project 目錄
TARGET_DIR="${INIT_CWD:-$(pwd)}"

echo "=========================================================="
echo "🚀 Agent-OS Auto-Fetcher & Installer (Ponytail x ADHD)"
echo "📂 目標專案路徑: $TARGET_DIR"
echo "=========================================================="

# 自動準備 00 同 01 檔案：如果包入面已經有（pnpm dlx 模式）就直接用；如果無（單獨執行 script）就自動從 GitHub Fetch！
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

fetch_or_copy_md() {
  local filename="$1"
  if [ -f "$SCRIPT_DIR/$filename" ]; then
    cp -f "$SCRIPT_DIR/$filename" "$TMP_DIR/$filename"
  else
    echo "🌐 正在從 GitHub ($GITHUB_REPO) 自動下載最新 $filename ..."
    curl -fsSL "$RAW_BASE_URL/$filename" -o "$TMP_DIR/$filename"
  fi
}

fetch_or_copy_md "00-core-os.md"
fetch_or_copy_md "01-ui-ux-master.md"

# 互動式 Menu (即使透過 curl | bash 或 pnpm dlx 執行，都能透過 /dev/tty 正常問問題)
if [ "$1" = "--auto" ] || [ ! -c /dev/tty ]; then
  SCOPE_CHOICE="1"
  AGENT_CHOICES="1 2"
  DEP_CHOICE="2"
else
  echo ""
  echo "📍 [1/3] 你想將規則安裝去邊度？"
  echo "  1) 只安裝喺當前 Project ($TARGET_DIR) [推薦，唔改動系統其他地方]"
  echo "  2) 只安裝喺電腦 Global 目錄"
  echo "  3) 當前 Project + Global 兩邊都裝"
  read -rp "👉 請輸入選項 [預設 1]: " SCOPE_CHOICE </dev/tty
  SCOPE_CHOICE="${SCOPE_CHOICE:-1}"

  echo ""
  echo "🤖 [2/3] 你用緊邊款 AI？（可多選並用空格隔開，只會建立你揀嘅 Folder，零多餘檔案）"
  echo "  1) VS Code - Cline (.clinerules/)"
  echo "  2) VS Code - GitHub Copilot (.github/instructions/)"
  echo "  3) Cursor (.cursor/rules/)"
  echo "  4) Claude Code (.claude/rules/)"
  echo "  5) OpenAI Codex / Hermes (.agents/)"
  read -rp "👉 請輸入選項 [預設: 1 2]: " AGENT_CHOICES </dev/tty
  AGENT_CHOICES="${AGENT_CHOICES:-1 2}"

  echo ""
  echo "📦 [3/3] 要唔要自動安裝埋 Skills Packs 同 CLI 依賴？"
  echo "  1) 一鍵全裝齊 (Skills Packs + Impeccable + Playwright + Graphify + Scrapling)"
  echo "  2) 只裝核心 Skills Packs (Matt Pocock + Superpowers + Emil Kowalski + Impeccable)"
  echo "  3) 唔預先安裝，留返寫 Code 時由 AI 自動用 npx -y / uvx 即時跑 (最慳位)"
  read -rp "👉 請輸入選項 [預設 2]: " DEP_CHOICE </dev/tty
  DEP_CHOICE="${DEP_CHOICE:-2}"
fi

# 自動加入 .git/info/exclude，保持 git status 100% 乾淨，唔撞 Next.js 原生 AGENTS.md
add_git_exclude() {
  local pattern="$1"
  if [ -d "$TARGET_DIR/.git" ]; then
    mkdir -p "$TARGET_DIR/.git/info"
    grep -qxF "$pattern" "$TARGET_DIR/.git/info/exclude" 2>/dev/null || echo "$pattern" >> "$TARGET_DIR/.git/info/exclude"
  fi
}

install_project() {
  echo ""
  echo "📥 正在將最新 00 & 01 規則寫入當前 Project ($TARGET_DIR)..."
  add_git_exclude ".agent-context.md"

  for agent in $AGENT_CHOICES; do
    case "$agent" in
      1)
        mkdir -p "$TARGET_DIR/.clinerules"
        cp -f "$TMP_DIR/00-core-os.md" "$TARGET_DIR/.clinerules/00-core-os.md"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$TARGET_DIR/.clinerules/01-ui-ux-master.md"
        add_git_exclude ".clinerules/"
        echo "  ✅ VS Code Cline 已就緒 -> ./.clinerules/"
        ;;
      2)
        mkdir -p "$TARGET_DIR/.github/instructions"
        cp -f "$TMP_DIR/00-core-os.md" "$TARGET_DIR/.github/instructions/00-core-os.instructions.md"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$TARGET_DIR/.github/instructions/01-ui-ux-master.instructions.md"
        add_git_exclude ".github/instructions/00-core-os.instructions.md"
        add_git_exclude ".github/instructions/01-ui-ux-master.instructions.md"
        echo "  ✅ GitHub Copilot 已就緒 -> ./.github/instructions/"
        ;;
      3)
        mkdir -p "$TARGET_DIR/.cursor/rules"
        cp -f "$TMP_DIR/00-core-os.md" "$TARGET_DIR/.cursor/rules/00-core-os.mdc"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$TARGET_DIR/.cursor/rules/01-ui-ux-master.mdc"
        add_git_exclude ".cursor/rules/"
        echo "  ✅ Cursor 已就緒 -> ./.cursor/rules/"
        ;;
      4)
        mkdir -p "$TARGET_DIR/.claude/rules"
        cp -f "$TMP_DIR/00-core-os.md" "$TARGET_DIR/.claude/rules/00-core-os.md"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$TARGET_DIR/.claude/rules/01-ui-ux-master.md"
        add_git_exclude ".claude/rules/"
        echo "  ✅ Claude Code 已就緒 -> ./.claude/rules/"
        ;;
      5)
        mkdir -p "$TARGET_DIR/.agents"
        cp -f "$TMP_DIR/00-core-os.md" "$TARGET_DIR/.agents/AGENTS.md"
        add_git_exclude ".agents/"
        echo "  ✅ Codex / Hermes 已就緒 -> ./.agents/"
        ;;
    esac
  done
}

install_global() {
  echo ""
  echo "🌐 正在寫入電腦 Global 目錄..."
  for agent in $AGENT_CHOICES; do
    case "$agent" in
      1)
        mkdir -p "$HOME/Documents/Cline/Rules"
        cp -f "$TMP_DIR/00-core-os.md" "$HOME/Documents/Cline/Rules/00-core-os.md"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$HOME/Documents/Cline/Rules/01-ui-ux-master.md"
        echo "  ✅ Global Cline 已就緒 -> ~/Documents/Cline/Rules/"
        ;;
      4)
        mkdir -p "$HOME/.claude/rules"
        cp -f "$TMP_DIR/00-core-os.md" "$HOME/.claude/CLAUDE.md"
        cp -f "$TMP_DIR/00-core-os.md" "$HOME/.claude/rules/00-core-os.md"
        cp -f "$TMP_DIR/01-ui-ux-master.md" "$HOME/.claude/rules/01-ui-ux-master.md"
        echo "  ✅ Global Claude Code 已就緒 -> ~/.claude/"
        ;;
      5)
        mkdir -p "$HOME/.codex" "$HOME/.hermes"
        cp -f "$TMP_DIR/00-core-os.md" "$HOME/.codex/AGENTS.md"
        echo "  ✅ Global Codex / Hermes 已就緒 -> ~/.codex/"
        ;;
    esac
  done
}

case "$SCOPE_CHOICE" in
  1) install_project ;;
  2) install_global ;;
  3) install_project; install_global ;;
esac

if [ "$DEP_CHOICE" = "1" ] || [ "$DEP_CHOICE" = "2" ]; then
  echo ""
  echo "🛠️ 正在安裝 Skills Packs (Matt Pocock / Superpowers / Emil Kowalski / Anthropic / Addy Osmani)..."
  if command -v npx >/dev/null 2>&1; then
    npx -y skills add mattpocock/skills obra/superpowers emilkowalski/skills -g || true
    npm install -g impeccable || true
  fi
fi

if [ "$DEP_CHOICE" = "1" ]; then
  echo "🔬 正在安裝完整自動化工具鏈 (Playwright + Graphify + Scrapling)..."
  command -v npx >/dev/null 2>&1 && (npx -y playwright install chromium || true)
  if command -v pip >/dev/null 2>&1; then
    pip install -U graphifyy scrapling || true
  elif command -v pip3 >/dev/null 2>&1; then
    pip3 install -U graphifyy scrapling || true
  fi
  if command -v graphify >/dev/null 2>&1 && [ "$SCOPE_CHOICE" != "2" ]; then
    (cd "$TARGET_DIR" && graphify . || true)
    add_git_exclude "graphify-out/"
  fi
fi

echo ""
echo "🎉 搞掂！00 同 01 檔案已經自動 Fetch 並掛載完畢（原生 AGENTS.md 100% 保持原狀）！"
