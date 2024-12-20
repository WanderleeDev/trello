import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.state';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDropdownComponent {
  dataUser = input.required<DataUser>();
}
