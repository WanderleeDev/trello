import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
  standalone: true,
})
export class OutsideClickDirective {
  private readonly elementRef = inject(ElementRef);

  readonly emitter = output();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: EventTarget | null): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.emitter.emit();
    }
  }
}
