import { Routes } from '@angular/router';

export const workspaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../../board/presentation/views/boards-listing/boards-listing.component'),
  },
  {
    path: 'templates',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../../templates/views/entry-page/entry-page.component'),
      },
      {
        // Placeholder — under-construction until implemented
        path: 'features/:id',
        loadComponent: () =>
          import('../../../../shared/presentation/views/under-construction/under-construction.component'),
      },
      {
        path: 'popular',
        loadComponent: () =>
          import('../../../../shared/presentation/views/under-construction/under-construction.component'),
      },
      {
        // Placeholder — under-construction until implemented
        path: ':category',
        loadComponent: () =>
          import('../../../../shared/presentation/views/under-construction/under-construction.component'),
      },
      {
        // Placeholder — under-construction until implemented
        path: ':category/:id',
        loadComponent: () =>
          import('../../../../shared/presentation/views/under-construction/under-construction.component'),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () =>
      import('../../../entry/entry.component'),
  },
  {
    // Placeholder routes — redirect to under-construction until implemented
    path: 'boards',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
  {
    path: 'highlights',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
  {
    path: 'views',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
  {
    path: 'members',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
  {
    // Legacy redirect: /workspace/:idBoard → /board/:idBoard
    path: ':idBoard',
    redirectTo: '/board/:idBoard',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>       import('../../../../shared/presentation/views/not-found/not-found.component'),
  },
];

export default workspaceRoutes;
