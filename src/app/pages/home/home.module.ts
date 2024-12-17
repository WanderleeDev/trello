import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../shared/ui/ui.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { BtnToggleThemeComponent } from './components/btn-toggle-theme/btn-toggle-theme.component';
import { CardPremiumTryComponent } from './components/card-premium-try/card-premium-try.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { IconsModule } from '../../shared/icons/icons.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { UserComponent } from './components/user/user.component';
import { DotsDropdownComponent } from './components/dots-dropdown/dots-dropdown.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { WorkspaceDropdownComponent } from './components/workspace-dropdown/workspace-dropdown.component';
import { HomeComponent } from './home.component';
import { LetDirective } from '@ngrx/component';
import { NavbarMainOptionsComponent } from './components/navbar-main-options/navbar-main-options.component';
import { NavbarSecondOptionsComponent } from './components/navbar-second-options/navbar-second-options.component';
import { BoardLinkComponent } from './components/board-link/board-link.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../features/boards/boards.module'),
      },
      {
        path: 'templates',
        loadChildren: () => import('../../features/templates/templates.module'),
      },
      {
        path: 'entry',
        loadChildren: () => import('../../features/entry/entry.module'),
      },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    BannerComponent,
    NavComponent,
    BtnToggleThemeComponent,
    CardPremiumTryComponent,
    AccordionComponent,
    SearchBarComponent,
    UserComponent,
    DotsDropdownComponent,
    UserDropdownComponent,
    WorkspaceDropdownComponent,
    HomeComponent,
    NavbarMainOptionsComponent,
    NavbarSecondOptionsComponent,
    BoardLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    IconsModule,
    NgOptimizedImage,
    DirectivesModule,
    LetDirective,
  ],
  exports: [RouterModule],
})
export default class BoardModule {}
