import { Component, Output, EventEmitter, input } from '@angular/core';
import { Card } from '../../interfaces/board.model'; // Assuming you have a model file

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {
  readonly card = input.required<Card>();
  @Output() editCard = new EventEmitter<void>();
  @Output() deleteCard = new EventEmitter<void>();

  onEditCard() {
    this.editCard.emit();
  }

  onDeleteCard() {
    this.deleteCard.emit();
  }
}
