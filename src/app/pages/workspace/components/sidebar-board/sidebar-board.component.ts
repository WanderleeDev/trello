import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetterGradientIconComponent } from '../../../../shared/icons/components/letter-gradient-icon.component';
import { BtnBaseComponent } from '../../../../shared/ui/components/btn-base/btn-base.component';
import { AddSvgComponent } from '../../../../shared/icons/components/add-svg.component';
import { StarIconComponent } from '../../../../shared/icons/components/star-icon.component';

@Component({
    selector: 'app-sidebar-board',
    templateUrl: './sidebar-board.component.html',
    styleUrl: './sidebar-board.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        LetterGradientIconComponent,
        BtnBaseComponent,
        AddSvgComponent,
        StarIconComponent,
    ],
})
export class SidebarBoardComponent {}
