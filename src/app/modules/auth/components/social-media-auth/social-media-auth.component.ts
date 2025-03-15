import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-auth',
  templateUrl: './social-media-auth.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class SocialMediaAuthComponent {
  icons = ['google', 'microsoft', 'apple', 'slack'];
}
