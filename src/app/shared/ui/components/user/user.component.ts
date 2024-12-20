import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly dataUser = input.required<DataUser>();
  readonly isMinimal = input<boolean>(false);
}
