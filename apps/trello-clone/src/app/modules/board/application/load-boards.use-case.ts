import { Injectable, inject } from '@angular/core';
import { BoardRepository } from '../domain/board-repository';
import type { Board } from '../domain/board.model';

@Injectable({ providedIn: 'root' })
export class LoadBoardsUseCase {
  private readonly boardRepo = inject(BoardRepository);

  execute() {
    return this.boardRepo.getBoards();
  }
}
