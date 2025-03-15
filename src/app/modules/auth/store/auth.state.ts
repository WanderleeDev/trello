export interface AuthState extends Omit<User, 'password' | 'email'> {
  isAuthenticated: boolean;
  accessToken: string | null;
}

export interface User {
  username: string | null;
  password: string;
  email: string;
  image: string | null;
  role: RoleUser;
}

export type LoginRequest = Pick<User, 'email'>;
export type UserResponse = Omit<AuthState, 'password'>;

export type RoleUser = 'user' | 'admin' | 'guest';
