import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { TruncatePipe } from './truncate.pipe';
import { QuantityFormatPipe } from './quantity-format.pipe';
import { SearchAndReplacePipe } from './search-and-replace.pipe';

@NgModule({
  declarations: [CapitalizePipe, TruncatePipe, QuantityFormatPipe, SearchAndReplacePipe],
  imports: [CommonModule],
  exports: [CapitalizePipe, TruncatePipe, QuantityFormatPipe, SearchAndReplacePipe],
})
export class PipesModule {}
