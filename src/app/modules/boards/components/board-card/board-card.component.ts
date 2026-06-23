import { Component, input } from '@angular/core';
import { LinkCard } from '../../../../shared/interfaces/LinkCard.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-board-card',
    templateUrl: './board-card.component.html',
    styleUrls: ['./board-card.component.css'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class BoardCardComponent {
  readonly data = input.required<LinkCard>();
}
