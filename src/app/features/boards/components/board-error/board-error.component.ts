import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiModule } from '../../../../shared/ui/ui.module';

@Component({
  selector: 'app-board-error',
  standalone: true,
  imports: [UiModule],
  templateUrl: './board-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardErrorComponent {
  img = 'https://trello.com/assets/3aa994dc53c056c6f419.png';
}
