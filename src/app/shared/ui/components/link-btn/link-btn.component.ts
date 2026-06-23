import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

type DesignType = 'basic' | 'ident';

@Component({
    selector: 'app-link-btn',
    templateUrl: './link-btn.component.html',
    styleUrl: './link-btn.component.scss',
    standalone: true,
    imports: [
        RouterLinkActive,
        RouterLink,
        NgClass,
    ],
})
export class LinkBtnComponent {
  readonly href = input.required<string>();
  readonly design = input<DesignType>('basic');
}
