import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Card } from '../../../../pages/workspace/interfaces/board.model';

@Component({
    selector: 'app-board-modal-task',
    templateUrl: './board-modal-task.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule],
})
export class BoardModalTaskComponent {
  private readonly dialogRef = inject(DialogRef<Card | null>);
  readonly card = inject<Card | undefined>(DIALOG_DATA);

  title: string;
  description: string;

  constructor() {
    this.title = this.card?.title ?? '';
    this.description = this.card?.description ?? '';
  }

  save() {
    this.dialogRef.close({
      id: this.card?.id ?? '',
      title: this.title,
      description: this.description,
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
