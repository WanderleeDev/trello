import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {
  loginForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.loginForm = this._fb.nonNullable.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern('')],
      ],
    });
  }
}
