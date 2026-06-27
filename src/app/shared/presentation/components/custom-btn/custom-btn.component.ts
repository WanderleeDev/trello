import { Component, input } from '@angular/core';
import { CnPipe } from '../../../pipes/cn.pipe';

@Component({
    selector: 'app-custom-btn',
    templateUrl: './custom-btn.component.html',
    styles: '',
    standalone: true,
    imports: [CnPipe],
})
export class CustomBtnComponent {
  readonly customClass = input<string[]>([]);
  readonly type = input.required<'button' | 'menu' | 'submit' | 'reset'>();
  readonly disabled = input<boolean>(false);
}
