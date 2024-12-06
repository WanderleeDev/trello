import { BoardTemplate } from '../../shared/mockup/templates';

export interface UserState {
  username: DataNullish<string>;
  password: DataNullish<string>;
  email: DataNullish<string>;
  image: DataNullish<string>;
  role: RoleUser;
  myWorkspaces: BoardTemplate[];
  recentBoards: BoardTemplate[];
  staredBoards: BoardTemplate[];
}

export type RoleUser = 'user' | 'admin' | 'guest';
export type DataNullish<T> = T | null;
export type DataUser = Pick<UserState, 'username' | 'email' | 'image'>;
