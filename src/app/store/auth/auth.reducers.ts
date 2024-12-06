import { createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: true,
  role: 'guest',
  username: null,
  accessToken: null,
  image: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    authActions.loginSuccess,
    (state, { type, ...user }): AuthState => ({ ...state, ...user })
  ),
  on(authActions.logout, (): AuthState => initialState)
);
