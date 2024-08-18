import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login-buttons',
  templateUrl: './social-login-buttons.component.html',
  styles: `:host {
    display: contents;
  }`,
})
export class SocialLoginButtonsComponent {
  icons = ['google', 'microsoft', 'apple', 'slack'];
}
