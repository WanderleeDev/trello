import { Component, input } from '@angular/core';

type DesignType = 'basic' | 'ident';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  styleUrl: './link-btn.component.scss',
})
export class LinkBtnComponent {
  readonly href = input.required<string>();
  readonly design = input<DesignType>('basic');
}
