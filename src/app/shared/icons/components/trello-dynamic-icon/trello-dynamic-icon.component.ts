import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trello-dynamic-icon',
  template: `<div class="trello-gif"></div>`,
  styleUrl: './trello-dynamic-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrelloDynamicIconComponent {}
