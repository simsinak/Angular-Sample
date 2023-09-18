import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  isOpen = false

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
    const div = this.element.nativeElement.querySelector('.dropdown-menu')
    if (this.isOpen) {
      this.renderer.addClass(div, "show")
    } else {
      this.renderer.removeClass(div, "show")
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
}
