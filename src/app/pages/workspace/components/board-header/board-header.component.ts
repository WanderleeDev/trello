import { Component, Input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.store';
import { BtnBaseComponent } from '../../../../shared/ui/components/btn-base/btn-base.component';
import { UserComponent } from '../../../../shared/ui/components/user/user.component';

@Component({
    selector: 'app-board-header',
         templateUrl: './board-header.component.html',
    standalone: true,
     imports: [BtnBaseComponent, UserComponent]
})
export class BoardHeaderComponent {
  @Input() boardName: string = '';
  user: DataUser = {
    username: 'Max',
    email: 'max@example.com',
    image: '',
  };
}
