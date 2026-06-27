import { Component, input } from '@angular/core';
import { Card } from '../../interfaces/board.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  standalone: true,
})
export class TaskCardComponent {
  readonly card = input.required<Card>();
}
