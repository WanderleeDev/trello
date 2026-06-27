import { Routes } from '@angular/router';

export const boardRoutes: Routes = [
  {
    path: 'board/:idBoard',
    loadComponent: () =>
      import('../views/board-view/board-view.component'),
  },
];

export default boardRoutes;
