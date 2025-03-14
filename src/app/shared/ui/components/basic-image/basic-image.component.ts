import { Component, ChangeDetectionStrategy, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-basic-image',
  templateUrl: './basic-image.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageComponent {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = 'cover image';
  @Input({ required: true }) height = 1;
  @Input({ required: true }) width = 1;
  @Input({ transform: booleanAttribute }) priority?: boolean;
  @Input() customClass?: string[];
}
