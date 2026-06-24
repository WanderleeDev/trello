import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.store';
import { MenuCore } from '../menu-core/menu-core';
import { UserComponent } from '../user/user.component';
import { MenuItem } from '@angular/aria/menu';

@Component({
    selector: 'app-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrl: './user-dropdown.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MenuCore, UserComponent, MenuItem],
})
export class UserDropdownComponent {
  dataUser = input.required<DataUser>();
}
