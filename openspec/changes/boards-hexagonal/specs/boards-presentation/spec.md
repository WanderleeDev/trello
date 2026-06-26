# Boards Presentation Specification

## Purpose

Routing configuration, views, and components for board listing and board detail. Includes the workspace layout route definition, boards listing page (moved from `modules/boards/boards.component`), and board detail view (moved from `pages/workspace/`).

## Requirements

### Requirement: Routes use /workspace prefix with loadChildren

The `app.routes.ts` MUST define a `/workspace` route using `loadChildren` pointing to the workspace routes module. Child routes: `''` (boards listing), `board/:id` (board detail), `templates`, `entry`.

#### Scenario: /workspace renders boards listing by default

- GIVEN the routes are configured
- WHEN the user navigates to `/workspace`
- THEN the workspace layout SHALL render with the boards listing as child

#### Scenario: /workspace/board/:id renders board detail

- GIVEN the routes are configured
- WHEN the user navigates to `/workspace/board/abc-123`
- THEN the board detail view SHALL render with the board whose ID is `abc-123`

### Requirement: Boards listing view shows categorized boards

The boards listing component (migrated from `modules/boards/boards.component`) MUST display starred, recent, and workspace board groups using `BoardCardComponent` and `BtnStarFavoriteComponent`.

#### Scenario: Boards listing loads and displays groups

- GIVEN the boards listing view
- WHEN boards are loaded successfully
- THEN starred boards, recent boards, and workspace boards SHALL render in separate sections

#### Scenario: Boards listing shows loading state

- GIVEN the boards listing view
- WHEN `BoardStore.loading()` is `true`
- THEN a loading indicator SHALL be shown instead of board cards

#### Scenario: Boards listing shows error state

- GIVEN the boards listing view
- WHEN `BoardStore.error()` is set
- THEN an error message SHALL be displayed using `BoardErrorComponent`

### Requirement: Board detail view shows columns and cards

The board detail view (migrated from `pages/workspace/`) MUST display the board title, columns, and cards using `BoardComponent` and `ColumnBoardComponent`.

#### Scenario: Board detail loads by route param

- GIVEN the route `/workspace/board/:id`
- WHEN the board detail view initializes
- THEN it SHALL read `:id` from the route and load the corresponding board data

#### Scenario: Board not found shows error

- GIVEN the board detail view
- WHEN the board ID does not match any known board
- THEN a not-found indicator SHALL be displayed

### Requirement: Old route /workspace/:idBoard redirects

The system MUST provide a redirect (or dual registration) so `/workspace/:idBoard` navigates to `/workspace/board/:idBoard`.

#### Scenario: Legacy /workspace/old-id redirects

- GIVEN the routes are configured
- WHEN the user navigates to `/workspace/abc-123`
- THEN they SHALL be redirected to `/workspace/board/abc-123`
