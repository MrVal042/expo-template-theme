#!/usr/bin/env zsh
set -euo pipefail

# init-expo.sh
# Small script to initialize a package.json (if missing), install the latest
# `expo` package, and run `npx expo install` on a curated list of dependencies
# found in `expo-deps.txt`. This lets `expo install` pick versions matching the
# installed expo SDK (latest by default).

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPS_FILE="$ROOT_DIR/expo-deps.txt"

echo "Template init: create package.json (if missing), install expo, then run 'npx expo install' for listed deps"

# Choose package manager by argument or default to npm
PKG_MANAGER=${1:-npm}

#!/usr/bin/env zsh
set -euo pipefail

# init-expo.sh
# Small script to initialize a package.json (if missing), install the latest
# `expo` package, and run `npx expo install` on a curated list of dependencies
# found in `expo-deps.txt`. This lets `expo install` pick versions matching the
# installed expo SDK (latest by default).

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPS_FILE="$ROOT_DIR/expo-deps.txt"

echo "Template init: create package.json (if missing), install expo, then run 'npx expo install' for listed deps"

# If the user provided a package manager as the first arg, use it. Otherwise try to detect one.
USER_PKG_MANAGER=${1:-}
if [ -n "$USER_PKG_MANAGER" ]; then
  PKG_MANAGER="$USER_PKG_MANAGER"
else
  if command -v pnpm >/dev/null 2>&1; then
    PKG_MANAGER=pnpm
  elif command -v yarn >/dev/null 2>&1; then
    PKG_MANAGER=yarn
  else
    PKG_MANAGER=npm
  fi
  echo "Detected package manager: $PKG_MANAGER"
fi

case "$PKG_MANAGER" in
  npm)
    INIT_CMD="npm init -y"
    ADD_CMD="npm install"
    ;;
  yarn)
    INIT_CMD="yarn init -y"
    ADD_CMD="yarn add"
    ;;
  pnpm)
    INIT_CMD="pnpm init -y"
    ADD_CMD="pnpm add"
    ;;
  *)
    echo "Unsupported package manager: $PKG_MANAGER"
    echo "Supported: npm | yarn | pnpm"
    exit 1
    ;;
esac

if [ ! -f "$ROOT_DIR/package.json" ]; then
  echo "No package.json found — creating one with: $PKG_MANAGER"
  eval "$INIT_CMD"
fi

echo "Installing 'expo' (latest) as a project dependency"
eval "$ADD_CMD expo"

if [ ! -f "$DEPS_FILE" ]; then
  echo "Cannot find $DEPS_FILE — create it with a list of dependencies (one per line)."
  exit 1
fi

DEPS=$(tr '\n' ' ' < "$DEPS_FILE" | sed 's/  */ /g' | sed 's/ $//')
if [ -z "$DEPS" ]; then
  echo "No dependencies listed in $DEPS_FILE"
  exit 0
fi

echo "Running: npx expo install $DEPS"
# Use npx so we pick up local expo or fetch latest; expo install will choose compatible versions
npx expo install $DEPS

echo "Initialization complete. Start the project with: npx expo start"
echo "Tip: make the script executable: chmod +x $0"
