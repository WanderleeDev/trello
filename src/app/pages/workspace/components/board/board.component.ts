import { Component, output, input } from '@angular/core';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { List } from '../../interfaces/board.model';
import { BoardHeaderComponent } from '../board-header/board-header.component';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    standalone: true,
    imports: [BoardHeaderComponent, DragDropModule],
})
export class BoardComponent {
  readonly boardName = input<string>('My Board');
  readonly lists = input<List[]>([]);
  readonly listDropped = output<CdkDragDrop<List[]>>();

  onListDropped(event: CdkDragDrop<List[]>) {
    this.listDropped.emit(event);
  }
}
