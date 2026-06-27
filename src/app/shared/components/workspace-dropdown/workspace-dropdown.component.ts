import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';

export interface WorkspaceMenuItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-workspace-dropdown',
  templateUrl: './workspace-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Menu,
    MenuTrigger,
    MenuItem,
    MenuContent,
    OverlayModule,
  ],
})
export class WorkspaceDropdownComponent {
  readonly #router = inject(Router);
  protected formatMenu = viewChild<Menu<string>>('formatMenu');

  protected readonly menuItems: WorkspaceMenuItem[] = [
    { id: 'boards', label: 'Boards', icon: 'dashboard' },
    { id: 'highlights', label: 'Highlights', icon: 'insights' },
    { id: 'views', label: 'Views', icon: 'view_quilt' },
    { id: 'members', label: 'Members', icon: 'group' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  protected goUnderConstruction(): void {
    this.#router.navigateByUrl('/under-construction');
  }
}
