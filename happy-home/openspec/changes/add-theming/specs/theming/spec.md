## ADDED Requirements

### Requirement: Design tokens
The system SHALL define all colours as CSS custom properties named after the Figma variables.

#### Scenario: Light theme tokens
- **WHEN** no theme preference applies
- **THEN** these values are used:
  `--color-bg #0f0081`, `--color-on-bg #ffffff`, `--color-surface #ffffff`,
  `--color-surface-border #ffffff`, `--color-text #000000`, `--color-text-muted #bcbcbc`,
  `--color-box #f6f6f6`, `--color-box-border #f6f6f6`, `--color-primary #3014ff`,
  `--color-on-primary #ffffff`, `--color-icon-muted #808080`

### Requirement: Dark theme
The system SHALL switch to the dark theme when the OS prefers a dark colour scheme.

#### Scenario: OS in dark mode
- **WHEN** `prefers-color-scheme: dark` matches
- **THEN** the page uses a near-black background, a dark card with a subtle border,
  dark digit boxes, light text and a violet primary button (Figma frame `6005:341`)

### Requirement: High-contrast theme
The system SHALL switch to the high-contrast theme when the OS requests more contrast.

#### Scenario: OS requests more contrast
- **WHEN** `prefers-contrast: more` matches
- **THEN** the page uses a black background, a black card and digit boxes with white borders,
  white text and a yellow primary button with black text (Figma frame `6005:502`)
- **AND** this theme takes priority over the dark theme

### Requirement: Token-only styling
Components SHALL NOT use hard-coded colour values.

#### Scenario: Theme changes
- **WHEN** the OS theme or contrast setting changes
- **THEN** every element updates without a page reload
