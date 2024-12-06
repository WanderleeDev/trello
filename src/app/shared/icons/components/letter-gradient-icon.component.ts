import { Component, input } from '@angular/core';

@Component({
  selector: 'app-letter-gradient-icon',
  template: `<div class="icon-gradient">{{ $letter() }}</div>`,
  styles: `
  .icon-gradient {
    display: grid;
    place-content: center;
    border-radius: 0.3rem;
    width: 1.8rem;
    height: 1.8rem;
    background: linear-gradient(#4bce97, #216e4e);
    text-transform: uppercase;
    font-weight: 600;
    font-size: .95rem;
    color: var(--letter-icon-clr);
  }
`,
})
export class LetterGradientIconComponent {
  $letter = input.required<string, string>({
    transform: (value: string) => value.charAt(0),
  });
}
