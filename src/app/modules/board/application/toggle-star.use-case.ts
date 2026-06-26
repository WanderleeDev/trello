import { Injectable, inject } from '@angular/core';
import { BoardRepository } from '../domain/board-repository';
import type { Board } from '../domain/board.model';

@Injectable({ providedIn: 'root' })
export class ToggleStarUseCase {
  private readonly boardRepo = inject(BoardRepository);

  execute(boardId: string) {
    if (!boardId?.trim()) {
      throw new Error('Board ID is required');
    }
    return this.boardRepo.toggleStar(boardId);
  }
}
