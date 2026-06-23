import { Component } from '@angular/core';
import { CheckIconComponent } from '../../../../shared/icons/components/check-icon.component';
import { BtnBaseComponent } from '../../../../shared/ui/components/btn-base/btn-base.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    standalone: true,
    imports: [BtnBaseComponent, NgComponentOutlet],
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
