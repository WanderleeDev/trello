# Tasks: Workspace + Boards Hexagonal Architecture

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 900-1400 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Vitest + domain + infrastructure | PR 1 | base: main. Purely additive, no breakage. |
| 2 | Application layer (use cases, store) | PR 2 | base: main. Depends on domain types. |
| 3 | Presentation + routes + cleanup | PR 3 | base: main. File moves, route switch, deletions. |

## Phase 0: Vitest Setup

- [x] 0.1 Install vitest, @analogjs/vite-plugin-angular, @vitest/coverage-v8
- [x] 0.2 Remove karma, karma-chrome-launcher, karma-coverage, karma-jasmine, karma-jasmine-html-reporter, @types/jasmine, jasmine-core
- [x] 0.3 Create `vitest.config.ts` with @analogjs/vite-plugin-angular
- [x] 0.4 Update `package.json` test script: `"test": "vitest run"`

## Phase 1: Domain + Infrastructure

- [x] 1.1 Create `modules/board/domain/board.model.ts` (Board, BoardTemplate interfaces)
- [x] 1.2 Create `modules/board/domain/board-repository.ts` (abstract class: getBoards, toggleStar)
- [x] 1.3 Create `modules/board/domain/index.ts`
- [x] 1.4 Create `modules/board/infrastructure/board-mock.repository.ts` (data migrated from board.mockup.ts)
- [x] 1.5 Create `modules/board/infrastructure/index.ts`
- [x] 1.6 Add `{ provide: BoardRepository, useClass: BoardMockRepository }` in app.config.ts

## Phase 2: Application

- [x] 2.1 Create `modules/board/application/load-boards.use-case.ts`
- [x] 2.2 Create `modules/board/application/toggle-star.use-case.ts`
- [x] 2.3 Create `modules/board/application/store/board.store.ts` (NgRx SignalStore: boards, loading, error)
- [x] 2.4 Create `modules/board/application/index.ts` + `store/index.ts`

## Phase 3: Presentation

- [x] 3.1 Move `pages/dashboard/` → `modules/workspace/presentation/layout/` (rename to WorkspaceLayoutComponent)
- [x] 3.2 Move `pages/workspace/` → `modules/board/presentation/views/board-detail/`
- [x] 3.3 Move `modules/boards/boards.component` → `modules/board/presentation/views/boards-listing/`
- [x] 3.4 Create `modules/board/presentation/routes/board.routes.ts` (child routes: '', board/:id, templates, entry, redirect legacy /workspace/:idBoard)
- [x] 3.5 Update `app.routes.ts`: /workspace with loadChildren → board.routes, drop old /dashboard and /workspace/:idBoard routes
- [x] 3.6 Update sidebar nav links to /workspace/*

## Phase 4: Testing + Cleanup

- [ ] 4.1 Test BoardMockRepository (getBoards, toggleStar success + error)
- [ ] 4.2 Test LoadBoardsUseCase + ToggleStarUseCase (success + error propagation)
- [ ] 4.3 Test BoardStore (init, loadBoards, toggleStar, error state)
- [ ] 4.4 Test workspace layout + boards listing views (loading, error, success)
- [ ] 4.5 Test board detail view + legacy /workspace/:idBoard → /workspace/board/:id redirect
- [x] 4.6 Delete `pages/dashboard/`, `pages/workspace/`, `store/board/` (kept `board.mockup.ts` — still imported by boards-listing view)
