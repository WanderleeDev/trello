import { Component } from '@angular/core';

@Component({
  selector: 'app-account-recovery',
  template: `
    <ng-container>
      <app-form-recovery />
      <app-footer-form>
        <div class="leading-4 flex gap-2 justify-center items-center">
          <a class="text-blue-500 hover:underline" href="#">Login help</a>
          •
          <a class="text-blue-500 hover:underline" href="#">Contact Support</a>
        </div>
      </app-footer-form>
    </ng-container>
  `,
})
export class AccountRecoveryComponent {}
