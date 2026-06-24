import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@angular/aria/menu';
import { MenuCore } from '../menu-core/menu-core';
import { CardCommonComponent } from '../card-common/card-common.component';
import { BoardTemplate } from '../../../mockup/templates';

@Component({
  selector: 'app-workspace-dropdown',
  templateUrl: './workspace-dropdown.component.html',
  styleUrl: './workspace-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuCore, MenuItem, CardCommonComponent],
})
export class WorkspaceDropdownComponent {
  private readonly router = inject(Router);

  readonly title = input.required<string>();
  readonly dropdownData = input.required<BoardTemplate[]>();

  onSelect(boardId: string): void {
    this.router.navigate(['/board', boardId]);
  }

  toggleFavorite(event: Event, boardId: string): void {
    event.stopPropagation();
    console.log('Toggle favorite:', boardId);
  }
}
