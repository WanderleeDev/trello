import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  template: `
    <div class="flex flex-col items-center justify-center gap-6 p-4 text-center">
      <div class="relative size-52 sm:size-80">
        <img ngSrc="/assets/images/building.webp" alt="Under construction" fill priority />
      </div>
      <p class="text-2xl font-bold text-foreground">Under Construction</p>
      <p class="text-muted-foreground max-w-md">
        This section is still being built. Check back later!
      </p>
      <a routerLink="/workspace" class="text-blue-500 underline">Go to Workspace</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
})
export default class UnderConstructionComponent {}
