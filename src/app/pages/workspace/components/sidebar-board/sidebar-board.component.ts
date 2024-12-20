import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-board',
  templateUrl: './sidebar-board.component.html',
  styleUrl: './sidebar-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarBoardComponent {}
