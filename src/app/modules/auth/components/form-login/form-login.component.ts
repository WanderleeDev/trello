import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth.actions';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly store: Store,
  ) {
    this.loginForm = this._fb.nonNullable.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { email } = this.loginForm.getRawValue();
    console.log(email);
    this.store.dispatch(authActions.login({ email }));
  }
}
