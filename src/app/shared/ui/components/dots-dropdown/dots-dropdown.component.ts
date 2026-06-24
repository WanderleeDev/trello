import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from '@angular/aria/menu';
import { MenuCore } from '../menu-core/menu-core';
import { GridDotsIconComponent } from '../../../icons/components/grid-dots-icon.component';
import { AtlasianIconComponent } from '../../../icons/components/atlasian-icon.component';
import { TrelloClrIconComponent } from '../../../icons/components/trello-clr-icon.component';

@Component({
  selector: 'app-dots-dropdown',
  templateUrl: './dots-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MenuCore,
    MenuItem,
    GridDotsIconComponent,
    AtlasianIconComponent,
    TrelloClrIconComponent,
  ],
})
export class DotsDropdownComponent {}
