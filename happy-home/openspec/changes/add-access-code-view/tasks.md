# Tasks (Vue 3 + TypeScript, `<script setup>`)

## 1. Setup
- [x] 1.1 Add `.env.example` with `VITE_API_URL=` and type it in `env.d.ts` (`interface ImportMetaEnv { readonly VITE_API_URL: string }`)
- [x] 1.2 Remove the Vite starter content from `src/App.vue`
- [x] 1.3 Define `type AccessCodeStatus = 'loading' | 'success' | 'expired' | 'error' | 'server-error'` in `src/types/accessCode.ts`

## 2. Composable
- [x] 2.1 Create `src/composables/useAccessCode.ts` returning `{ code, status, fetchCode, requestNewCode }`
- [x] 2.2 `code` is a `ref<string>('')`, `status` is a `ref<AccessCodeStatus>('loading')`
- [x] 2.3 Add a guard: if `status.value === 'loading'` return early (no double requests)
- [x] 2.4 Read the base URL via `import.meta.env.VITE_API_URL`

## 3. Components
- [x] 3.1 `src/components/AppHeader.vue` — logo + "Happy home"
- [x] 3.2 `src/components/CodeDigits.vue` — props `{ code: string; status: AccessCodeStatus }`, renders 4 boxes with `v-for`; shows `*` while loading
- [x] 3.3 `src/components/AccessCodeCard.vue` — title, close button, `CodeDigits`, action button, footnote; props `{ code, status }`, emits `request`
- [x] 3.4 `AccessCodeCard` button: `:disabled="status === 'loading'"`, spinner via `v-if`
- [x] 3.5 `App.vue` — call `const { code, status, fetchCode, requestNewCode } = useAccessCode()`, `onMounted(fetchCode)`, pass props down and handle `@request`

## 4. Styling
- [x] 4.1 Scoped CSS per component, mobile-first, `@media (min-width: 768px)` for desktop
- [x] 4.2 Digit box 64×80 on mobile, 48×65 on desktop; card 342px / 288px
- [x] 4.3 `aria-busy` on the card while loading

## 5. Verify
- [ ] 5.1 Compare with Figma frames `1:2`, `2:22`, `6004:26`, `6004:50`
- [x] 5.2 `npm run type-check` and `npm run lint` pass
