import { Routes } from '@angular/router';

export const boardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../views/boards-listing/boards-listing.component'),
  },
  {
    path: 'board/:idBoard',
    loadComponent: () =>
      import('../views/board-detail/board-detail.component'),
  },
  {
    path: 'templates',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../../templates/views/entry-page/entry-page.component').then(
            m => m.EntryPageComponent,
          ),
      },
      {
        path: 'features/:id',
        loadComponent: () =>
          import(
            '../../../templates/views/feature-template/feature-template.component'
          ).then(m => m.FeatureTemplateComponent),
      },
      {
        path: ':category',
        loadComponent: () =>
          import(
            '../../../templates/views/all-templates-for-category/all-templates-for-category.component'
          ).then(m => m.AllTemplatesForCategoryComponent),
      },
      {
        path: ':category/:id',
        loadComponent: () =>
          import(
            '../../../templates/views/simple-template/simple-template.component'
          ).then(m => m.SimpleTemplateComponent),
      },
    ],
  },
  {
    path: 'entry',
    loadComponent: () =>
      import('../../../entry/entry.component').then(m => m.EntryComponent),
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

export default boardRoutes;
