import { describe, it, expect } from 'vitest';
import { BoardMockRepository } from './board-mock.repository';
import { Board } from '../domain/board.model';

describe('BoardMockRepository', () => {
  let repository: BoardMockRepository;

  beforeEach(() => {
    repository = new BoardMockRepository();
  });

  describe('getBoards', () => {
    it('should return all boards from starred, recent, and workspace groups', () => {
      const result: Board[] = [];
      repository.getBoards().subscribe({
        next: boards => result.push(...boards),
      });

      // Predefined boards: 3 starred + 3 recent + 3 workspace = 9
      expect(result).toHaveLength(9);
    });

    it('should set starred=true for starred boards and false for others', () => {
      const result: Board[] = [];
      repository.getBoards().subscribe({
        next: boards => result.push(...boards),
      });

      const starredBoards = result.filter(b => b.starred);
      const unstarredBoards = result.filter(b => !b.starred);

      // 3 starred boards from mock data
      expect(starredBoards).toHaveLength(3);
      // 6 non-starred (recent + workspace)
      expect(unstarredBoards).toHaveLength(6);
    });

    it('should return boards with all required fields populated', () => {
      const result: Board[] = [];
      repository.getBoards().subscribe({
        next: boards => result.push(...boards),
      });

      for (const board of result) {
        expect(board.id).toBeTruthy();
        expect(board.name).toBeTruthy();
        expect(board.description).toBeTruthy();
        expect(board.image).toBeTruthy();
        expect(typeof board.starred).toBe('boolean');
      }
    });
  });

  describe('toggleStar', () => {
    it('should flip starred from false to true', () => {
      const result: Board[] = [];
      repository.getBoards().subscribe({
        next: boards => result.push(...boards),
      });

      const firstUnstarred = result.find(b => !b.starred)!;
      const boardId = firstUnstarred.id;

      repository.toggleStar(boardId).subscribe({
        next: updated => {
          expect(updated.id).toBe(boardId);
          expect(updated.starred).toBe(true);
        },
      });
    });

    it('should flip starred from true to false', () => {
      const result: Board[] = [];
      repository.getBoards().subscribe({
        next: boards => result.push(...boards),
      });

      const firstStarred = result.find(b => b.starred)!;
      const boardId = firstStarred.id;

      repository.toggleStar(boardId).subscribe({
        next: updated => {
          expect(updated.id).toBe(boardId);
          expect(updated.starred).toBe(false);
        },
      });
    });

    it('should throw an error for unknown board IDs', () => {
      repository.toggleStar('non-existent-id').subscribe({
        error: err => {
          expect(err).toBeTruthy();
          expect(err.message).toContain('Board not found');
        },
      });
    });
  });
});
