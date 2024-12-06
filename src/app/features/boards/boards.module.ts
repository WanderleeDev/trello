import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
  },
];

@NgModule({
  declarations: [BoardsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export default class BoardsModule {}
