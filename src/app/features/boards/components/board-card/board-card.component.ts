import { Component, input } from '@angular/core';
import { LinkCard } from '../../../../shared/interfaces/LinkCard.interface';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {
  readonly data = input.required<LinkCard>();
}
