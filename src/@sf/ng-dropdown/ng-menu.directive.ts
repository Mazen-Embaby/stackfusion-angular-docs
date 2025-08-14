import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngMenu]',

  exportAs: 'ngMenu',
})
export class NgMenuDirective {
  isOpen = false;

  @HostBinding('class.open')
  get openClass() {
    return this.isOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}
