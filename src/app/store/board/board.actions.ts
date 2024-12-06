import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BoardState } from './board.state';

export const boardActions = createActionGroup({
  source: 'Board',
  events: {
    'Get Boards': emptyProps(),
    'Get Boards Success': props<BoardState>(),
    'Boards Error': emptyProps(),
  },
});
