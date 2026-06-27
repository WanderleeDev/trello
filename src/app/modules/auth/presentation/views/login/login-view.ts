import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { SocialMediaAuthComponent } from '../../components/social-media-auth/social-media-auth.component';
import { RouterLink } from '@angular/router';
import { FooterFormComponent } from '../../components/footer-form/footer-form.component';

@Component({
    selector: 'app-login',
    template: `
    <ng-container>
      <button
        type="button"
        class="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-red-500 text-white text-xl shadow-lg hover:bg-red-600 transition-colors"
        (click)="throwError()"
        title="Probar error toast"
      >
        !
      </button>
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
    standalone: true,
    imports: [
        FormLoginComponent,
        SocialMediaAuthComponent,
        RouterLink,
        FooterFormComponent,
    ],
})
export default class LoginComponent {
  throwError(): void {
    throw new Error('🔥 Error de prueba desde el login');
  }
}
