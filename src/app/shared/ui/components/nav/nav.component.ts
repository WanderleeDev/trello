import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBoardState } from '../../../../store/board/board.selectors';
import { Observable } from 'rxjs';
import { BoardState } from '../../../../store/board/board.state';
import { selectUserState } from '../../../../store/user/user.selectors';
import { UserState } from '../../../../store/user/user.state';
import { LetDirective } from '@ngrx/component';
import { NavbarMainOptionsComponent } from './components/navbar-main-options/navbar-main-options.component';
import { NavbarSecondOptionsComponent } from './components/navbar-second-options/navbar-second-options.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    standalone: true,
    imports: [
        LetDirective,
        NavbarMainOptionsComponent,
        NavbarSecondOptionsComponent,
    ],
})
export class NavComponent {
  private readonly router = inject(Router);
  protected readonly user$: Observable<UserState>;
  protected readonly templates$: Observable<BoardState>;

  constructor(private readonly store: Store) {
    this.templates$ = this.store.select(selectBoardState);
    this.user$ = this.store.select(selectUserState);
  }

  public redirectHome(): void {
    this.router.navigate(['/']);
  }
}
