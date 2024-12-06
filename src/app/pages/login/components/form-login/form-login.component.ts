import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../../../store/auth/auth.actions';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly store: Store
  ) {
    this.loginForm = this._fb.nonNullable.group({
<<<<<<< HEAD
      email: ['', [Validators.email]],
=======
      email: ['', [Validators.required, Validators.email]],
>>>>>>> b488a22 (feat board)
    });
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { email } = this.loginForm.value;
    console.log(email);
    this.store.dispatch(authActions.login({ email }));
  }
}
