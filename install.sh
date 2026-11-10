#!/usr/bin/env bash
set -e

GITHUB_REPO="${AGENT_OS_REPO:-Vincent-CLY/agentic-skills-mcp}"
GITHUB_BRANCH="${AGENT_OS_BRANCH:-main}"
RAW_BASE_URL="https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}"

# 1. 檢查有無 Node.js (開發者環境 99% 有裝)
if command -v node >/dev/null 2>&1; then
  TMP_CLI="$(mktemp -t agent_cli.XXXXXX.mjs)"
  trap 'rm -f "$TMP_CLI"' EXIT
  
  if [ -f "$(dirname "$0")/cli.mjs" ]; then
    cp -f "$(dirname "$0")/cli.mjs" "$TMP_CLI"
  else
    curl -fsSL "$RAW_BASE_URL/cli.mjs" -o "$TMP_CLI"
  fi
  
  # 關鍵：利用 </dev/tty 解決 curl | bash 管道吞噬箭頭鍵同空白鍵嘅問題
  if [ -c /dev/tty ]; then
    node "$TMP_CLI" "$@" </dev/tty
  else
    node "$TMP_CLI" "$@"
  fi
  exit 0
fi

# 2. 極端無 Node.js 情況下嘅 Graceful Fallback
echo "⚠️ Node.js not detected. Falling back to quick minimal download..."
mkdir -p .clinerules .github/instructions
curl -fsSL "$RAW_BASE_URL/00-core-os.md" -o .clinerules/00-core-os.md
curl -fsSL "$RAW_BASE_URL/01-ui-ux-master.md" -o .clinerules/01-ui-ux-master.md
echo "✅ Rules downloaded to .clinerules/."
