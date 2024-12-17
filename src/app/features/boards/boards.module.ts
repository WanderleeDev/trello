import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { TemplateCardComponent } from './components/template-card/template-card.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { PopularTemplatesComponent } from './components/popular-templates/popular-templates.component';
import { StarredBoardsComponent } from './components/starred-boards/starred-boards.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent
  }
];

@NgModule({
  declarations: [
    BoardsComponent,
    TemplateCardComponent,
    BoardCardComponent,
    PopularTemplatesComponent,
    StarredBoardsComponent,
    RecentlyViewedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BoardsComponent
  ]
})
export default class BoardsModule { }
