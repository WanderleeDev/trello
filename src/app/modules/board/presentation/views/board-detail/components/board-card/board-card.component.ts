import { Component, input } from '@angular/core';
import { Card } from '../../interfaces/board.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  standalone: true,
})
export class BoardCardComponent {
  readonly card = input.required<Card>();
}
