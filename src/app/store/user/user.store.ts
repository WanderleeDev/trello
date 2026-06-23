import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { BoardTemplate } from '../../shared/mockup/templates';

export type RoleUser = 'user' | 'admin' | 'guest';
export type DataUser = Pick<UserState, 'username' | 'email' | 'image'>;

export interface UserState {
  username: string | null;
  email: string | null;
  image: string | null;
  role: RoleUser;
  myWorkspaces: BoardTemplate[];
  recentBoards: BoardTemplate[];
  staredBoards: BoardTemplate[];
}

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState<UserState>({
    username: null,
    email: null,
    image: null,
    role: 'guest',
    myWorkspaces: [
      {
        id: '1',
        name: 'My Trello Board',
        isFavorite: false,
      },
    ],
    recentBoards: [],
    staredBoards: [],
  }),
  withMethods((store) => ({
    getUserSuccess(user: Omit<UserState, 'myWorkspaces' | 'recentBoards' | 'staredBoards'>) {
      patchState(store, user);
    },
    updateUser(user: Partial<UserState>) {
      patchState(store, user);
    },
    clearUser() {
      patchState(store, {
        username: null,
        email: null,
        image: null,
        role: 'guest',
        myWorkspaces: [],
        recentBoards: [],
        staredBoards: [],
      });
    },
  })),
);
