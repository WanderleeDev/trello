import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { selectIsAuthenticated } from '../../../store/auth/auth.selectors';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const store: Store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return false;
      }

      return true;
    })
  );
};
