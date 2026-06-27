import { Routes } from '@angular/router';
import boardRoutes from '../../../board/presentation/routes/board.routes';

export const workspaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../../board/presentation/views/boards-listing/boards-listing.component'),
  },
  ...boardRoutes,
  {
    path: 'templates',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../../templates/views/entry-page/entry-page.component'),
      },
      {
        path: 'features/:id',
        loadComponent: () =>
          import('../../../templates/views/feature-template/feature-template.component'),
      },
      {
        path: ':category',
        loadComponent: () =>
          import('../../../templates/views/all-templates-for-category/all-templates-for-category.component'),
      },
      {
        path: ':category/:id',
        loadComponent: () =>
          import('../../../templates/views/simple-template/simple-template.component'),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () =>
      import('../../../entry/entry.component'),
  },
  {
    // Legacy redirect: /workspace/:idBoard → /workspace/board/:idBoard
    path: ':idBoard',
    redirectTo: 'board/:idBoard',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('../../../not-found/not-found.component'),
  },
];

export default workspaceRoutes;
