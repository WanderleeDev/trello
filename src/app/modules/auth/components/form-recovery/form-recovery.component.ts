import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-recovery',
  templateUrl: './form-recovery.component.html',
})
export class FormRecoveryComponent {
  recoveryForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.recoveryForm = this._fb.nonNullable.group({
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
    if (this.recoveryForm.invalid) return;

    const { email } = this.recoveryForm.value;
    console.log(email);
  }
}
