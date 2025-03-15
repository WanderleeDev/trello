import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntryComponent } from './entry.component';
import { UiModule } from '../../shared/ui/ui.module';
import { IconsModule } from '../../shared/icons/icons.module';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([{ path: '', component: EntryComponent }]),
    IconsModule,
  ],
})
export default class EntryModule {}
