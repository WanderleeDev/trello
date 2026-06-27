import { ChangeDetectionStrategy, Component, inject, input, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { CardCommonComponent } from '../card-common/card-common.component';
import { BoardTemplate } from '../../mockup/templates';
import { OverlayModule } from '@angular/cdk/overlay';

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
    CardCommonComponent,
    CardCommonComponent,
  ],
})
export class WorkspaceDropdownComponent {
  readonly #router = inject(Router);
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
  readonly dropdownData = input<BoardTemplate[]>([
    {
      id: '1',
      name: 'Sample Board 1',
      description: 'This is a sample board description.',
      image: 'https://trello.com/assets/cc47d0a8c646581ccd08.svg',
      isFavorite: false,
      tag: 'Sample Tag 1',
    },
    {
      id: '2',
      name: 'Sample Board 2',
      description: 'This is another sample board description.',
      image: 'https://trello.com/assets/cc47d0a8c646581ccd08.svg',
      isFavorite: true,
      tag: 'Sample Tag 2',
    },
  ]);

  protected goUnderConstruction(): void {
    this.#router.navigateByUrl('/under-construction');
  }
}
