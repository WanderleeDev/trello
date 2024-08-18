import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styles: '',
})
export class CustomBtnComponent {
  @Input() customClass: string[] = [];
  @Input({ required: true }) type: 'button' | 'menu' | 'submit' | 'reset' =
    'button';
}
