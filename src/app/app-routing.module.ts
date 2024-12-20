import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module'),
  },
  {
    path: 'workspace',
    loadChildren: () => import('./pages/workspace/workspace.module'),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module'),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
