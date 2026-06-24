import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, MenuTrigger, MenuContent, OverlayModule],
})
export class NotificationsDropdownComponent {
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
}
