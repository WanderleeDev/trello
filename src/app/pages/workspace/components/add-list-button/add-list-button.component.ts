import { Component, output } from '@angular/core';

@Component({
    selector: 'app-add-list-button',
    templateUrl: './add-list-button.component.html',
    standalone: true,
    imports: [],
})
export class AddListButtonComponent {
  readonly addList = output<void>();
}
