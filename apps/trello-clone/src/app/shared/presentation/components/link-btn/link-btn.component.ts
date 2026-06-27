import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

type DesignType = 'basic' | 'ident';

@Component({
  selector: 'app-link-btn',
  templateUrl: './link-btn.component.html',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
})
export class LinkBtnComponent {
  readonly href = input.required<string>();
  readonly design = input<DesignType>('basic');
}
