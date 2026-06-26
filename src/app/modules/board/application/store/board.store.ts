import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { LoadBoardsUseCase } from '../load-boards.use-case';
import { ToggleStarUseCase } from '../toggle-star.use-case';
import type { Board } from '../../domain/board.model';

export interface BoardStoreState {
  boards: Board[];
  loading: boolean;
  error: string | null;
}

const initialState: BoardStoreState = {
  boards: [],
  loading: false,
  error: null,
};

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((
    store,
    loadBoardsUseCase = inject(LoadBoardsUseCase),
    toggleStarUseCase = inject(ToggleStarUseCase),
  ) => ({
    async loadBoards() {
      patchState(store, { loading: true, error: null });
      loadBoardsUseCase.execute().subscribe({
        next: (boards) => patchState(store, { boards, loading: false }),
        error: (err: Error) => patchState(store, { error: err.message, loading: false }),
      });
    },
    async toggleStar(boardId: string) {
      const currentBoards = store.boards();
      patchState(store, { loading: true });
      toggleStarUseCase.execute(boardId).subscribe({
        next: (updated) => {
          const boards = currentBoards.map((b) =>
            b.id === boardId ? updated : b,
          );
          patchState(store, { boards, loading: false });
        },
        error: (err: Error) => patchState(store, { error: err.message, loading: false }),
      });
    },
  })),
);
