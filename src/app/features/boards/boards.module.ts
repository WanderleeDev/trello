import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { IconsModule } from '../../shared/icons/icons.module';
import { BoardListContainerComponent } from './components/board-list-container/board-list-container.component';
import { BtnStarFavoriteComponent } from './components/btn-star-favorite/btn-star-favorite.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
  },
];

@NgModule({
  declarations: [
    BoardsComponent,
    TemplateCardComponent,
    BoardCardComponent,
    BoardListContainerComponent,
    BtnStarFavoriteComponent,
  ],
  imports: [CommonModule, NgOptimizedImage, RouterModule.forChild(routes), IconsModule],
  exports: [BoardsComponent],
})
export default class BoardsModule {}
