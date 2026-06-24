import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BoardStore } from '../../../../store/board/board.store';
import { UserStore } from '../../../../store/user/user.store';
import { BellIconComponent } from '../../../icons/components/bell-icon.component';
import { HelpIconComponent } from '../../../icons/components/help-icon.component';
import { TrelloDynamicIconComponent } from '../../../icons/components/trello-dynamic-icon/trello-dynamic-icon.component';
import { BtnBaseComponent } from '../btn-base/btn-base.component';
import { BtnToggleThemeComponent } from '../btn-toggle-theme/btn-toggle-theme.component';
import { DotsDropdownComponent } from '../dots-dropdown/dots-dropdown.component';
import { RecentDropdownComponent } from '../recent-dropdown/recent-dropdown.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StarredDropdownComponent } from '../starred-dropdown/starred-dropdown.component';
import { TemplatesDropdownComponent } from '../templates-dropdown/templates-dropdown.component';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
import { WorkspaceDropdownComponent } from '../workspace-dropdown/workspace-dropdown.component';

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
    BellIconComponent,
    HelpIconComponent,
    BtnToggleThemeComponent,
    UserDropdownComponent,
  ],
})
export class NavComponent {
  private readonly router = inject(Router);
  protected readonly boardStore = inject(BoardStore);
  protected readonly userStore = inject(UserStore);

  public redirectHome(): void {
    this.router.navigate(['/']);
  }
}
