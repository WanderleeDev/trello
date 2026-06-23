import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../../../store/user/user.store';
import { SearchBarComponent } from '../../../search-bar/search-bar.component';
import { BtnBaseComponent } from '../../../btn-base/btn-base.component';
import { BellIconComponent } from '../../../../../icons/components/bell-icon.component';
import { HelpIconComponent } from '../../../../../icons/components/help-icon.component';
import { BtnToggleThemeComponent } from '../../../btn-toggle-theme/btn-toggle-theme.component';
import { UserDropdownComponent } from '../../../user-dropdown/user-dropdown.component';

@Component({
    selector: 'app-navbar-second-options',
    templateUrl: './navbar-second-options.component.html',
    styleUrl: './navbar-second-options.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SearchBarComponent,
        BtnBaseComponent,
        BellIconComponent,
        HelpIconComponent,
        BtnToggleThemeComponent,
        UserDropdownComponent,
    ],
})
export class NavbarSecondOptionsComponent {
  readonly dataUser = input.required<DataUser>();
}
