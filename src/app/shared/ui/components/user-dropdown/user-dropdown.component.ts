import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.store';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { UserComponent } from '../user/user.component';

@Component({
    selector: 'app-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrl: './user-dropdown.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DropdownComponent, UserComponent],
})
export class UserDropdownComponent {
  dataUser = input.required<DataUser>();
}
