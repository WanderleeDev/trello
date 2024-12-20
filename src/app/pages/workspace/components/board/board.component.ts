import { Component } from '@angular/core';

import { List, Card } from '../../interfaces/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  boardName = 'My Board';
  lists: List[] = [];

  addList() {
    // Implementation for adding a new list
  }

  addCard(list: List) {
    // Implementation for adding a new card to a list
  }

  deleteList(list: List) {
    // Implementation for deleting a list
  }

  editCard(card: Card) {
    // Implementation for editing a card
  }

  deleteCard(list: List, card: Card) {
    // Implementation for deleting a card
  }
}
