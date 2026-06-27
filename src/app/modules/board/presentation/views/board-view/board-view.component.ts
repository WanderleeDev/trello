import { Component, input } from '@angular/core';
import { NavComponent } from '../../../../../shared/presentation/components/nav/nav.component';
import { BoardViewAreaComponent } from '../../components/board-view/board-view.component';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  standalone: true,
  imports: [NavComponent, BoardViewAreaComponent],
})
export default class BoardViewComponent {
  readonly idBoard = input.required<string>();
}
