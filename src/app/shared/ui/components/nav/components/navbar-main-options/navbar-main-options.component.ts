import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { BoardTemplate } from '../../../../../mockup/templates';
import { DotsDropdownComponent } from '../../../dots-dropdown/dots-dropdown.component';
import { BtnBaseComponent } from '../../../btn-base/btn-base.component';
import { TrelloDynamicIconComponent } from '../../../../../icons/components/trello-dynamic-icon/trello-dynamic-icon.component';
import { WorkspaceDropdownComponent } from '../../../workspace-dropdown/workspace-dropdown.component';
import { CardCommonComponent } from '../../../card-common/card-common.component';
import { StarIconComponent } from '../../../../../icons/components/star-icon.component';

@Component({
    selector: 'app-navbar-main-options',
    templateUrl: './navbar-main-options.component.html',
    styleUrl: './navbar-main-options.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DotsDropdownComponent,
        BtnBaseComponent,
        TrelloDynamicIconComponent,
        WorkspaceDropdownComponent,
        CardCommonComponent,
        StarIconComponent,
    ],
})
export class NavbarMainOptionsComponent {
  readonly workspace = input.required<BoardTemplate[]>();
  readonly boardRecent = input.required<BoardTemplate[]>();
  readonly boardStarred = input.required<BoardTemplate[]>();
  readonly templates = input.required<BoardTemplate[]>();

  constructor(private readonly router: Router) {}

  public redirectHome(): void {
    this.router.navigate(['/']);
  }
}
