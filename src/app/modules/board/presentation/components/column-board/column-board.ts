import { Component, input, linkedSignal, signal } from '@angular/core';
import { AddListButtonComponent } from '../add-list-button/add-list-button.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Card } from '../../interfaces/board.model';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column-board',
  imports: [AddListButtonComponent, TaskCardComponent, CdkDropList, CdkDrag],
  templateUrl: './column-board.html',
})
export class ColumnBoard {
  readonly title = input.required<string>();
  readonly data = input<Card[]>([
    {
      id: 'asasasada',
      title: 'testing',
      image:
        'https://trello.com/1/cards/66ca554e817862881ebfa1cc/attachments/66ca554e817862881ebfa446/previews/66ca554e817862881ebfa44e/download/Verifying.png',
      description: 'is a simple description',
    },
    {
      id: 'asasasada5',
      title: 'Chocobo',
      description: 'is a simple description',
    },
  ]);
  protected cards = linkedSignal(() => this.data());
  protected isEditable = signal(false);

  protected editableToggle() {
    this.isEditable.update(v => !v);
  }

  protected addCard(title: string) {
    this.cards.update(prev => [...prev, { id: crypto.randomUUID(), title }]);
  }

  protected drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards(), event.previousIndex, event.currentIndex);
  }
}
