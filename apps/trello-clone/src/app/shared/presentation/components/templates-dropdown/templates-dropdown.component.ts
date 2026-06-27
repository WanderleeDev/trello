import { ChangeDetectionStrategy, Component, inject, input, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { CardCommonComponent } from '../card-common/card-common.component';
import { BoardTemplate } from '../../../mockup/templates';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-templates-dropdown',
  templateUrl: './templates-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, MenuTrigger, MenuItem, MenuContent, OverlayModule, CardCommonComponent],
})
export class TemplatesDropdownComponent {
  private readonly router = inject(Router);
  protected formatMenu = viewChild<Menu<string>>('formatMenu');
  readonly dropdownData = input<BoardTemplate[]>([]);
}
