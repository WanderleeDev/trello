import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../domain/repositories/auth.repository';
import type { LoginRequest } from '../domain/models/login-request.model';
import type { AuthUser } from '../domain/models/auth-user.model';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  private readonly authRepo = inject(AuthRepository);

  async execute(request: LoginRequest): Promise<AuthUser> {
    if (!request.email?.trim()) {
      throw new Error('Email is required');
    }
    return this.authRepo.login(request);
  }
}
