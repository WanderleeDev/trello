import { Component, input } from '@angular/core';
import { List } from './interfaces/board.model';
import { Dialog } from '@angular/cdk/dialog';
import { BoardModalTaskComponent } from '../../modules/boards/components/board-modal-task/board-modal-task.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
})
export class WorkspaceComponent {
  idBoard = input.required<string>();

  constructor(private dialog: Dialog) {}

  readonly list: List[] = [
    {
      id: '1',
      title: 'List 1',
      cards: [
        {
          id: '1',
          title: 'Task 1',
          description: 'Description 1',
        },
        {
          id: '2',
          title: 'Task 2',
          description: 'Description 2',
        },
        {
          id: '3',
          title: 'Task 3',
          description: 'Description 3',
        },
      ],
    },
    {
      id: '2',
      title: 'List 2',
      cards: [
        {
          id: '4',
          title: 'Task 4',
          description: 'Description 4',
        },
        {
          id: '5',
          title: 'Task 5',
          description: 'Description 5',
        },
        {
          id: '6',
          title: 'Task 6',
          description: 'Description 6',
        },
      ],
    },
  ];

  public openDialog() {
    this.dialog.open(BoardModalTaskComponent, {
      maxWidth: '500px',
      autoFocus: false,
    });
  }
}
