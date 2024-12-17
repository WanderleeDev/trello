import { Component, signal } from '@angular/core';
import { Board } from './components/board-card/board-card.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  workspaceBoards = signal<Board[]>([
    {
      id: '1',
      name: 'Front-end Development',
      backgroundColor: 'var(--board-bg-1)',
      workspace: 'Personal',
    },
    {
      id: '2',
      name: 'Backend Projects',
      backgroundColor: 'var(--board-bg-2)',
      workspace: 'Personal',
    },
    {
      id: '3',
      name: 'Design System',
      backgroundColor: 'var(--board-bg-3)',
      workspace: 'Personal',
    },
    {
      id: '4',
      name: 'Marketing Campaign',
      backgroundColor: 'var(--board-bg-4)',
      workspace: 'Personal',
    },
  ]);

  onStarToggled(event: { boardId: string; starred: boolean }): void {
    console.log('Board star toggled:', event);
    // TODO: Implement star toggle logic with a service
  }
}
