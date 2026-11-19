# Change: Add access code view

GitHub issue: https://github.com/AnaisDesmet/happy-home-vue/issues/1

## Why
Residents need one place to see the current 4-digit access code for their apartment and to
replace it with a new one when it may have been shared with the wrong people.

## What Changes
- Add the "Happy home" page with a centred card titled "Your access code:".
- Fetch the current code from the backend on page load and show it as 4 digit boxes.
- Show a loading state (asterisks + spinner button) while a request is in flight.
- Add a "Get new code" button that requests a new code from the backend.
- Show the explanatory footnote under the button.
- Responsive layout for desktop (1280) and mobile (390).

## Impact
- Affected specs: `access-code` (new capability)
- Affected code: `src/App.vue`, new `src/components/AccessCodeCard.vue`,
  new `src/composables/useAccessCode.ts`, new `.env.example`
- Figma: Code view `1:2` / `6004:26`, Loading view `2:22` / `6004:50`
