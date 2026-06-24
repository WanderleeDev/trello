import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetterGradientIconComponent } from '../../../../shared/icons/components/letter-gradient-icon.component';
import { BtnBaseComponent } from '../../../../shared/ui/components/btn-base/btn-base.component';

@Component({
    selector: 'app-sidebar-board',
    templateUrl: './sidebar-board.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        LetterGradientIconComponent,
        BtnBaseComponent,
    ],
})
export class SidebarBoardComponent {}
