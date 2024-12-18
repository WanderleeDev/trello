import { Component, signal } from '@angular/core';
import { recentBoards, starredBoards, workspaceBoards } from './board.mockup';
import { LinkCard } from '../../shared/interfaces/LinkCard.interface';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  protected readonly workspaceBoards = signal<LinkCard[]>(workspaceBoards);

  protected readonly recentBoards = signal<LinkCard[]>(recentBoards);

  protected readonly starredBoards = signal<LinkCard[]>(starredBoards);

  onStarToggled(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('Board star toggled:');
    // TODO: Implement star toggle logic with a service
  }
}
