import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BoardTemplate } from '../../../../shared/mockup/templates';

@Component({
  selector: 'app-workspace-dropdown',
  templateUrl: './workspace-dropdown.component.html',
  styleUrl: './workspace-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDropdownComponent {
  readonly title = input.required<string>();
  readonly dropdownData = input.required<BoardTemplate[]>();
  readonly subTitle = input<string>();
}
