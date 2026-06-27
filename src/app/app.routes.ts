import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/presentation/routes/auth.routes'),
  },
  {
    path: 'workspace',
    loadComponent: () => import('./modules/workspace/presentation/layout/workspace-layout.component'),
    loadChildren: () => import('./modules/workspace/presentation/routes/workspace.routes'),
  },
  {
    path: '**',
    loadComponent: () => import('./modules/not-found/not-found.component'),
  },
];
