import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  template: `
    <p class="text-xs leading-4">
      By signing up, I accept the Atlassian
      <a class="text-blue-500 hover:underline" href="#"> Cloud Terms of Service </a>
      and acknowledge the
      <a class="text-blue-500" href="#"> Privacy Policy </a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsAndConditionsComponent {}
