# Project Context

## Purpose
Happy Home is a small web app where a resident sees the 4-digit access code for their
apartment and can request a new one. Generating a new code invalidates the old one.

## Design source
- Figma: https://www.figma.com/design/51H4tR0niHvMaoocYY3M8g/Happy-home-oefening--Copy-
  - Page "Page 1": all screens (5 states × 2 breakpoints × 3 themes)
  - Page "Design System": colour tokens and components
- Reference frames (desktop, light theme):
  - Code view `1:2` · Loading view `2:22` · Error view `6003:2`
  - Expired code view `6006:3` · Server error view `6006:59`

## Tech Stack
- Vue 3 (`<script setup>`, Composition API) + TypeScript
- Vite
- ESLint + Oxlint, Prettier
- No UI library: plain scoped CSS with CSS custom properties (design tokens)

## Project Conventions

### Code Style
- Prettier config in `.prettierrc.json`; run `npm run lint` and `npm run format` before committing.
- Components in `src/components/`, PascalCase file names (e.g. `AccessCodeCard.vue`).
- Data fetching lives in a composable (`src/composables/useAccessCode.ts`), not inside components.

### Architecture Patterns
- One view (`App.vue`) renders one card component.
- The card is driven by a single `status` value:
  `'loading' | 'success' | 'expired' | 'error' | 'server-error'`.
- Design tokens are CSS custom properties on `:root`, overridden per theme.

### Testing Strategy
- Manual verification against the Figma frames for every state, breakpoint and theme.
- `npm run type-check` and `npm run lint` must pass.

### Git Workflow
- `main` is the default branch; one feature branch per OpenSpec change.
- Every OpenSpec change is linked to one GitHub issue (see the `GitHub issue:` line in each
  `proposal.md`). Commits and PRs reference that issue (`Closes #<n>`).

## Domain Context
- An access code is exactly 4 digits (0–9), shown one digit per box.
- A code can expire; an expired code is still shown but struck through and greyed out.
- Requesting a new code replaces the old one immediately on the server.

## Important Constraints
- Accessible: the theme follows the OS (`prefers-color-scheme`, `prefers-contrast`),
  status messages are announced to screen readers, all controls are keyboard reachable.

## External Dependencies
- Access-code backend API — **endpoint still to be provided.** Base URL comes from the
  `VITE_API_URL` environment variable so it can be filled in later without code changes.
