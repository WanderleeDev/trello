import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
    selector: 'app-board-modal-task',
    templateUrl: './board-modal-task.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class BoardModalTaskComponent {
  private readonly dialog = inject(Dialog);

  public dialogClose() {
    this.dialog.closeAll();
  }
}
