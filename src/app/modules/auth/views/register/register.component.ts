import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <ng-container>
      <app-form-register />
      <app-social-media-auth>
        <a routerLink="/auth/sign-in" class="text-blue-500 hover:underline">
          Already have an Atlassian account? Log in
        </a>
      </app-social-media-auth>
      <app-footer-form>
        <p class="leading-4">
          This site is protected by reCAPTCHA and the Google
          <a class="text-blue-500 hover:underline" href="#">Privacy Policy</a> and
          <a class="text-blue-500 hover:underline" href="#">Terms of Service</a> apply.
        </p>
      </app-footer-form>
    </ng-container>
  `,
})
export class RegisterComponent {}
