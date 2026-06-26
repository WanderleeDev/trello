import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { LoginUseCase } from '../login.usecase';
import { LogoutUseCase } from '../logout.usecase';
import type { AuthUser } from '../../domain/models/auth-user.model';
import type { LoginRequest } from '../../domain/models/login-request.model';

export type RoleUser = 'user' | 'admin' | 'guest';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  role: RoleUser;
  username: string | null;
  image: string | null;
}

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>({
    isAuthenticated: false,
    role: 'guest',
    username: null,
    accessToken: null,
    image: null,
  }),
  withMethods((store, loginUseCase = inject(LoginUseCase), logoutUseCase = inject(LogoutUseCase)) => ({
    async login(request: LoginRequest) {
      try {
        const user: AuthUser = await loginUseCase.execute(request);
        patchState(store, {
          isAuthenticated: true,
          role: user.role,
          username: user.username,
          image: user.image,
          accessToken: 'authenticated',
        });
      } catch (err) {
        console.error('[AuthStore] login failed', err);
      }
    },
    async logout() {
      try {
        await logoutUseCase.execute();
        patchState(store, {
          isAuthenticated: false,
          role: 'guest',
          username: null,
          accessToken: null,
          image: null,
        });
      } catch (err) {
        console.error('[AuthStore] logout failed', err);
      }
    },
  })),
);
