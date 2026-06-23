import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BoardTemplate } from '../../../../shared/mockup/templates';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ArrowDownIconComponent } from '../../../icons/components/arrow-down-icon.component';
import { LinkCardComponent } from '../link-card/link-card.component';
import { StarIconComponent } from '../../../icons/components/star-icon.component';

@Component({
    selector: 'app-workspace-dropdown',
    templateUrl: './workspace-dropdown.component.html',
    styleUrl: './workspace-dropdown.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DropdownComponent,
        ArrowDownIconComponent,
        LinkCardComponent,
        StarIconComponent,
    ],
})
export class WorkspaceDropdownComponent {
  readonly title = input.required<string>();
  readonly dropdownData = input.required<BoardTemplate[]>();
  readonly subTitle = input<string>();
}
