import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faBell = faBell;
  logos = ['assets/images/trello-static.webp', 'assets/images/trello-ani.webp'];

  constructor(@Inject(DOCUMENT) private document: Document) {
    const d = document.getRootNode();
    d.contains(this.document.body)

    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
}
