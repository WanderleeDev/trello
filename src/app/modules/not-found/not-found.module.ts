import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../shared/ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, UiModule, RouterModule.forChild(routes)],
})
export default class NotFoundModule {}
