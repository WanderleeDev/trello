import { Component, input } from '@angular/core';
import { NavComponent } from '../../../../../shared/components/nav/nav.component';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  standalone: true,
  imports: [NavComponent, BoardComponent],
})
export default class BoardDetailComponent {
  readonly idBoard = input<string>();
}
