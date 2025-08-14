import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';
@Component({
  selector: 'app-navbar-with-dropdown',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './navbar-with-dropdown.component.html',
  styles: ``,
})
export class NavbarWithDropdownComponent {}
