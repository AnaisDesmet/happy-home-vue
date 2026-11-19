# Tasks (Vue 3 + TypeScript, `<script setup>`)

## 1. Composable (`useAccessCode.ts`)
- [ ] 1.1 Wrap `fetch` in `try/catch`: a thrown error (network) sets `status.value = 'error'`
- [ ] 1.2 Check `response.ok`: HTTP 5xx sets `'server-error'`, other non-2xx sets `'error'`
- [ ] 1.3 After a successful response, set `'expired'` when `new Date(expiresAt) < new Date()` (confirm with backend)
- [ ] 1.4 "Try again" calls the same function that failed (`fetchCode` or `requestNewCode`)

## 2. Components
- [ ] 2.1 Icon components in `src/components/icons/`: `IconAlert.vue`, `IconServer.vue`, `IconClock.vue`, `IconRetry.vue`
- [ ] 2.2 `StatusMessage.vue` — prop `status`, uses a `computed` lookup for icon + text; wrapper has `aria-live="polite"`
- [ ] 2.3 `CodeDigits.vue` — dash (`–`) per box for `error`/`server-error`; strike-through for `expired`; state shown through a `:class` binding
- [ ] 2.4 `AccessCodeCard.vue` — button label and icon via a `computed`: "Try again" + retry icon for errors, "Get new code" otherwise
- [ ] 2.5 Use `v-if` / `v-else-if` for the message so it is removed from the DOM when there is none

## 3. Styling
- [ ] 3.1 Error: red border + light red background; server error: grey box; expired: grey struck-through digits + orange message
- [ ] 3.2 All colours through tokens from `add-theming` (add `--color-error`, `--color-warning` there)

## 4. Verify
- [ ] 4.1 Compare with Figma frames `6003:2`, `6006:59`, `6006:3` and mobile variants
- [ ] 4.2 Simulate each failure: wrong `VITE_API_URL`, a 500 response, a past `expiresAt`
- [ ] 4.3 `npm run type-check` and `npm run lint` pass
