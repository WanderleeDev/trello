# Proposal: Workspace + Boards Hexagonal Architecture

## Intent

Reestructurar la navegación y migrar boards a hexagonal. Unificar `pages/dashboard/` (layout) y `pages/workspace/` (board detail) bajo un módulo `boards` cohesivo, con rutas limpias.

## Scope

### In Scope

- **Vitest setup**: instalar y configurar, remover Karma
- **Restructure routing**:
  - `/workspace` → workspace layout (nav + sidebar + boards listing) — antes `/dashboard`
  - `/workspace/board/:id` → board detail view — antes `/workspace/:idBoard`
  - `/workspace/templates` → templates — sin cambios
- **pages/dashboard/** → renombrar a `modules/workspace/presentation/layout/`
- **pages/workspace/** → mover a `modules/boards/presentation/views/board-detail/`
- **Domain**: `Board`, `BoardTemplate` models + `BoardRepository` abstract
- **Infra**: `BoardMockRepository` extends `BoardRepository`
- **Application**: `LoadBoardsUseCase`, `ToggleStarUseCase`, mover `BoardStore` a `application/store/`
- **Presentation**: routes, boards listing + board detail views, componentes existentes
- **Tests**: vitest para repository, use cases, store, y componentes principales
- **Cleanup**: borrar `pages/dashboard/`, `pages/workspace/`, `store/board/`, `board.mockup.ts`

### Out of Scope

- API real (solo mock)
- Refactor de componentes UI existentes (board-card, sidebar, nav, etc.)
- Templates module

## Approach

| Fase | Qué |
|------|-----|
| 0 | Vitest setup |
| 1 | Domain + Infrastructure (modelos, repositorio abstracto, mock repo) |
| 2 | Application (use cases, mover store) |
| 3 | Presentation (routes, workspace layout, board-detail view, boards listing) |
| 4 | Testing + cleanup (tests, borrar archivos viejos) |

## Affected Areas

| Area | Impact |
|------|--------|
| `pages/dashboard/` → `modules/workspace/presentation/layout/` | Rename + move |
| `pages/workspace/` → `modules/board/presentation/views/board-detail/` | Move |
| `modules/boards/` → `modules/board/` | Rename + new hexagonal structure + board-detail view |
| `store/board/` | Move to `board/application/store/` |
| `app.routes.ts` | `/workspace` route con `loadChildren` para board + workspace layout |
| `app.config.ts` | `BoardRepository` DI provider |
| `package.json` | Vitest replaces Karma |

## Routes (target)

```
/workspace                → workspace layout + boards listing
/workspace/templates      → templates
/workspace/board/:id      → board detail (antes /workspace/:idBoard)
/workspace/entry          → entry
```

## Risks

| Risk | Mitigation |
|------|------------|
| vitest + Angular SSR compat | `@analogjs/vite-plugin-angular` soporta v22 |
| Route change: /workspace/:idBoard → /workspace/board/:id | Redirect o mantener ambas por ahora |
| Sidebar links a /dashboard | Actualizar a /workspace |

## Rollback

1. Revert `modules/boards/`, `modules/workspace/`
2. Restaurar `pages/dashboard/`, `pages/workspace/`, `store/board/`
3. Revertir `app.routes.ts` y `app.config.ts`

## Success Criteria

- [ ] Boards listing en `/workspace` funciona idéntico a antes
- [ ] Board detail en `/workspace/board/:id` funciona igual que antes en `/workspace/:idBoard`
- [ ] Sidebar links apuntan a `/workspace/*`
- [ ] `BoardMockRepository` retorna misma data que mockup anterior
- [ ] Todos los tests vitest pasan
- [ ] `pages/dashboard/` y `pages/workspace/` ya no existen
