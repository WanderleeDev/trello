import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card-common',
  templateUrl: './card-common.component.html',
  styleUrl: './card-common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCommonComponent {
  readonly image = input<string>('https://trello.com/assets/cc47d0a8c646581ccd08.svg');
  readonly message = input.required<string>();
}
