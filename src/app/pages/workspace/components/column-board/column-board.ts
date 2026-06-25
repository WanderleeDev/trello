import { Component, input, signal } from '@angular/core';
import { AddListButtonComponent } from '../add-list-button/add-list-button.component';
import { BoardCardComponent } from '../board-card/board-card.component';
import { Card } from '../../interfaces/board.model';

@Component({
  selector: 'app-column-board',
  imports: [AddListButtonComponent, BoardCardComponent],
  templateUrl: './column-board.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class ColumnBoard {
  title = input.required<string>();
  data = input<Card[]>([
    {
      id: 'asasasada',
      title: 'testing',
      image:
        'https://trello.com/1/cards/66ca554e817862881ebfa1cc/attachments/66ca554e817862881ebfa446/previews/66ca554e817862881ebfa44e/download/Verifying.png',
      description: 'is a simple description',
    },
    {
      id: 'asasasada5',
      title: 'Chocobo',
      description: 'is a simple description',
    },
  ]);
  protected isEditable = signal(false);

  protected editableToggle() {
    this.isEditable.update(v => !v);
  }

  protected addCard(title: string) {
    console.log(title);
  }
}
