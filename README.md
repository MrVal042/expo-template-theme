# Starter Template with React Navigation

This is a minimal starter template for React Native apps using Expo and React Navigation.

It includes the following:

- Example [Native Stack](https://reactnavigation.org/docs/native-stack-navigator) with a nested [Bottom Tab](https://reactnavigation.org/docs/bottom-tab-navigator)
- Web support with [React Native for Web](https://necolas.github.io/react-native-web/)
- TypeScript support and configured for React Navigation
- Automatic [deep link](https://reactnavigation.org/docs/deep-linking) and [URL handling configuration](https://reactnavigation.org/docs/configuring-links)
- Theme support [based on system appearance](https://reactnavigation.org/docs/themes/#using-the-operating-system-preferences)
- Expo [Development Build](https://docs.expo.dev/develop/development-builds/introduction/) with [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)
- Edge-to-edge configured on Android with [`react-native-edge-to-edge`](https://www.npmjs.com/package/react-native-edge-to-edge)

## Getting Started

1. Create a new project using this template:

   ```sh
   npx create-expo-app@latest --template react-navigation/template
   ```

2. Edit the `app.json` file to configure the `name`, `slug`, `scheme` and bundle identifiers (`ios.bundleIdentifier` and `android.bundleIdentifier`) for your app.

3. Edit the `src/App.tsx` file to start working on your app.

## Running the app

- Install the dependencies:

  ```sh
  npm install
  ```

- Start the development server:

  ```sh
  npm start
  ```

- Build and run iOS and Android development builds:

  ```sh
  npm run ios
  # or
  npm run android
  ```

- In the terminal running the development server, press `i` to open the iOS simulator, `a` to open the Android device or emulator, or `w` to open the web browser.

## Notes

This project uses a [development build](https://docs.expo.dev/develop/development-builds/introduction/) and cannot be run with [Expo Go](https://expo.dev/go). To run the app with Expo Go, edit the `package.json` file, remove the `expo-dev-client` package and `--dev-client` flag from the `start` script.

We highly recommend using the development builds for normal development and testing.

The `ios` and `android` folder are gitignored in the project by default as they are automatically generated during the build process ([Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)). This means that you should not edit these folders directly and use [config plugins](https://docs.expo.dev/config-plugins/) instead. However, if you need to edit these folders, you can remove them from the `.gitignore` file so that they are tracked by git.

## Template usage (package-manager agnostic)

This repository is intended to be used as a template. It has been made package-manager-agnostic by removing the lockfile and package manager workspace files.

To initialize this template for a new project (creates package.json and installs Expo + common dependencies):

1. Make the init script executable (only required once):

```sh
chmod +x ./scripts/init-expo.sh
```

2. Run the script, optionally specifying your package manager (npm, yarn, or pnpm). Default is npm:

```sh
./scripts/init-expo.sh npm
```

What the script does:

- Creates `package.json` if missing (using the chosen package manager)
- Installs the latest `expo` package
- Runs `npx expo install` for packages listed in `expo-deps.txt` so Expo will pick compatible versions for the installed SDK

After this, run `npx expo start` to start the dev server.

Customize `expo-deps.txt` to add or remove packages that should be installed by default for new projects.

## Resources

- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)

---

Demo assets are from [lucide.dev](https://lucide.dev/)

https://github.com/MrVal042/new-project

git checkout -b addStructure
git clone https://github.com/MrVal042/new-project
cd new-project
rm -rf .git
mv app ../ && mv TODO.md ../ && mv .env ../ && mv env.d.ts ../
cd ..
rm -rf new-project
for f in TODO.md .env env.d.ts; do grep -qxF "$f" .gitignore || echo "$f" >> .gitignore; done
git status
git add .
git commit -m "Initial project setup with app structure"
git push -u origin
git status
