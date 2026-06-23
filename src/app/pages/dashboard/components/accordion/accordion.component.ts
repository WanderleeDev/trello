import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class AccordionComponent {}
