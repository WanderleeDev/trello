# Workspace Layout Specification

## Purpose

The workspace layout is the authenticated application shell rendered at `/workspace`. It provides consistent chrome (nav, sidebar, banner) and a `<router-outlet>` for child views: boards listing, board detail, templates, and entry.

## Requirements

### Requirement: Workspace shell renders nav, sidebar, banner, and router outlet

The `WorkspaceLayoutComponent` MUST render the navigation bar, premium banner, workspace sidebar, and a `<router-outlet>` for child routes.

#### Scenario: Authenticated user navigates to /workspace

- GIVEN the user is authenticated
- WHEN they navigate to `/workspace`
- THEN the nav component SHALL render at the top
- AND the sidebar SHALL render on the left
- AND the router-outlet SHALL render the default child (boards listing)

#### Scenario: Sidebar links use /workspace prefix

- GIVEN the sidebar is rendered
- THEN every sidebar navigation link MUST target a `/workspace/*` path

### Requirement: Child routes render inside the router outlet

The workspace layout MUST delegate child route rendering to its `<router-outlet>`. Each child route MUST render its own view within the outlet.

#### Scenario: Navigating between child views preserves the layout

- GIVEN the workspace layout is displayed
- WHEN the user navigates from `/workspace` to `/workspace/templates`
- THEN the nav, sidebar, and banner SHALL remain rendered
- AND only the router-outlet content SHALL change

### Requirement: Board detail replaces the layout outlet

The board detail route (`/workspace/board/:id`) MUST render as a child of the workspace layout — NOT as a standalone page — using the layout's router-outlet.

#### Scenario: Board detail renders within workspace layout

- GIVEN the workspace layout is displayed
- WHEN the user navigates to `/workspace/board/:id`
- THEN the nav SHALL remain rendered at the top
- AND the board detail view SHALL render in the router-outlet

### Requirement: Error state for missing child route

The workspace layout route config MUST include a not-found catch-all for unmatched child paths.

#### Scenario: Unknown child path shows not-found

- GIVEN the workspace layout is active
- WHEN the user navigates to `/workspace/unknown-route`
- THEN a not-found component SHALL render in the router-outlet
