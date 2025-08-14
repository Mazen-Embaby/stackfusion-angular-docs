import { Directive, HostListener, inject } from '@angular/core';
import { NgMenuDirective } from './ng-menu.directive';

@Directive({
  selector: '[ngMenuItem]',
  exportAs: 'ngMenuItem',
})
export class NgMenuItemDirective {
  private menu = inject(NgMenuDirective);

  @HostListener('click')
  @HostListener('keydown.enter')
  @HostListener('keydown.space')
  onClick() {
    console.log('THIS IS A ');
    this.menu.close();
  }
}
