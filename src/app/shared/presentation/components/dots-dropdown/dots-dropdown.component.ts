import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { AtlasianIconComponent } from '../../../icons/components/atlasian-icon.component';
import { TrelloClrIconComponent } from '../../../icons/components/trello-clr-icon.component';

@Component({
  selector: 'app-dots-dropdown',
  templateUrl: './dots-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Menu,
    MenuTrigger,
    MenuItem,
    MenuContent,
    OverlayModule,
    AtlasianIconComponent,
    TrelloClrIconComponent,
  ],
})
export class DotsDropdownComponent {
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
}
