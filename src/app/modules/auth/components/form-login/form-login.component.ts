import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthStore } from '../../../../store/auth/auth.store';
import { CustomBtnComponent } from '../../../../shared/ui/components/custom-btn/custom-btn.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, CustomBtnComponent],
})
export class FormLoginComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly authStore = inject(AuthStore);

  loginForm: FormGroup = this._fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
  });

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { email } = this.loginForm.getRawValue();
    this.authStore.login({ email });
  }
}
