import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('../views/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('../views/register/register.component').then(m => m.RegisterComponent),
      },
      {
        path: 'account-recovery',
        loadComponent: () =>
          import('../views/account-recovery/account-recovery.component').then(
            m => m.AccountRecoveryComponent,
          ),
      },
    ],
  },
];
