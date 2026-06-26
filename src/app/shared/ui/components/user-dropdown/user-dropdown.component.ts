import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserComponent } from '../user/user.component';
import { UserStore } from '../../../../store/user/user.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [Menu, MenuTrigger, MenuItem, MenuContent, OverlayModule, UserComponent],
})
export class UserDropdownComponent {
  protected readonly userStore = inject(UserStore);
  readonly #router = inject(Router);
  protected formatMenu = viewChild<Menu<string>>('formatMenu');

  protected navigate(route: string): void {
    if (!route.trim()) return;
    this.#router.navigateByUrl(route);
  }

  protected logout(): void {}
}
