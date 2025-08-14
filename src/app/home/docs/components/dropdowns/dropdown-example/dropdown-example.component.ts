import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-dropdown-example',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './dropdown-example.component.html',
  styles: ``,
})
export class DropdownExampleComponent {}
