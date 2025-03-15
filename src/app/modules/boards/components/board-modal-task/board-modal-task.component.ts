import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-board-modal-task',
  templateUrl: './board-modal-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardModalTaskComponent {
  constructor(private dialog: Dialog) {}

  public dialogClose() {
    this.dialog.closeAll();
  }
}
