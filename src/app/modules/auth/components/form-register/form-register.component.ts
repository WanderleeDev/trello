import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.registerForm = this._fb.nonNullable.group({
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
    if (this.registerForm.invalid) return;

    const { email } = this.registerForm.getRawValue();
    console.log(email);
  }
}
