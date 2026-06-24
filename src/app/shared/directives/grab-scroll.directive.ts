import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appGrabScroll]',
  standalone: true,
})
export class GrabScrollDirective {
  readonly appGrabScroll = input<string>('x');

  private isDown = false;
  private startX = 0;
  private startY = 0;
  private scrollLeft = 0;
  private scrollTop = 0;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    const el = this.el.nativeElement;
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
    this.startX = event.pageX - el.offsetLeft;
    this.startY = event.pageY - el.offsetTop;
    this.scrollLeft = el.scrollLeft;
    this.scrollTop = el.scrollTop;
  }

  @HostListener('mouseleave')
  @HostListener('mouseup')
  onMouseUp() {
    if (!this.isDown) return;
    this.isDown = false;
    const el = this.el.nativeElement;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const el = this.el.nativeElement;
    const axis = this.appGrabScroll();

    if (axis === 'x' || axis === 'both') {
      const x = event.pageX - el.offsetLeft;
      const walkX = x - this.startX;
      el.scrollLeft = this.scrollLeft - walkX;
    }
    if (axis === 'y' || axis === 'both') {
      const y = event.pageY - el.offsetTop;
      const walkY = y - this.startY;
      el.scrollTop = this.scrollTop - walkY;
    }
  }
}
