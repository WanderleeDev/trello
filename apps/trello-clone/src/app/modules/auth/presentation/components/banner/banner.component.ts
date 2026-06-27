import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BannerComponent {}
