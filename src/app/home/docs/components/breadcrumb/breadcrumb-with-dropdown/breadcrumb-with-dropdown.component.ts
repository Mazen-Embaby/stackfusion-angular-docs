import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-breadcrumb-with-dropdown',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './breadcrumb-with-dropdown.component.html',
  styles: ``,
})
export class BreadcrumbWithDropdownComponent {}
