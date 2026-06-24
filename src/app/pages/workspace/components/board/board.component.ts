import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { List, Card } from '../../interfaces/board.model';
import { BoardHeaderComponent } from '../board-header/board-header.component';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    standalone: true,
    imports: [BoardHeaderComponent, DragDropModule],
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
