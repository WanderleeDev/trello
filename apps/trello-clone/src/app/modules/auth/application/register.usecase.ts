import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../domain/repositories/auth.repository';
import type { AuthUser } from '../domain/models/auth-user.model';

@Injectable({ providedIn: 'root' })
export class RegisterUseCase {
  private readonly authRepo = inject(AuthRepository);

  async execute(email: string): Promise<AuthUser> {
    if (!email?.trim()) {
      throw new Error('Email is required');
    }
    return this.authRepo.register(email);
  }
}
