import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.store';
import { NgOptimizedImage } from '@angular/common';
import { LetterGradientIconComponent } from '../../../icons/components/letter-gradient-icon.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgOptimizedImage, LetterGradientIconComponent],
})
export class UserComponent {
  readonly dataUser = input.required<DataUser>();
  readonly isMinimal = input<boolean>(false);
}
