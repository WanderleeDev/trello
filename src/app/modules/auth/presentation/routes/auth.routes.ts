import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/auth-layout.component'),
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: 'sign-in',
        loadComponent: () => import('../views/login/login.view'),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('../views/register/register.view'),
      },
      {
        path: 'account-recovery',
        loadComponent: () => import('../views/account-recovery/account-recovery.view'),
      },
    ],
  },
];

export default authRoutes;
