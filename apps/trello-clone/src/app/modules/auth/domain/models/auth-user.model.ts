export interface AuthUser {
  id: string;
  email: string;
  username: string | null;
  image: string | null;
  role: 'user' | 'admin';
}
