import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomBtnComponent } from '../../../../../shared/components/custom-btn/custom-btn.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-recovery',
    templateUrl: './form-recovery.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CustomBtnComponent,
        RouterLink,
    ],
})
export class FormRecoveryComponent {
  private readonly _fb = inject(FormBuilder);

  recoveryForm: FormGroup = this._fb.nonNullable.group({
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
    if (this.recoveryForm.invalid) return;

    const { email } = this.recoveryForm.value;
    console.log(email);
  }
}
