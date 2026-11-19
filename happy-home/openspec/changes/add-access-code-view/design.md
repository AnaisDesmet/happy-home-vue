# Design: Access code view

## Context
The backend endpoint is not available yet. The frontend must be built so the endpoint can be
plugged in later with minimal changes.

## Decisions

### API contract (provisional)
Until the real endpoint is provided we assume:

| Action           | Request                     | Success response                                   |
| ---------------- | --------------------------- | -------------------------------------------------- |
| Get current code | `GET  {VITE_API_URL}/code`  | `200 { "code": "5916", "expiresAt": "<ISO date>" }` |
| Get new code     | `POST {VITE_API_URL}/code`  | `200 { "code": "4821", "expiresAt": "<ISO date>" }` |

- All fetch logic lives in `useAccessCode()` so only that file changes when the real
  contract is known.
- The composable exposes `code`, `status`, `fetchCode()` and `requestNewCode()`.

### State model
A single `status` ref instead of several booleans, so impossible combinations
(e.g. loading *and* error) cannot happen:

```
loading ──ok──▶ success ──expiresAt passed──▶ expired
   │                │ "Get new code"             │ "Get new code"
   │                ▼                            ▼
   └──fail──▶ error / server-error ──"Try again"──▶ loading
```

### Layout
| Token               | Desktop | Mobile |
| ------------------- | ------- | ------ |
| Card width          | 288px   | 342px (24px side gutters) |
| Digit box           | 48 × 65 | 64 × 80 |
| Breakpoint          | ≥ 768px | < 768px |

### Vue structure
```
App.vue                      uses useAccessCode(), owns the data
├─ AppHeader.vue             logo + "Happy home"
└─ AccessCodeCard.vue        props: code, status · emits: request
   ├─ CodeDigits.vue         props: code, status
   └─ StatusMessage.vue      (added in add-access-code-errors)
```
- **Props down, events up:** the card never fetches; it emits `request` and `App.vue` calls
  `requestNewCode()` / `fetchCode()`.
- **Composition API with `<script setup lang="ts">`**: typed props via `defineProps<{ … }>()`,
  typed events via `defineEmits<{ request: [] }>()`.
- **Derived values use `computed`** (button label, digit list) instead of extra state.
- **`onMounted(fetchCode)`** loads the code once when the page opens.

## Open Questions
- **Close (×) button**: what does it do? (no target screen in Figma)
- Exact endpoint paths, auth (per-apartment token?) and response shape.
- Does the backend tell us a code is expired (status/field), or do we compare `expiresAt`?
