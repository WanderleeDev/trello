import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicImageComponent } from '../../shared/ui/components/basic-image/basic-image.component';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="flex flex-col items-center justify-center gap-6">
      <app-basic-image
        src="https://trello.com/assets/3aa994dc53c056c6f419.png"
        [alt]="'cover image'"
        [height]="12"
        [width]="12"
      />
      <div class="flex flex-col gap-2 text-center">
        <p>Something went wrong on this page</p>
        <p>Our team has been notified.</p>
      </div>
      <a routerLink="/dashboard" class="text-blue-500 underline">Go to Dashboard</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BasicImageComponent, RouterLink],
})
export class NotFoundComponent {}
