import { Observable } from 'rxjs';
import { Board } from './board.model';

export abstract class BoardRepository {
  abstract getBoards(): Observable<Board[]>;
  abstract toggleStar(boardId: string): Observable<Board>;
}
