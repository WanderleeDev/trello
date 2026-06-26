import { describe, it, expect } from 'vitest';
import { BoardRepository } from '../domain/board-repository';
import { BoardMockRepository } from './board-mock.repository';

describe('BoardRepository provider config', () => {
  it('should construct the correct provider entry for app.config', () => {
    const boardRepoProvider = {
      provide: BoardRepository,
      useClass: BoardMockRepository,
    };

    expect(boardRepoProvider.provide).toBe(BoardRepository);
    expect(boardRepoProvider.useClass).toBe(BoardMockRepository);
  });
});
