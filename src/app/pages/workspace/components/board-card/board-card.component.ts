import { Component, Output, EventEmitter, input } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Card } from '../../interfaces/board.model';

@Component({
    selector: 'app-board-card',
         templateUrl: './board-card.component.html',
    standalone: true,
    imports: [DragDropModule],
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
