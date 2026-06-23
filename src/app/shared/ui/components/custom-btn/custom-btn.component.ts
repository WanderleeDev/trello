import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-custom-btn',
    templateUrl: './custom-btn.component.html',
    styles: '',
    standalone: true,
    imports: [NgClass],
})
export class CustomBtnComponent {
  @Input() customClass: string[] = [];
  @Input({ required: true }) type: 'button' | 'menu' | 'submit' | 'reset' = 'button';
  @Input({ transform: booleanAttribute }) disabled?: boolean = false;
}
