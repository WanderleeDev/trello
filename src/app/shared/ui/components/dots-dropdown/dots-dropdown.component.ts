import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { GridDotsIconComponent } from '../../../icons/components/grid-dots-icon.component';
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
    GridDotsIconComponent,
    AtlasianIconComponent,
    TrelloClrIconComponent,
  ],
})
export class DotsDropdownComponent {
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
}
