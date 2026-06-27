import { Component } from '@angular/core';
import { MatIconComponent } from '../../../../../../shared/presentation/components/mat-icon/mat-icon.component';
import { BtnBaseComponent } from '../../../../../../shared/presentation/components/btn-base/btn-base.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  imports: [BtnBaseComponent, MatIconComponent],
})
export class BannerComponent {
  protected readonly bannerOptions: { label: string; icon?: string; primary?: boolean }[] = [
    {
      label: 'Preferences',
    },
    {
      label: 'Only necessary',
    },
    {
      label: 'Accept all',
      icon: 'check',
      primary: true,
    },
  ];
}
