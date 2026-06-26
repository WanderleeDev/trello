import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-help-dropdown',
  templateUrl: './help-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, MenuTrigger, MenuItem, MenuContent, OverlayModule],
})
export class HelpDropdownComponent {
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
}
