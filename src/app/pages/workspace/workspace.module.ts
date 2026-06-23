import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { RouterModule, Routes } from '@angular/router';

import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { AddListButtonComponent } from './components/add-list-button/add-list-button.component';

import { BoardComponent } from './components/board/board.component';
import { List } from './interfaces/board.model';
import { SidebarBoardComponent } from './components/sidebar-board/sidebar-board.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
  },
  {
    path: ':idBoard',
    component: WorkspaceComponent,
  },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), WorkspaceComponent,
    BoardHeaderComponent,
    BoardListComponent,
    BoardCardComponent,
    AddListButtonComponent,
    BoardComponent,
    SidebarBoardComponent],
})
export default class WorkspaceModule {
  list: List[] = [
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
}
