# Template metadata and guidance

This repository is a starter template for Expo + React Native apps with React Navigation, TypeScript, and a recommended structure for features and components.

Included conveniences

- `scripts/init-expo.sh` — script to bootstrap a new project (creates `package.json`, installs `expo`, and runs `npx expo install` for packages listed in `expo-deps.txt`).
- `expo-deps.txt` — default dependency list that `npx expo install` will use to install versions matching the Expo SDK.
- `.env.example` — example environment variables.
- `.gitignore`, `LICENSE` — template hygiene files.

How to use

1. Copy this repo to your new project location (or use it as a template on GitHub).
2. Make the init script executable and run it (choose a package manager or let it detect one):

   ```sh
   chmod +x ./scripts/init-expo.sh
   ./scripts/init-expo.sh    # will try to detect npm/yarn/pnpm if not provided
   ```

3. Start the dev server with `npx expo start`.

Customizing the template

- Edit `expo-deps.txt` to change the list of default packages installed with the project.
- Update `TEMPLATE.md` and `README.md` with your organization/project branding and specific instructions.

Notes

- The template intentionally contains no package manager lock file so you can choose your preferred tool.
- The init script uses `npx expo install` so installed versions are compatible with the selected Expo SDK.
