import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-mega-menu-navbar',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './mega-menu-navbar.component.html',
  styles: ``,
})
export class MegaMenuNavbarComponent {}
