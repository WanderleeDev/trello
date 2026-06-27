import { Component, signal } from '@angular/core';
import { TrelloDynamicIconComponent } from '../../icons/components/trello-dynamic-icon/trello-dynamic-icon.component';
import { BtnBaseComponent } from '../btn-base/btn-base.component';
import { BtnToggleThemeComponent } from '../btn-toggle-theme/btn-toggle-theme.component';
import { DotsDropdownComponent } from '../dots-dropdown/dots-dropdown.component';
import { HelpDropdownComponent } from '../help-dropdown/help-dropdown.component';
import { NotificationsDropdownComponent } from '../notifications-dropdown/notifications-dropdown.component';
import { RecentDropdownComponent } from '../recent-dropdown/recent-dropdown.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StarredDropdownComponent } from '../starred-dropdown/starred-dropdown.component';
import { TemplatesDropdownComponent } from '../templates-dropdown/templates-dropdown.component';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
import { WorkspaceDropdownComponent } from '../workspace-dropdown/workspace-dropdown.component';
import { templates } from '../../mockup/templates';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [
    DotsDropdownComponent,
    BtnBaseComponent,
    TrelloDynamicIconComponent,
    WorkspaceDropdownComponent,
    RecentDropdownComponent,
    TemplatesDropdownComponent,
    StarredDropdownComponent,
    SearchBarComponent,
    BtnToggleThemeComponent,
    UserDropdownComponent,
    NotificationsDropdownComponent,
    HelpDropdownComponent,
    RouterLink,
  ],
})
export class NavComponent {
  protected readonly templates = signal(templates);
}
