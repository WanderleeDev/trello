import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { IconsModule } from '../../shared/icons/icons.module';
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
  declarations: [
    BoardsComponent,
    TemplateCardComponent,
    BoardCardComponent,
    BoardListContainerComponent,
    BtnStarFavoriteComponent,
    BoardModalTaskComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild(routes),
    IconsModule,
    DialogModule,
  ],
  exports: [BoardsComponent],
})
export default class BoardsModule {}
