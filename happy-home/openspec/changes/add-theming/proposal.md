# Change: Add light, dark and high-contrast themes

GitHub issue: https://github.com/AnaisDesmet/happy-home-vue/issues/3

## Why
The design defines three themes. Following the resident's OS preference improves comfort
(dark) and accessibility (high contrast).

## What Changes
- Define the Figma colour variables as CSS custom properties on `:root` (light theme).
- Override them for dark (`prefers-color-scheme: dark`) and high contrast
  (`prefers-contrast: more`).
- All components use tokens only — no hard-coded colours.

## Impact
- Affected specs: `theming` (new capability)
- Affected code: new `src/assets/tokens.css`, imported in `main.ts`
- Figma: all "– Light", "– Dark" and "– High contrast" frames; page "Design System"
