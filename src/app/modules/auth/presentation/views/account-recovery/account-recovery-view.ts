import { Component } from '@angular/core';
import { FormRecoveryComponent } from '../../components/form-recovery/form-recovery.component';
import { FooterFormComponent } from '../../components/footer-form/footer-form.component';

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
  imports: [FormRecoveryComponent, FooterFormComponent],
})
export default class AccountRecoveryComponent {}
