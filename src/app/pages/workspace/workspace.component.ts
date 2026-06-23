import { Component, input } from '@angular/core';
import { List } from './interfaces/board.model';
import { BoardModalTaskComponent } from '../../modules/boards/components/board-modal-task/board-modal-task.component';
import { NavComponent } from '../../shared/ui/components/nav/nav.component';
import { SidebarBoardComponent } from './components/sidebar-board/sidebar-board.component';
import { BoardComponent } from './components/board/board.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BtnBaseComponent } from '../../shared/ui/components/btn-base/btn-base.component';
import { AddSvgComponent } from '../../shared/icons/components/add-svg.component';
import { AddListButtonComponent } from './components/add-list-button/add-list-button.component';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';

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
    AddSvgComponent,
    AddListButtonComponent,
    DialogModule,
  ],
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
