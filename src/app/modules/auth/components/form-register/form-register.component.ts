import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { CustomBtnComponent } from '../../../../shared/ui/components/custom-btn/custom-btn.component';

@Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TermsAndConditionsComponent,
        CustomBtnComponent,
    ],
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
