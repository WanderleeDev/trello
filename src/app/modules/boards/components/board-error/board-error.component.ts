import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicImageComponent } from '../../../../shared/ui/components/basic-image/basic-image.component';

@Component({
  selector: 'app-board-error',
  standalone: true,
  imports: [BasicImageComponent],
  templateUrl: './board-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardErrorComponent {
  img = 'https://trello.com/assets/3aa994dc53c056c6f419.png';
}
