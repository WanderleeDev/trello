import { Routes } from '@angular/router';

export const workspaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../../board/presentation/views/boards-listing/boards-listing.component'),
  },
  {
    path: 'template',
    children: [
      {
        path: '',
        loadComponent: () => import('../views/template/entry-page/entry-page.component'),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () => import('../views/entry/entry.component'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction.component'),
  },
];

export default workspaceRoutes;
