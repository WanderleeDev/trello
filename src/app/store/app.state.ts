import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';
import { BoardState } from './board/board.state';
import { boardReducer } from './board/board.reducers';
import { UserState } from './user/user.state';
import { userReducer } from './user/user.reducers';

export interface AppState {
  auth: AuthState;
  board: BoardState;
  user: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  board: boardReducer,
  user: userReducer,
};

export const ALL_EFFECTS = [AuthEffects];
