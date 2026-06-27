import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../domain/repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class LogoutUseCase {
  private readonly authRepo = inject(AuthRepository);

  async execute(): Promise<void> {
    return this.authRepo.logout();
  }
}
