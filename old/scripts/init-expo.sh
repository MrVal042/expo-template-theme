#!/usr/bin/env zsh
set -euo pipefail

# init-expo.sh
# Initialize a new Expo project with our template structure using create-expo-app

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPS_FILE="$ROOT_DIR/expo-deps.txt"

echo "Initializing new Expo project..."

# Use package manager from argument or default to yarn
PKG_MANAGER=${1:-yarn}
echo "Using package manager: $PKG_MANAGER"

# Verify package manager is supported
case "$PKG_MANAGER" in
  npm|yarn|pnpm)
    echo "Package manager: $PKG_MANAGER"
    ;;
  *)
    echo "Unsupported package manager: $PKG_MANAGER"
    echo "Supported: npm | yarn | pnpm"
    exit 1
    ;;
esac

# Create new Expo project with blank template
echo "Creating new Expo project with blank template..."
npx create-expo-app@latest . --template blank --no-install

# Install dependencies using the specified package manager
case "$PKG_MANAGER" in
  npm)
    npm install
    ;;
  yarn)
    yarn install
    ;;
  pnpm)
    pnpm install
    ;;
esac

# Install additional dependencies from expo-deps.txt
if [ -f "$DEPS_FILE" ]; then
  echo "Installing additional dependencies from expo-deps.txt..."
  DEPS=$(grep -v '^#' "$DEPS_FILE" | grep . | tr '\n' ' ')
  if [ -n "$DEPS" ]; then
    npx expo install $DEPS
  fi
fi

echo "✅ Initialization complete!"
echo "👉 Start the development server: npx expo start"
