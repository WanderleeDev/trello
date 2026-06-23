import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';
import { BoardCardComponent } from './components/board-card/board-card.component';

import { BoardListContainerComponent } from './components/board-list-container/board-list-container.component';
import { BtnStarFavoriteComponent } from './components/btn-star-favorite/btn-star-favorite.component';
import { BoardModalTaskComponent } from './components/board-modal-task/board-modal-task.component';
import { DialogModule } from '@angular/cdk/dialog';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
  },
];

@NgModule({
    imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild(routes),
    DialogModule,
    BoardsComponent,
    TemplateCardComponent,
    BoardCardComponent,
    BoardListContainerComponent,
    BtnStarFavoriteComponent,
    BoardModalTaskComponent,
],
    exports: [BoardsComponent],
})
export default class BoardsModule {}
