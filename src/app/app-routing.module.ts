import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './pages/home/guards/auth.guard';
import { redirectIfAuthenticateGuard } from './core/guards/redirect-if-authenticate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/home/home.module'),
  },
  {
    path: 'login',
    canActivate: [redirectIfAuthenticateGuard],
    loadChildren: () => import('./pages/login/login.module'),
  },
  {
    path: 'sign-up',
    canActivate: [redirectIfAuthenticateGuard],
    loadChildren: () => import('./pages/sign-up/sign-up.module'),
  },
  {
    path: '**',
    redirectTo: 'home',
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
