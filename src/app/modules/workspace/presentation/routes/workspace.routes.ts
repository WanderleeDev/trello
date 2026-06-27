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
        loadComponent: () => import('../../../templates/views/entry-page/entry-page.component'),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () => import('../../../entry/entry.component'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
];

export default workspaceRoutes;
