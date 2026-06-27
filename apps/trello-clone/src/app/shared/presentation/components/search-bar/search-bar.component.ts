import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LinkCard } from '../../../../shared/interfaces/LinkCard.interface';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';
import { LoaderIconComponent } from '../../../icons/components/loader-icon.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [OutsideClickDirective, LoaderIconComponent],
})
export class SearchBarComponent {
  mockup: LinkCard[] = [];

  isViewResults = signal(false);

  public showResults(e: Event): void {
    e.stopPropagation();
    this.isViewResults.set(true);
  }

  public clickOutside(): void {
    this.isViewResults.set(false);
  }
}
