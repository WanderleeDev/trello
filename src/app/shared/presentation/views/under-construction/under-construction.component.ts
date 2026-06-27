import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  template: `
    <div class="flex flex-col items-center justify-center gap-6 p-4 text-center">
      <img
        src="/assets/images/building.webp"
        alt="Under construction"
        class="max-w-full h-auto w-80"
      />
      <p class="text-2xl font-bold text-foreground">Under Construction</p>
      <p class="text-muted-foreground max-w-md">
        This section is still being built. Check back later!
      </p>
      <a routerLink="/workspace" class="text-blue-500 underline">Go to Workspace</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export default class UnderConstructionComponent {}
