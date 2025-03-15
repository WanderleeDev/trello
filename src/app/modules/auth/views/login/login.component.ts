import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <ng-container>
      <app-form-login />
      <app-social-media-auth>
        <a routerLink="/auth/account-recovery" class="text-blue-500 hover:underline">
          Can't log in?
        </a>
        •
        <a routerLink="/auth/sign-up" class="text-blue-500 hover:underline"> Create an account </a>
      </app-social-media-auth>
      <app-footer-form>
        <div class="leading-4 flex gap-2 justify-center items-center py-1.5">
          <a class="text-blue-500 hover:underline" href="#">Login help</a>
          •
          <a class="text-blue-500 hover:underline" href="#">Contact Support</a>
        </div>

        <p class="leading-4">
          This site is protected by reCAPTCHA, and its
          <a class="text-blue-500 hover:underline" href="#">privacy policy</a> and
          <a class="text-blue-500 hover:underline" href="#">terms of service</a> of Google.
        </p>
      </app-footer-form>
    </ng-container>
  `,
})
export class LoginComponent {}
