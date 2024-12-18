import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-template-list-container',
  template: `
    <section class="mb-8 px-2">
      <header class="flex items-center justify-between gap-2 mb-4">
        <h2 class="text-lg font-medium flex gap-2">
          <ng-content select="icon-title" />
          {{ title() }}
        </h2>
        <ng-content select="title-right" />
      </header>

      <div class="flex gap-4 flex-wrap">
        <ng-content select="list-content" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateListContainerComponent {
  title = input.required<string>();
}
