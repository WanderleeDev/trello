import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../../../store/user/user.state';

@Component({
  selector: 'app-navbar-second-options',
  templateUrl: './navbar-second-options.component.html',
  styleUrl: './navbar-second-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSecondOptionsComponent {
  readonly dataUser = input.required<DataUser>();
}
