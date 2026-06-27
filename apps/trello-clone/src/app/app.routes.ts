import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./shared/presentation/views/under-construction/under-construction-view'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/presentation/routes/auth.routes'),
  },
  {
    path: 'workspace',
    loadComponent: () =>
      import('./modules/workspace/presentation/layout/workspace-layout.component'),
    loadChildren: () => import('./modules/workspace/presentation/routes/workspace.routes'),
  },
  {
    path: 'board/:idBoard/:nameBoard',
    loadComponent: () => import('./modules/board/presentation/views/board-view/board-view'),
  },
  {
    path: '**',
    loadComponent: () => import('./shared/presentation/views/not-found/not-found-view'),
  },
];
