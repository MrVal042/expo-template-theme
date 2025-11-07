#!/bin/bash
set -e

APP_NAME=${1:-my-expo-app}
REPO_URL="https://github.com/MrVal042/app-structure-expo-theme"
TMP_EXPO="temp-app"
TMP_REPO=".tmp-app-structure"

echo "🚀 Step 1: Creating new Expo project..."
npx create-expo-app@latest $TMP_EXPO --template blank-typescript

echo "📦 Step 2: Moving Expo files into current directory..."
mv $TMP_EXPO/* $TMP_EXPO/.* . 2>/dev/null || true
rm -rf $TMP_EXPO

echo "📂 Step 3: Cloning structure from $REPO_URL..."
git clone --depth 1 $REPO_URL $TMP_REPO

echo "📁 Step 4: Copying folders and files..."
[ -d "$TMP_REPO/app" ] && cp -r $TMP_REPO/app ./app
[ -d "$TMP_REPO/__test__" ] && cp -r $TMP_REPO/__test__ ./__test__
[ -d "$TMP_REPO/types" ] && cp -r $TMP_REPO/types ./types
[ -d "$TMP_REPO/scripts" ] && cp -r $TMP_REPO/scripts ./scripts
[ -f "$TMP_REPO/App.tsx" ] && cp $TMP_REPO/App.tsx ./App.tsx
[ -f "$TMP_REPO/.env" ] && cp $TMP_REPO/.env ./.env
[ -f "$TMP_REPO/env.ts" ] && cp $TMP_REPO/env.ts ./env.ts

echo "🧹 Step 5: Cleaning temp files..."
rm -rf $TMP_REPO

echo "🧩 Step 6: Installing dependencies..."
npm install @expo/vector-icons \
@gorhom/bottom-sheet \
@react-native-async-storage/async-storage \
@react-native-community/datetimepicker \
@react-navigation/bottom-tabs \
@react-navigation/elements \
@react-navigation/native \
@react-navigation/native-stack \
@tanstack/react-query \
axios \
dayjs \
expo-image \
expo-image-picker \
expo-secure-store \
react-hook-form \
react-native-edge-to-edge \
react-native-gesture-handler \
react-native-modal-datetime-picker \
react-native-otp-entry \
react-native-reanimated \
react-native-safe-area-context \
react-native-screens \
yup \
zustand

echo "🧰 Step 7: Installing dev dependencies..."
npm install --save-dev babel-plugin-module-resolver babel-plugin-dotenv-import typescript @types/react @types/react-native @types/yup

echo "🧠 Step 8: Configuring tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@components": ["app/components"],
      "@navigation": ["app/navigation"],
      "@constants": ["app/constants"],
      "@features": ["app/features"],
      "@services": ["app/services"],
      "@utils": ["app/utils"],
      "@store": ["app/store"],
      "@hooks": ["app/hooks"],
      "@data": ["app/data"]
    },
    "allowJs": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["app", "App.tsx", "__test__"]
}
EOF

echo "🔧 Step 9: Configuring babel.config.js..."
cat > babel.config.js << 'EOF'
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@navigation': './app/navigation',
            '@components': './app/components',
            '@constants': './app/constants',
            '@services': './app/services',
            '@features': './app/features',
            '@screens': './app/screens',
            '@control': './app/control',
            '@utils': ['./app/utils'],
            '@hooks': './app/hooks',
            '@store': './app/store',
            '@data': './app/data',
            '@assets': './assets'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ],
      [
        'dotenv-import',
        {
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true
        }
      ]
    ]
  }
}
EOF

echo "🧾 Step 10: Running template setup if available..."
if [ -f "./scripts/setup.sh" ]; then
  chmod +x ./scripts/setup.sh
  ./scripts/setup.sh
fi

echo "✅ Done. Your Expo app is ready!"
