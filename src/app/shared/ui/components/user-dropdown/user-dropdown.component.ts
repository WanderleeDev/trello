import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserComponent } from '../user/user.component';
import { UserStore } from '../../../../store/user/user.store';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [Menu, MenuTrigger, MenuItem, MenuContent, OverlayModule, UserComponent],
})
export class UserDropdownComponent {
  protected readonly userStore = inject(UserStore);
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
}
