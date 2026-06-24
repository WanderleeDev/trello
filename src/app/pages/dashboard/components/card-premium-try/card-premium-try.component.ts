import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefcaseComponent } from '../../../../shared/icons/components/briefcase.component';

@Component({
    selector: 'app-card-premium-try',
    templateUrl: './card-premium-try.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [BriefcaseComponent],
})
export class CardPremiumTryComponent {}
