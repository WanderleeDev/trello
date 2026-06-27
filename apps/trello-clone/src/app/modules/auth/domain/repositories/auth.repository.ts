import type { AuthUser } from '../models/auth-user.model';
import type { LoginRequest } from '../models/login-request.model';

export abstract class AuthRepository {
  abstract login(request: LoginRequest): Promise<AuthUser>;
  abstract register(email: string): Promise<AuthUser>;
  abstract recovery(email: string): Promise<void>;
  abstract logout(): Promise<void>;
}
