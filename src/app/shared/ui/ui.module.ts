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
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    DirectivesModule,
    RouterModule,
    IconsModule,
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
  ],
})
export class UiModule {}
