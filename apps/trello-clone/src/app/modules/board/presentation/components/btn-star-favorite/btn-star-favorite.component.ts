import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-star-favorite',
  template: `
    <button class="text-white hover:text-amber-400 block" type="button" title="add favorite">
      <span class="material-symbols-outlined" style="font-size: 20px">star</span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BtnStarFavoriteComponent {}
