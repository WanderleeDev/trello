import { Component, Input } from '@angular/core';
import { DataUser } from '../../../../store/user/user.state';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent {
  @Input() boardName: string = '';
  user: DataUser = {
    username: 'Max',
    email: 'max@example.com',
    image: '',
  };
}
