import { Component } from '@angular/core';
import { CustomBtnComponent } from '../../../../../shared/ui/components/custom-btn/custom-btn.component';
import { BasicImageComponent } from '../../../../../shared/ui/components/basic-image/basic-image.component';

@Component({
    selector: 'app-social-media-auth',
    templateUrl: './social-media-auth.component.html',
    styles: `
    :host {
      display: contents;
    }
  `,
    standalone: true,
    imports: [CustomBtnComponent, BasicImageComponent],
})
export class SocialMediaAuthComponent {
  icons = ['google', 'microsoft', 'apple', 'slack'];
}
