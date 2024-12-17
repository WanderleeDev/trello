import { Component, input, output, model } from '@angular/core';

export interface Board {
  id: string;
  name: string;
  backgroundColor?: string;
  backgroundImage?: string;
  workspace: string;
}

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent {
  board = input.required<Board>();
  isStarred = model(false);
  starToggled = output<{boardId: string, starred: boolean}>();

  toggleStar(event: MouseEvent): void {
    event.stopPropagation();
    this.isStarred.update(starred => !starred);
    this.starToggled.emit({ 
      boardId: this.board().id, 
      starred: this.isStarred() 
    });
  }
}
