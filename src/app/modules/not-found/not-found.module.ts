import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), NotFoundComponent],
})
export default class NotFoundModule {}
