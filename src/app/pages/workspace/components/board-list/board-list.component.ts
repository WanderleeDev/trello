import { Component, Output, EventEmitter, input } from '@angular/core';
import { List, Card } from '../../interfaces/board.model'; // Assuming you have a model file

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent {
  readonly list = input.required<List>();
  @Output() addCardEvent = new EventEmitter<List>();
  @Output() deleteListEvent = new EventEmitter<List>();
  @Output() editCardEvent = new EventEmitter<Card>();
  @Output() deleteCardEvent = new EventEmitter<{ list: List; card: Card }>();

  addCard() {
    this.addCardEvent.emit(this.list());
  }

  deleteList() {
    this.deleteListEvent.emit(this.list());
  }

  onEditCard(card: Card) {
    this.editCardEvent.emit(card);
  }

  onDeleteCard(card: Card) {
    this.deleteCardEvent.emit({ list: this.list(), card });
  }
}
