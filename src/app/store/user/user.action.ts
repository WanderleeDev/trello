import { props, createActionGroup, emptyProps } from '@ngrx/store';
import { UserState } from './user.state';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Get User': emptyProps(),
    'Get User Success': props<UserState>(),
    'Get User Error': emptyProps(),
    'Clear User': emptyProps(),
    'Update User': props<Partial<UserState>>(),
  },
});
