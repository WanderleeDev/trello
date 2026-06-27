import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BoardRepository } from '../domain/board-repository';
import { Board } from '../domain/board.model';

const MOCK_BOARDS: Board[] = [
  // Starred boards (starred: true)
  {
    id: 'boards/personal-tasks',
    name: 'Personal Tasks',
    description: 'Personal task management board',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: true,
  },
  {
    id: 'boards/project-alpha',
    name: 'Project Alpha',
    description: 'Main project development board',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: true,
  },
  {
    id: 'boards/weekly-planning',
    name: 'Weekly Planning',
    description: 'Weekly team planning and meetings',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: true,
  },
  // Recent boards (starred: false)
  {
    id: 'boards/design-system',
    name: 'Design System',
    description: 'Design system and UI components',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
  {
    id: 'boards/marketing',
    name: 'Marketing Campaign',
    description: 'Q4 Marketing campaign planning',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
  {
    id: 'boards/bugs',
    name: 'Bug Tracking',
    description: 'Bug tracking and issue management',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
  // Workspace boards (starred: false)
  {
    id: 'workspace/team',
    name: 'Team Workspace',
    description: 'Main team workspace',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
  {
    id: 'workspace/development',
    name: 'Development',
    description: 'Development tasks and sprints',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
  {
    id: 'workspace/resources',
    name: 'Resources',
    description: 'Team resources and documentation',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    starred: false,
  },
];

@Injectable()
export class BoardMockRepository extends BoardRepository {
  private boards: Board[] = MOCK_BOARDS.map(b => ({ ...b }));

  getBoards(): Observable<Board[]> {
    return of([...this.boards]);
  }

  toggleStar(boardId: string): Observable<Board> {
    const index = this.boards.findIndex(b => b.id === boardId);
    if (index === -1) {
      return throwError(() => new Error(`Board not found: ${boardId}`));
    }

    this.boards[index] = {
      ...this.boards[index],
      starred: !this.boards[index].starred,
    };

    return of({ ...this.boards[index] });
  }
}
