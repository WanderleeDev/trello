import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicImageComponent } from './components/basic-image/basic-image.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DirectivesModule } from '../directives/directives.module';
import { CardCommonComponent } from './components/card-common/card-common.component';
import { LinkBtnComponent } from './components/link-btn/link-btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { NavComponent } from './components/nav/nav.component';
import { NavbarMainOptionsComponent } from './components/nav/components/navbar-main-options/navbar-main-options.component';
import { NavbarSecondOptionsComponent } from './components/nav/components/navbar-second-options/navbar-second-options.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BtnToggleThemeComponent } from './components/btn-toggle-theme/btn-toggle-theme.component';
import { WorkspaceDropdownComponent } from './components/workspace-dropdown/workspace-dropdown.component';
import { DotsDropdownComponent } from './components/dots-dropdown/dots-dropdown.component';
import { UserComponent } from './components/user/user.component';
import { LetDirective } from '@ngrx/component';

@NgModule({
  declarations: [
    BasicImageComponent,
    CustomBtnComponent,
    BtnBaseComponent,
    DropdownComponent,
    CardCommonComponent,
    LinkBtnComponent,
    LinkCardComponent,
    BadgeComponent,
    CardInfoComponent,
    NavComponent,
    NavbarMainOptionsComponent,
    NavbarSecondOptionsComponent,
    UserDropdownComponent,
    SearchBarComponent,
    BtnToggleThemeComponent,
    WorkspaceDropdownComponent,
    DotsDropdownComponent,
    UserComponent,
    UserDropdownComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    DirectivesModule,
    RouterModule,
    IconsModule,
    LetDirective,
  ],
  exports: [
    BasicImageComponent,
    CustomBtnComponent,
    BtnBaseComponent,
    DropdownComponent,
    CardCommonComponent,
    LinkBtnComponent,
    LinkCardComponent,
    BadgeComponent,
    CardInfoComponent,
    NavComponent,
    NavbarMainOptionsComponent,
    NavbarSecondOptionsComponent,
    UserDropdownComponent,
    SearchBarComponent,
    BtnToggleThemeComponent,
    WorkspaceDropdownComponent,
    DotsDropdownComponent,
    UserComponent,
    UserDropdownComponent,
  ],
})
export class UiModule {}
