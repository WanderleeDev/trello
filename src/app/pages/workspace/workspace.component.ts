import { Component, inject, input } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List, Card } from './interfaces/board.model';
import { BoardModalTaskComponent } from '../../modules/boards/components/board-modal-task/board-modal-task.component';
import { NavComponent } from '../../shared/ui/components/nav/nav.component';
import { SidebarBoardComponent } from './components/sidebar-board/sidebar-board.component';
import { BoardComponent } from './components/board/board.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BtnBaseComponent } from '../../shared/ui/components/btn-base/btn-base.component';
import { AddListButtonComponent } from './components/add-list-button/add-list-button.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  standalone: true,
  imports: [
    NavComponent,
    SidebarBoardComponent,
    BoardComponent,
    BoardListComponent,
    BoardCardComponent,
    BtnBaseComponent,
    AddListButtonComponent,
    DialogModule,
    DragDropModule,
  ],
})
export class WorkspaceComponent {
  private readonly dialog = inject(Dialog);

  idBoard = input<string>();

  list: List[] = [
    {
      id: '1',
      title: 'List 1',
      cards: [
        { id: '1', title: 'Task 1', description: 'Description 1' },
        { id: '2', title: 'Task 2', description: 'Description 2' },
        { id: '3', title: 'Task 3', description: 'Description 3' },
      ],
    },
    {
      id: '2',
      title: 'List 2',
      cards: [
        { id: '4', title: 'Task 4', description: 'Description 4' },
        { id: '5', title: 'Task 5', description: 'Description 5' },
        { id: '6', title: 'Task 6', description: 'Description 6' },
      ],
    },
  ];

  private nextCardId = 7;
  private nextListId = 3;

  addCard(list: List) {
    const newCard: Card = {
      id: String(this.nextCardId++),
      title: `Task ${this.nextCardId - 1}`,
      description: `Description ${this.nextCardId - 1}`,
    };
    this.list = this.list.map(l =>
      l.id === list.id ? { ...l, cards: [...l.cards, newCard] } : l,
    );
  }

  deleteList(list: List) {
    this.list = this.list.filter(l => l.id !== list.id);
  }

  addList() {
    const newList: List = {
      id: String(this.nextListId++),
      title: `List ${this.nextListId - 1}`,
      cards: [],
    };
    this.list = [...this.list, newList];
  }

  onCardDropped(event: CdkDragDrop<Card[]>) {
    const targetList = this.list.find(l => l.cards === event.container.data);
    const sourceList = this.list.find(l => l.cards === event.previousContainer.data);
    if (!targetList || !sourceList) return;

    if (event.previousContainer === event.container) {
      moveItemInArray(targetList.cards, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        sourceList.cards,
        targetList.cards,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.list = this.list.map(l => ({ ...l }));
  }

  onListDropped(event: CdkDragDrop<List[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.list = [...this.list];
  }

  openDialog(card?: Card) {
    const dialogRef = this.dialog.open<Card | null>(BoardModalTaskComponent, {
      maxWidth: '500px',
      autoFocus: false,
      data: card,
    });

    dialogRef.closed.subscribe(result => {
      if (!result) return;

      this.list = this.list.map(l => ({
        ...l,
        cards: l.cards.map(c =>
          c.id === result.id ? { ...result } : c,
        ),
      }));
    });
  }
}
