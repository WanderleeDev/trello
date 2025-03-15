import { props, createActionGroup, emptyProps } from '@ngrx/store';
import { LoginRequest, UserResponse } from './auth.state';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<LoginRequest>(),
    'Login Success': props<UserResponse>(),
    Logout: emptyProps(),
    'Auth Error': emptyProps(),
  },
});
