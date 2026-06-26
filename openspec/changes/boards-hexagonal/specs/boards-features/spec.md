# Boards Features Specification

## Purpose

Business logic layer for board operations. Contains use cases (LoadBoardsUseCase, ToggleStarUseCase) and the BoardStore (NgRx SignalStore). Use cases orchestrate repository calls; the store holds reactive state consumed by presentation.

## Requirements

### Requirement: LoadBoardsUseCase loads all board groups

The `LoadBoardsUseCase` MUST call `BoardRepository.getBoards()` and return categorized boards (starred, recent, workspace).

#### Scenario: Load boards returns categorized result

- GIVEN `LoadBoardsUseCase` with a `BoardMockRepository`
- WHEN `execute()` is called
- THEN it SHALL return an object with `starredBoards`, `recentBoards`, and `workspaceBoards` arrays

#### Scenario: Load boards repository error propagates

- GIVEN `LoadBoardsUseCase` with a failing repository
- WHEN `execute()` is called
- THEN the error SHALL propagate to the caller

### Requirement: ToggleStarUseCase toggles board starred state

The `ToggleStarUseCase` MUST call `BoardRepository.toggleStar(id)` and return the updated board.

#### Scenario: Toggle star on a known board succeeds

- GIVEN `ToggleStarUseCase` with known board ID
- WHEN `execute(boardId)` is called
- THEN it SHALL return the board with inverted `starred` value

#### Scenario: Toggle star on unknown board propagates error

- GIVEN `ToggleStarUseCase` with an invalid board ID
- WHEN `execute('bad-id')` is called
- THEN the error SHALL be propagated

### Requirement: BoardStore holds reactive board state

The `BoardStore` (NgRx SignalStore) MUST hold `boards`, `starredBoards`, `recentBoards`, `workspaceBoards`, `loading`, and `error` signals. It MUST provide `loadBoards()` and `toggleStar(id)` methods.

#### Scenario: Store initializes with empty/loading state

- GIVEN a fresh `BoardStore` instance
- THEN `boards()` SHALL be an empty array
- AND `loading()` SHALL be `false`

#### Scenario: loadBoards populates store state

- GIVEN `BoardStore`
- WHEN `loadBoards()` is called and the repository succeeds
- THEN `boards()` SHALL contain the loaded boards
- AND `loading()` SHALL transition to `false`

#### Scenario: loadBoards sets error on failure

- GIVEN `BoardStore`
- WHEN `loadBoards()` is called and the repository throws
- THEN `error()` SHALL contain the error message
- AND `loading()` SHALL be `false`

#### Scenario: toggleStar updates boards list

- GIVEN `BoardStore` with loaded boards
- WHEN `toggleStar(boardId)` succeeds
- THEN the matching board in `boards()` SHALL have updated `starred`
