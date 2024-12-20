import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../shared/ui/ui.module';
import { IconsModule } from '../../shared/icons/icons.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { LetDirective } from '@ngrx/component';

// Components
import { TemplateListContainerComponent } from './components/template-list-container/template-list-container.component';
import { FeatureCategoriesComponent } from './components/feature-categories/feature-categories.component';
import { CardTemplateInfoComponent } from './components/card-template-info/card-template-info.component';

// Views
import { AllTemplatesForCategoryComponent } from './views/all-templates-for-category/all-templates-for-category.component';
import { EntryPageComponent } from './views/entry-page/entry-page.component';
import { SimpleTemplateComponent } from './views/simple-template/simple-template.component';
import { FeatureTemplateComponent } from './views/feature-template/feature-template.component';

const routes: Routes = [
  {
    path: '',
    component: EntryPageComponent,
  },
  {
    path: 'features/:id',
    component: FeatureTemplateComponent,
    pathMatch: 'full',
  },
  {
    path: ':category',
    component: AllTemplatesForCategoryComponent,
  },
  {
    path: ':category/:id',
    component: SimpleTemplateComponent,
  },
];

@NgModule({
  declarations: [
    EntryPageComponent,
    TemplateListContainerComponent,
    FeatureCategoriesComponent,
    CardTemplateInfoComponent,
    AllTemplatesForCategoryComponent,
    SimpleTemplateComponent,
    FeatureTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    IconsModule,
    NgOptimizedImage,
    DirectivesModule,
    PipesModule,
    LetDirective,
  ],
  exports: [RouterModule],
})
export default class TemplatesModule {}
