# Tasks (Vue 3 + Vite)

- [ ] 1.1 Create `src/assets/tokens.css` with the light tokens on `:root`
- [ ] 1.2 Import it once in `src/main.ts` (`import './assets/tokens.css'`)
- [ ] 1.3 Add dark overrides in `@media (prefers-color-scheme: dark)`
- [ ] 1.4 Add high-contrast overrides in `@media (prefers-contrast: more)`, placed after the dark block so it wins
- [ ] 1.5 Use `var(--color-…)` in every component's `<style scoped>`; no hard-coded colours
- [ ] 1.6 Add `--color-error` and `--color-warning` tokens for the error and expired states
- [ ] 1.7 Verify each state in all 3 themes (DevTools → Rendering → emulate `prefers-color-scheme` / `prefers-contrast`)
- [ ] 1.8 `npm run type-check` and `npm run lint` pass
