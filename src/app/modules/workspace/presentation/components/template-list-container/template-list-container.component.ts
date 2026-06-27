import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-template-list-container',
  template: `
    <section class="my-10 px-2 min-w-0">
      <header class="flex items-center justify-between gap-2 mb-4">
        <h2 class="text-lg font-medium flex gap-2 capitalize">
          <ng-content select="icon-title" />
          {{ title() }}
        </h2>
        <ng-content select="title-right" />
      </header>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <ng-content select="list-content" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TemplateListContainerComponent {
  title = input.required<string>();
}
