import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BoardStore } from '../../../../store/board/board.store';
import { UserStore } from '../../../../store/user/user.store';
import { NavbarMainOptionsComponent } from './components/navbar-main-options/navbar-main-options.component';
import { NavbarSecondOptionsComponent } from './components/navbar-second-options/navbar-second-options.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
  imports: [NavbarMainOptionsComponent, NavbarSecondOptionsComponent],
})
export class NavComponent {
  private readonly router = inject(Router);
  protected readonly boardStore = inject(BoardStore);
  protected readonly userStore = inject(UserStore);

  public redirectHome(): void {
    this.router.navigate(['/']);
  }
}
