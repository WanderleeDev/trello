import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { BoardTemplate } from '../../shared/mockup/templates';
import { templates } from '../../shared/mockup/templates';

export interface BoardState {
  templates: BoardTemplate[];
}

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState<BoardState>({
    templates: templates,
  }),
  withMethods((store) => ({
    setTemplates(templates: BoardTemplate[]) {
      patchState(store, { templates });
    },
  })),
);
