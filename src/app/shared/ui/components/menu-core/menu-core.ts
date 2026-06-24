import { Component, computed, input, viewChild } from '@angular/core';
import { ConnectedPosition, OverlayModule } from '@angular/cdk/overlay';
import { Menu, MenuContent, MenuTrigger } from '@angular/aria/menu';
import { CardCommonComponent } from '../card-common/card-common.component';

@Component({
  selector: 'app-menu-core',
  imports: [Menu, MenuTrigger, MenuContent, OverlayModule, CardCommonComponent],
  templateUrl: './menu-core.html',
})
export class MenuCore {
  label = input.required<string>();
  direction = input<'left' | 'right'>('left');
  formatMenu = viewChild<Menu<string>>('formatMenu');

  readonly overlayPositions = computed<ConnectedPosition[]>(() => {
    if (this.direction() === 'right') {
      return [
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 4 },
      ];
    }
    return [
      { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
    ];
  });
}
