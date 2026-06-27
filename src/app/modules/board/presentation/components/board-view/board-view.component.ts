import { Component, output, input, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddListButtonComponent } from '../add-list-button/add-list-button.component';
import { ColumnBoard } from '../column-board/column-board';

type ColumnProps = {
  title: string;
};

@Component({
  selector: 'app-board-view-area',
  templateUrl: './board-view.component.html',
  imports: [CdkDropList, CdkDrag, AddListButtonComponent, ColumnBoard],
  styles: `
    :host {
      overflow-x: hidden;
      padding-right: 1rem;
      height: 100%;
    }
  `,
})
export class BoardViewAreaComponent {
  readonly boardName = input<string>('My Board');
  protected numbers = signal([1, 2, 3]);

  protected drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.numbers(), event.previousIndex, event.currentIndex);
  }

  protected addNewColumn(title: string) {
    this.numbers.update(prev => [...prev, prev.length + 1]);
  }
}
