import { CdkPortalOutlet } from '@angular/cdk/portal';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portal',
  template: ` <ng-template cdkPortalOutlet></ng-template> `,
})
export class Portal {
  @ViewChild(CdkPortalOutlet, { static: true }) globalOutlet!: CdkPortalOutlet;
}
