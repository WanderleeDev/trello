import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/layout/auth-layout.component').then(
        m => m.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./modules/auth/views/login/login.component').then(
            m => m.LoginComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./modules/auth/views/register/register.component').then(
            m => m.RegisterComponent
          ),
      },
      {
        path: 'account-recovery',
        loadComponent: () =>
          import(
            './modules/auth/views/account-recovery/account-recovery.component'
          ).then(m => m.AccountRecoveryComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        m => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/boards/boards.component').then(
            m => m.BoardsComponent
          ),
      },
      {
        path: 'templates',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './modules/templates/views/entry-page/entry-page.component'
              ).then(m => m.EntryPageComponent),
          },
          {
            path: 'features/:id',
            loadComponent: () =>
              import(
                './modules/templates/views/feature-template/feature-template.component'
              ).then(m => m.FeatureTemplateComponent),
          },
          {
            path: ':category',
            loadComponent: () =>
              import(
                './modules/templates/views/all-templates-for-category/all-templates-for-category.component'
              ).then(m => m.AllTemplatesForCategoryComponent),
          },
          {
            path: ':category/:id',
            loadComponent: () =>
              import(
                './modules/templates/views/simple-template/simple-template.component'
              ).then(m => m.SimpleTemplateComponent),
          },
        ],
      },
      {
        path: 'entry',
        loadComponent: () =>
          import('./modules/entry/entry.component').then(
            m => m.EntryComponent
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./modules/not-found/not-found.component').then(
            m => m.NotFoundComponent
          ),
      },
    ],
  },
  {
    path: 'workspace/:idBoard',
    loadComponent: () =>
      import('./pages/workspace/workspace.component').then(
        m => m.WorkspaceComponent
      ),
  },
  {
    path: 'workspace',
    redirectTo: 'workspace/default',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
];
