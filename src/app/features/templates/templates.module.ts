import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent,
  },
];

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export default class TemplatesModule {}
