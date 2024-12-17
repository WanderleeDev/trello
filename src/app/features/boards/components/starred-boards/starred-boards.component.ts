import { Component } from '@angular/core';
import { Board } from '../board-card/board-card.component';

@Component({
  selector: 'app-starred-boards',
  templateUrl: './starred-boards.component.html',
  styleUrls: ['./starred-boards.component.scss']
})
export class StarredBoardsComponent {
  starredBoards: Board[] = [
    {
      id: '1',
      name: 'Encriptador de texto - Alura Challenges ONE',
      backgroundColor: '#2D3748',
      workspace: 'Personal'
    },
    {
      id: '2',
      name: 'Portafolio Alura',
      backgroundColor: '#1A202C',
      workspace: 'Personal'
    }
  ];

  onStarToggled(event: {boardId: string, starred: boolean}): void {
    // Implement star toggle logic here
    console.log('Star toggled:', event);
  }
}
