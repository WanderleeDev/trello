import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardPremiumTryComponent } from './components/card-premium-try/card-premium-try.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { IconsModule } from '../../shared/icons/icons.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DashboardComponent } from './dashboard.component';
import { UiModule } from '../../shared/ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/boards/boards.module'),
      },
      {
        path: 'templates',
        loadChildren: () => import('../../modules/templates/templates.module'),
      },
      {
        path: 'entry',
        loadChildren: () => import('../../modules/entry/entry.module'),
      },
      {
        path: '**',
        loadChildren: () => import('../../modules/not-found/not-found.module'),
      },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    BannerComponent,
    CardPremiumTryComponent,
    AccordionComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    NgOptimizedImage,
    DirectivesModule,
    UiModule,
  ],
  exports: [RouterModule],
})
export default class DashboardModule {}
