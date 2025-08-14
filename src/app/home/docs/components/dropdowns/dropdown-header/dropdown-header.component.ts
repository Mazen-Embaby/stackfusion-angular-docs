import { Component } from '@angular/core';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';
import { NgpMenuTrigger } from 'ng-primitives/menu';

@Component({
  selector: 'app-dropdown-header',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './dropdown-header.component.html',
  styles: ``,
})
export class DropdownHeaderComponent {}
