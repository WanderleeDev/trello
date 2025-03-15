import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="flex flex-col items-center justify-center gap-6">
      <app-basic-image [src]="img" [alt]="'cover image'" [height]="12" [width]="12" />
      <div class="flex flex-col gap-2 text-center">
        <p>Se ha producido un error en esta página</p>
        <p>Nuestro equipo ha sido notificado.</p>
      </div>
      <button class="text-blue-500 underline" (click)="goBack()">Go Back</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  protected readonly img = 'https://trello.com/assets/3aa994dc53c056c6f419.png';
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
