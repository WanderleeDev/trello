import { Component, signal } from '@angular/core';
import { recentBoards, starredBoards, workspaceBoards } from './board.mockup';
import { LinkCard } from '../../shared/interfaces/LinkCard.interface';
import { BoardListContainerComponent } from './components/board-list-container/board-list-container.component';
import { StarIconComponent } from '../../shared/icons/components/star-icon.component';
import { RouterLink } from '@angular/router';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BtnStarFavoriteComponent } from './components/btn-star-favorite/btn-star-favorite.component';
import { ClockSvgComponent } from '../../shared/icons/components/clock-svg.component';
import { LetterGradientIconComponent } from '../../shared/icons/components/letter-gradient-icon.component';

@Component({
    selector: 'app-boards',
    templateUrl: './boards.component.html',
    standalone: true,
    imports: [
        BoardListContainerComponent,
        StarIconComponent,
        RouterLink,
        BoardCardComponent,
        BtnStarFavoriteComponent,
        ClockSvgComponent,
        LetterGradientIconComponent,
    ],
})
export class BoardsComponent {
  protected readonly workspaceBoards = signal<LinkCard[]>(workspaceBoards);

  protected readonly recentBoards = signal<LinkCard[]>(recentBoards);

  protected readonly starredBoards = signal<LinkCard[]>(starredBoards);

  onStarToggled(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('Board star toggled:');
    // TODO: Implement star toggle logic with a service
  }
}
