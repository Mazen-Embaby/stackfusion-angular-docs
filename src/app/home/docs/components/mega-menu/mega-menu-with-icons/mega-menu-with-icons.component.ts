import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-mega-menu-with-icons',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './mega-menu-with-icons.component.html',
  styles: ``,
})
export class MegaMenuWithIconsComponent {}
