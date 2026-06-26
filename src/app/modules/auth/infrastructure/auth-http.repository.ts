import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/repositories/auth.repository';
import type { AuthUser } from '../domain/models/auth-user.model';
import type { LoginRequest } from '../domain/models/login-request.model';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthHttpRepository extends AuthRepository {
  constructor(private readonly tokenStorage: TokenStorageService) {
    super();
  }

  async login(request: LoginRequest): Promise<AuthUser> {
    // TODO: replace with real HTTP call when API is ready
    console.info('[AuthHttpRepository] login — mock implementation', request.email);
    const user: AuthUser = {
      id: crypto.randomUUID(),
      email: request.email,
      username: null,
      image: null,
      role: 'user',
    };
    this.tokenStorage.setToken('mock-token');
    return user;
  }

  async register(email: string): Promise<AuthUser> {
    console.info('[AuthHttpRepository] register — mock implementation', email);
    const user: AuthUser = {
      id: crypto.randomUUID(),
      email,
      username: null,
      image: null,
      role: 'user',
    };
    this.tokenStorage.setToken('mock-token');
    return user;
  }

  async recovery(_email: string): Promise<void> {
    console.info('[AuthHttpRepository] recovery — mock implementation');
    // TODO: call recovery API
  }

  async logout(): Promise<void> {
    console.info('[AuthHttpRepository] logout');
    this.tokenStorage.removeToken();
  }
}
