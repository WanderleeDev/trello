import { Component, input } from '@angular/core';
import { NavComponent } from '../../shared/ui/components/nav/nav.component';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  standalone: true,
  imports: [NavComponent, BoardComponent],
})
export class WorkspaceComponent {
  readonly idBoard = input<string>();
}
