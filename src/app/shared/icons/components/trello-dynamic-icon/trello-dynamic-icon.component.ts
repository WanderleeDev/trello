import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-trello-dynamic-icon',
    template: `
    <div class="relative w-[4.7rem] h-4 py-2 group"
      style="filter: var(--dynamic-logo-filter)">
      <img
        class="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity"
        src="https://trello.com/assets/d947df93bc055849898e.gif"
        alt="Trello logo"
      />
      <img
        class="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity"
        src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
        alt="Trello logo"
      />
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class TrelloDynamicIconComponent {}
