import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-card-common',
    templateUrl: './card-common.component.html',
    styleUrl: './card-common.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgOptimizedImage],
})
export class CardCommonComponent {
  readonly image = input<string>('https://trello.com/assets/cc47d0a8c646581ccd08.svg');
  readonly message = input.required<string>();
}
