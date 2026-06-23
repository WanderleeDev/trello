import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-trello-dynamic-icon',
    template: `<div class="trello-gif"></div>`,
    styleUrl: './trello-dynamic-icon.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class TrelloDynamicIconComponent {}
