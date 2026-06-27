import { Routes } from '@angular/router';

export const workspaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../../board/presentation/views/boards-listing/boards-listing-view'),
  },
  {
    path: 'template',
    children: [
      {
        path: '',
        loadComponent: () => import('../views/template-view/template-view'),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () => import('../views/entry/entry-view'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../../../../shared/presentation/views/under-construction/under-construction-view'),
  },
];

export default workspaceRoutes;
