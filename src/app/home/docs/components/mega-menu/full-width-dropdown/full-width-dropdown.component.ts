import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-full-width-dropdown',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './full-width-dropdown.component.html',
  styles: ``,
})
export class FullWidthDropdownComponent {}
