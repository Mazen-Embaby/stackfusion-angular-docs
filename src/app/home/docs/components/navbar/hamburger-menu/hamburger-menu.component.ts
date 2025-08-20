import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-hamburger-menu',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './hamburger-menu.component.html',
  styles: ``,
})
export class HamburgerMenuComponent {}
