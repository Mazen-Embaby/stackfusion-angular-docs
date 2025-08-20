import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';
@Component({
  selector: 'app-dropdown-divider',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './dropdown-divider.component.html',
  styles: ``,
})
export class DropdownDividerComponent {}
