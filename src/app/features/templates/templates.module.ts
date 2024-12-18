import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { TemplateListContainerComponent } from './components/template-list-container/template-list-container.component';
import { IconsModule } from '../../shared/icons/icons.module';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent,
  },
];

@NgModule({
  declarations: [TemplatesComponent, CardInfoComponent, TemplateListContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule,
    NgOptimizedImage,
    IconsModule,
  ],
})
export default class TemplatesModule {}
