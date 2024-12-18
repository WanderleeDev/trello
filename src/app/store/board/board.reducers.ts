import { createReducer, on } from '@ngrx/store';
import { BoardState } from './board.state';
import { boardActions } from './board.actions';
import { templates } from '../../shared/mockup/templates';

const initialState: BoardState = {
  templates: templates,
};

export const boardReducer = createReducer(
  initialState,
  on(
    boardActions.getBoardsSuccess,
    (state, { templates }): BoardState => ({
      ...state,
      ...templates,
    }),
  ),
);
