import {Directive, ElementRef, HostListener, inject, Renderer2} from '@angular/core';

@Directive({
  selector: '[iconButton]',
})
export class IconButtonDirective {
  zoomScale: number = 1.1
  zoomDuration: string = '300ms'
  zoomEasing: string = 'ease-in-out'

  el = inject(ElementRef)
  renderer = inject(Renderer2)
  constructor(
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'transition',
      `transform ${this.zoomDuration} ${this.zoomEasing}`);
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
  @HostListener('mouseup')
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${this.zoomScale})`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'scale(1)'
    );
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${this.zoomScale * 0.95})`
    );
  }
}
