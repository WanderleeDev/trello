import { Component } from '@angular/core';
import { CheckIconComponent } from '../../../../shared/icons/components/check-icon.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  protected readonly bannerOptions = [
    {
      label: 'Preferences',
    },
    {
      label: 'Only necessary',
    },
    {
      label: 'Accept all',
      icon: CheckIconComponent,
    },
  ];
}
