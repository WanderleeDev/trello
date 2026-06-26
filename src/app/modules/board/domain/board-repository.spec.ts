import { describe, it, expect } from 'vitest';
import { Observable } from 'rxjs';
import { BoardRepository } from './board-repository';
import { Board } from './board.model';

class TestBoardRepository extends BoardRepository {
  getBoards(): Observable<Board[]> {
    throw new Error('Not implemented');
  }

  toggleStar(_boardId: string): Observable<Board> {
    throw new Error('Not implemented');
  }
}

describe('BoardRepository', () => {
  it('should enforce getBoards implementation', () => {
    const repo = new TestBoardRepository();
    expect(repo).toBeInstanceOf(BoardRepository);
    expect(typeof repo.getBoards).toBe('function');
  });

  it('should enforce toggleStar implementation', () => {
    const repo = new TestBoardRepository();
    expect(typeof repo.toggleStar).toBe('function');
  });
});
