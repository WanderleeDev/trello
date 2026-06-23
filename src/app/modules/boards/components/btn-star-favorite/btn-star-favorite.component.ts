import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StarIconComponent } from '../../../../shared/icons/components/star-icon.component';

@Component({
    selector: 'app-btn-star-favorite',
    template: `
    <button class="text-white hover:text-amber-400 block" type="button" title="add favorite">
      <app-star-icon />
    </button>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [StarIconComponent],
})
export class BtnStarFavoriteComponent {}
