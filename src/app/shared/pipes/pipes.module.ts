import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { TruncatePipe } from './truncate.pipe';
import { QuantityFormatPipe } from './quantity-format.pipe';

@NgModule({
  declarations: [CapitalizePipe, TruncatePipe, QuantityFormatPipe],
  imports: [CommonModule],
  exports: [CapitalizePipe, TruncatePipe, QuantityFormatPipe],
})
export class PipesModule {}
