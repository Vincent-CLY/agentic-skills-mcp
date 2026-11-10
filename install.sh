#!/usr/bin/env bash
set -e

GITHUB_REPO="${AGENT_OS_REPO:-Vincent-CLY/agentic-skills-mcp}"
GITHUB_BRANCH="${AGENT_OS_BRANCH:-main}"
RAW_BASE_URL="https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}"

if command -v node >/dev/null 2>&1; then
  # 建立獨立暫存資料夾，保證副檔名嚴格鎖定為 cli.mjs (100% 兼容 macOS BSD mktemp)
  TMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t 'agent_os')"
  TMP_CLI="$TMP_DIR/cli.mjs"
  trap 'rm -rf "$TMP_DIR"' EXIT

  if [ -f "$(dirname "$0")/cli.mjs" ]; then
    cp -f "$(dirname "$0")/cli.mjs" "$TMP_CLI"
  else
    curl -fsSL "$RAW_BASE_URL/cli.mjs" -o "$TMP_CLI"
  fi

  # 將 TTY 轉駁至鍵盤，令 curl | zsh 完美支援方向鍵與空白鍵
  if [ -c /dev/tty ]; then
    node "$TMP_CLI" "$@" </dev/tty
  else
    node "$TMP_CLI" "$@"
  fi
  exit 0
fi

echo "⚠️ Node.js not detected. Falling back to quick minimal download..."
mkdir -p .clinerules .github/instructions
curl -fsSL "$RAW_BASE_URL/00-core-os.md" -o .clinerules/00-core-os.md
curl -fsSL "$RAW_BASE_URL/01-ui-ux-master.md" -o .clinerules/01-ui-ux-master.md
echo "✅ Rules downloaded to .clinerules/."
