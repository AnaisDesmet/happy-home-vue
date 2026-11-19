## ADDED Requirements

### Requirement: Generic error state
The system SHALL show a recoverable error state when a request fails for a reason other than
a server error (e.g. network failure or an unexpected response).

#### Scenario: Network failure
- **WHEN** the access-code request fails because the backend cannot be reached
- **THEN** each digit box shows a dash (`–`) with a red border and light red background
- **AND** an alert icon with the message "Something went wrong. Please try again." is shown
- **AND** the button label is "Try again" with a retry icon

#### Scenario: Retry after error
- **WHEN** the resident activates "Try again"
- **THEN** the loading state is shown and the request that failed is sent again

### Requirement: Server error state
The system SHALL show a distinct state when the backend responds with an HTTP 5xx status.

#### Scenario: Backend returns 500
- **WHEN** the backend responds with status 500
- **THEN** each digit box shows a grey dash on the neutral box background
- **AND** a server icon with the message "Server error (500). Try again later." is shown
- **AND** the button label is "Try again" with a retry icon

### Requirement: Expired code state
The system SHALL indicate when the shown access code has expired.

#### Scenario: Code has expired
- **WHEN** the current code is expired
- **THEN** the digits stay visible but are greyed out and struck through
- **AND** a clock icon with the message "This code has expired. Get a new code." is shown in orange
- **AND** the button label is "Get new code"

### Requirement: Accessible status messages
The system SHALL announce error and expired messages to assistive technology.

#### Scenario: Message appears
- **WHEN** an error, server error or expired message is shown
- **THEN** it is inside an `aria-live="polite"` region so screen readers read it out
- **AND** the meaning is not conveyed by colour alone (icon + text are always present)
