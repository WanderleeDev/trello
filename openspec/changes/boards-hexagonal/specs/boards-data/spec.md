# Boards Data Specification

## Purpose

Defines board domain models, the repository abstraction, its mock implementation, and dependency injection wiring. This layer has zero framework dependencies beyond standard TypeScript and Angular DI tokens.

## Requirements

### Requirement: Board and BoardTemplate domain models

The system MUST define `Board` and `BoardTemplate` interfaces in `domain/` with properties matching the existing mock data structure. `Board` MUST include `id`, `name`, `description`, `image`, and `starred`.

#### Scenario: Board is created with expected fields

- GIVEN a `Board` model
- WHEN a board object is instantiated with `{ id, name, description, image, starred }`
- THEN all fields SHALL be accessible and typed

#### Scenario: BoardTemplate is created with expected fields

- GIVEN a `BoardTemplate` model
- WHEN a template object is instantiated
- THEN it SHALL contain all fields required by the existing template UI

### Requirement: BoardRepository abstract contract

The system MUST provide an abstract `BoardRepository` class defining `getBoards(): Observable<Board[]>` and `toggleStar(boardId: string): Observable<Board>`.

#### Scenario: Repository contract enforces implementation

- GIVEN `BoardRepository` as an abstract class
- WHEN a concrete class extends it
- THEN the compiler SHALL enforce implementation of `getBoards` and `toggleStar`

### Requirement: BoardMockRepository implements BoardRepository

The system MUST provide `BoardMockRepository` extending `BoardRepository`, returning the same data as the current `board.mockup.ts` (starredBoards, recentBoards, workspaceBoards).

#### Scenario: getBoards returns all board groups

- GIVEN `BoardMockRepository`
- WHEN `getBoards()` is called
- THEN it SHALL return starred, recent, and workspace boards matching the existing mock data

#### Scenario: toggleStar flips the starred flag

- GIVEN `BoardMockRepository` with a known board
- WHEN `toggleStar(boardId)` is called
- THEN the board's `starred` property SHALL be inverted

#### Scenario: toggleStar with unknown id returns error

- GIVEN `BoardMockRepository`
- WHEN `toggleStar('non-existent-id')` is called
- THEN it SHALL throw or return an error observable

### Requirement: DI provides BoardRepository

The application config MUST provide `BoardRepository` using the `useClass` provider with `BoardMockRepository`.

#### Scenario: BoardRepository is injectable

- GIVEN the DI configuration
- WHEN a service or use case injects `BoardRepository`
- THEN it SHALL receive a `BoardMockRepository` instance
