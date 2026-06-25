import { Component, output, input, signal } from '@angular/core';
import { List } from '../../interfaces/board.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddListButtonComponent } from '../add-list-button/add-list-button.component';
import { ColumnBoard } from '../column-board/column-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports: [CdkDropList, CdkDrag, AddListButtonComponent, ColumnBoard],
})
export class BoardComponent {
  readonly boardName = input<string>('My Board');
  readonly lists = input<List[]>([]);
  readonly listDropped = output<CdkDragDrop<List[]>>();
  protected isEditable = signal(false);

  onListDropped(event: CdkDragDrop<List[]>) {
    this.listDropped.emit(event);
  }

  numbers = signal([1, 2, 3]);
  drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.numbers(), event.previousIndex, event.currentIndex);
  }
  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }

  protected addNewColumn(title: string) {
    console.log(title);
    this.numbers.update(prev => [...prev, prev.length + 1]);
  }

  protected editableToggle() {
    this.isEditable.update(v => !v);
  }
}
