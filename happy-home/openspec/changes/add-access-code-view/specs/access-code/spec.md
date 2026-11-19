## ADDED Requirements

### Requirement: Display access code
The system SHALL show the apartment's current access code as 4 separate digit boxes inside a
card titled "Your access code:", below a "Happy home" logo.

#### Scenario: Code loads successfully
- **WHEN** the page loads and the backend returns code `5916`
- **THEN** the boxes show `5`, `9`, `1`, `6` from left to right
- **AND** a primary "Get new code" button is shown below the boxes
- **AND** the footnote "Your access code is unique for your apartment. If you generate a new
  code, the old code can not be used anymore." is shown below the button

### Requirement: Loading state
The system SHALL show a loading state while any access-code request is in progress.

#### Scenario: Initial load in progress
- **WHEN** the code request has been sent and no response has arrived yet
- **THEN** each digit box shows an asterisk (`*`)
- **AND** the button shows a spinner instead of a label and cannot be activated
- **AND** screen readers are told the code is loading (`aria-busy="true"`)

### Requirement: Request new code
The system SHALL let the resident request a new access code, replacing the old one.

#### Scenario: New code generated
- **WHEN** the resident activates "Get new code"
- **THEN** the loading state is shown
- **AND** on success the boxes show the new code returned by the backend

#### Scenario: Prevent double requests
- **WHEN** a request is already in progress
- **THEN** activating the button again does not send a second request

### Requirement: Responsive layout
The system SHALL adapt the card to desktop and mobile viewports.

#### Scenario: Mobile viewport
- **WHEN** the viewport is narrower than 768px
- **THEN** the card is 342px wide with 24px side gutters and digit boxes are 64 × 80px

#### Scenario: Desktop viewport
- **WHEN** the viewport is 768px or wider
- **THEN** the card is 288px wide, centred, and digit boxes are 48 × 65px

### Requirement: Configurable backend
The system SHALL read the backend base URL from the `VITE_API_URL` environment variable.

#### Scenario: Endpoint provided later
- **WHEN** `VITE_API_URL` is set in `.env`
- **THEN** all access-code requests are sent to that base URL without code changes
