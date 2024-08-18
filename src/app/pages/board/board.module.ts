import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UiModule } from '../../shared/ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
  },
];

@NgModule({
  declarations: [BoardComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export default class BoardModule {}
