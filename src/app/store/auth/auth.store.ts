import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export type RoleUser = 'user' | 'admin' | 'guest';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  role: RoleUser;
  username: string | null;
  image: string | null;
}

export type LoginRequest = Pick<AuthState, 'username'> & { email: string };

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>({
    isAuthenticated: true,
    role: 'guest',
    username: null,
    accessToken: null,
    image: null,
  }),
  withMethods(store => ({
    login(request: { email: string }) {
      // TODO: integrate real API call
      patchState(store, {
        isAuthenticated: true,
        role: 'user',
        username: null,
        accessToken: '123',
        image: null,
      });
    },
    logout() {
      patchState(store, {
        isAuthenticated: false,
        role: 'guest',
        username: null,
        accessToken: null,
        image: null,
      });
    },
  })),
);
