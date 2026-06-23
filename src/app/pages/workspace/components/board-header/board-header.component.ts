import { Component, Input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.state';
import { BtnBaseComponent } from '../../../../shared/ui/components/btn-base/btn-base.component';
import { StarIconComponent } from '../../../../shared/icons/components/star-icon.component';
import { RocketSvgComponent } from '../../../../shared/icons/components/rocket-svg.component';
import { RaySvgComponent } from '../../../../shared/icons/components/ray-svg.component';
import { FilterSvgComponent } from '../../../../shared/icons/components/filter-svg.component';
import { UserComponent } from '../../../../shared/ui/components/user/user.component';
import { DotsComponent } from '../../../../shared/icons/components/dots.component';

@Component({
    selector: 'app-board-header',
    templateUrl: './board-header.component.html',
    styleUrls: ['./board-header.component.scss'],
    standalone: true,
    imports: [BtnBaseComponent, StarIconComponent, RocketSvgComponent, RaySvgComponent, FilterSvgComponent, UserComponent, DotsComponent]
})
export class BoardHeaderComponent {
  @Input() boardName: string = '';
  user: DataUser = {
    username: 'Max',
    email: 'max@example.com',
    image: '',
  };
}
