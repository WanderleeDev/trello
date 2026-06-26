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
  email: string | null;
  image: string | null;
}

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>({
    isAuthenticated: false,
    role: 'guest',
    username: null,
    email: null,
    accessToken: null,
    image: null,
  }),
  withMethods((store, loginUseCase = inject(LoginUseCase), logoutUseCase = inject(LogoutUseCase)) => ({
    async login(request: LoginRequest) {
      const user: AuthUser = await loginUseCase.execute(request);
      patchState(store, {
        isAuthenticated: true,
        role: user.role,
        username: user.username,
        email: user.email,
        image: user.image,
        accessToken: 'authenticated',
      });
    },
    async logout() {
      await logoutUseCase.execute();
      patchState(store, {
        isAuthenticated: false,
        role: 'guest',
        username: null,
        email: null,
        accessToken: null,
        image: null,
      });
    },
  })),
);
