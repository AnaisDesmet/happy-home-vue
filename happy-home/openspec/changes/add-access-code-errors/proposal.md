# Change: Add access code error and expired states

GitHub issue: https://github.com/AnaisDesmet/happy-home-vue/issues/2

## Why
Requests can fail and codes can expire. The resident must understand what went wrong and how
to recover, instead of seeing an empty or stale card.

## What Changes
- Generic error state: red dashed boxes, alert icon, "Something went wrong. Please try again."
  and a "Try again" button.
- Server error state (HTTP 5xx): grey dashed boxes, server icon,
  "Server error (500). Try again later." and a "Try again" button.
- Expired state: digits greyed out and struck through, clock icon,
  "This code has expired. Get a new code." and the "Get new code" button.
- Status messages are announced to screen readers.

## Impact
- Affected specs: `access-code` (adds requirements)
- Depends on: `add-access-code-view`
- Affected code: `useAccessCode.ts`, `AccessCodeCard.vue`, new icon components
- Figma: Error view `6003:2`, Server error view `6006:59`, Expired code view `6006:3`
  (+ mobile/dark/high-contrast variants)
