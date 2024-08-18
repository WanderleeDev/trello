import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicImageComponent } from './components/basic-image/basic-image.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [BasicImageComponent, CustomBtnComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [BasicImageComponent, CustomBtnComponent],
})
export class UiModule {}
