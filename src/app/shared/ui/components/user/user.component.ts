import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LetterGradientIconComponent } from '../../../icons/components/letter-gradient-icon.component';

export interface DataUser {
  username: string | null;
  email: string | null;
  image: string | null;
}

@Component({
    selector: 'app-user',
         templateUrl: './user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgOptimizedImage, LetterGradientIconComponent],
})
export class UserComponent {
  readonly dataUser = input.required<DataUser>();
  readonly isMinimal = input<boolean>(false);
}
