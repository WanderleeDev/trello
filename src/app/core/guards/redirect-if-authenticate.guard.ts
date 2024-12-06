import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectIsAuthenticated } from '../../store/auth/auth.selectors';
import { map, take } from 'rxjs';

export const redirectIfAuthenticateGuard: CanActivateFn = () => {
  const store: Store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    })
  );
};
