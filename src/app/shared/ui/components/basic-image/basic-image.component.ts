import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
interface IImageParams {
  src: string;
  alt: string;
  height: number;
  width: number;
  priority?: boolean;
  customClass?: string[]
}

@Component({
  selector: 'app-basic-image',
  templateUrl: './basic-image.component.html',
  styles: `:host {
    display: contents
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageComponent {
  @Input({ required: true }) imageParams?: IImageParams;
}
