import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { authActions } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap(() =>
        of(true).pipe(
          map(() =>
            authActions.loginSuccess({
              isAuthenticated: true,
              role: 'user',
              username: null,
              accessToken: '123',
              image: null,
            }),
          ),
          catchError(() => of(authActions.authError())),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccess),
        map(() => this.router.navigateByUrl('/home')),
      ),
    { dispatch: false },
  );
}
