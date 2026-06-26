import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/auth-layout.component'),
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: 'sign-in',
        loadComponent: () => import('../views/login/login.component'),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('../views/register/register.component'),
      },
      {
        path: 'account-recovery',
        loadComponent: () => import('../views/account-recovery/account-recovery.component'),
      },
    ],
  },
];
