import { Component } from '@angular/core';
import { AddSvgComponent } from '../../../../shared/icons/components/add-svg.component';

@Component({
    selector: 'app-add-list-button',
    templateUrl: './add-list-button.component.html',
    styleUrls: ['./add-list-button.component.scss'],
    standalone: true,
    imports: [AddSvgComponent]
})
export class AddListButtonComponent {}
