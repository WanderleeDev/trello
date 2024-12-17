import { Component } from '@angular/core';
import { Board } from '../board-card/board-card.component';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent {
  recentBoards: Board[] = [
    {
      id: '1',
      name: 'Front-end',
      backgroundColor: '#4299E1',
      workspace: 'Personal'
    },
    {
      id: '2',
      name: 'Preguntonic',
      backgroundColor: '#48BB78',
      workspace: 'Personal'
    },
    {
      id: '3',
      name: 'Biblioz frontend',
      backgroundColor: '#ED8936',
      workspace: 'Personal'
    },
    {
      id: '4',
      name: 'Encriptador de texto - Alura Challenges ONE',
      backgroundColor: '#2D3748',
      workspace: 'Personal'
    }
  ];

  onStarToggled(event: {boardId: string, starred: boolean}): void {
    // Implement star toggle logic here
    console.log('Star toggled:', event);
  }
}
