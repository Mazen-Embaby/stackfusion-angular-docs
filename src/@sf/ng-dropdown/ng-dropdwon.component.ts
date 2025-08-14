import { Component, HostListener, inject } from '@angular/core';
import { NgMenuDirective } from './ng-menu.directive';

@Component({
  selector: 'sf-dropdown',
  imports: [],
  templateUrl: './ng-dropdwon.component.html',
  styleUrl: './ng-dropdwon.component.scss',
})
export class NgDropdownComponent {
  menu = inject(NgMenuDirective);

  @HostListener('keydown.esc')
  @HostListener('keydown.enter')
  onEscKey() {
    this.menu.close();
  }
}
