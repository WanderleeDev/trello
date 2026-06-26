import type { AuthUser } from '../models/auth-user.model';
import type { LoginRequest } from '../models/login-request.model';

/** Puerto del hexágono: define qué necesita la app de auth */
export interface AuthRepository {
  login(request: LoginRequest): Promise<AuthUser>;
  register(email: string): Promise<AuthUser>;
  recovery(email: string): Promise<void>;
  logout(): Promise<void>;
}
