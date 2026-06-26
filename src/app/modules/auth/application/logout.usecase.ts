import { Injectable, inject } from '@angular/core';
import { AUTH_REPOSITORY } from '../infrastructure/auth.di';
import type { AuthRepository } from '../domain/repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class LogoutUseCase {
  private readonly authRepo = inject<AuthRepository>(AUTH_REPOSITORY);

  async execute(): Promise<void> {
    return this.authRepo.logout();
  }
}
