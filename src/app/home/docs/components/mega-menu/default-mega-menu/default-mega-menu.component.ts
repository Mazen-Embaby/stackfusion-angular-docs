import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-default-mega-menu',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './default-mega-menu.component.html',
  styles: ``,
})
export class DefaultMegaMenuComponent {}
