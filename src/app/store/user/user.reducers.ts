import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.action';
import { UserState } from './user.state';

const initialState: UserState = {
  username: null,
  password: null,
  email: null,
  image: null,
  role: 'guest',
  myWorkspaces: [
    {
      id: '1',
      name: 'My Trello Board',
      isFavorite: false,
    },
  ],
  recentBoards: [],
  staredBoards: [],
};

export const userReducer = createReducer(
  initialState,
  on(userActions.getUserSuccess, (state, { type, ...user }): UserState => ({ ...state, ...user })),
  on(userActions.updateUser, (state, { type, ...user }): UserState => ({ ...state, ...user })),
  on(userActions.clearUser, (): UserState => initialState),
);
