# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router site. Route entrypoints live in `app/`, with `app/page.tsx` as the landing page, `app/layout.tsx` for metadata, and `app/globals.css` for styles. Reusable UI lives in `components/`, presentational pieces in `components/ui/`, helpers in `lib/`, and static files in `public/`, including `public/3d_rocket/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run lint`: run ESLint with Next.js core-web-vitals and TypeScript rules.
- `npm run build`: create a production build and validate the app compiles cleanly.
- `npm run start`: serve the production build locally after `npm run build`.

Use `npm`; `package-lock.json` is committed and should stay in sync with dependency changes.

## Coding Style & Naming Conventions
Write components and utilities in TypeScript with `strict` mode expectations. Use PascalCase for React components (`RocketScroll`), camelCase for variables and hooks (`activeTab`), and kebab-case for lower-level UI filenames when that pattern already exists (`components/ui/team-showcase.tsx`). Prefer functional components, named prop interfaces, double-quoted imports, Tailwind utility classes, and the `@/` alias.

## Testing Guidelines
There is no dedicated test runner configured yet. Until one is added, treat `npm run lint` and `npm run build` as the required validation baseline before opening a PR. If you add tests later, place them near the feature or in `__tests__/` and name them `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines
Recent history uses short Conventional Commit prefixes such as `feat:` and `style:`. Keep commits focused and descriptive, for example `feat: add sponsor form validation`. Pull requests should include a brief summary, note visual or content changes, link the related issue when available, and attach screenshots or a short recording for UI updates.

## Assets & Content Notes
Optimize new images before committing them to `public/`. For animation sequences or large media, keep filenames predictable and avoid replacing assets unless the matching references in `app/` or `components/` are updated in the same change.
