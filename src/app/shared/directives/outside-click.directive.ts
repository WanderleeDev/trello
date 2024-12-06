import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  readonly emitter = output();

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.emitter.emit();
    }
  }
}
