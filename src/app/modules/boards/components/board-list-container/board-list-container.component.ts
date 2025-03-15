import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-board-list-container',
  template: `
    <section class="mb-8">
      <header class="flex items-center gap-2 mb-4">
        <ng-content select="icon-title" />
        <h2 class="text-lg font-medium">{{ title() }}</h2>
      </header>

      <div class="flex flex-wrap gap-4">
        <ng-content select="list-content" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListContainerComponent {
  title = input.required<string>();
}
