import { Component, input } from '@angular/core';
import { NavComponent } from '../../../../../shared/presentation/components/nav/nav.component';
import { BoardViewAreaComponent } from '../../components/board-view/board-view.component';
import { BtnBaseComponent } from '../../../../../shared/presentation/components/btn-base/btn-base.component';
import { MatIconComponent } from '../../../../../shared/presentation/components/mat-icon/mat-icon.component';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.html',
  standalone: true,
  imports: [NavComponent, BoardViewAreaComponent, BtnBaseComponent, MatIconComponent],
})
export default class BoardViewComponent {
  readonly idBoard = input.required<string>();
  readonly nameBoard = input.required<string>();
}
