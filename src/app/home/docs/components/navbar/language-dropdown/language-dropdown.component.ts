import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-language-dropdown',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './language-dropdown.component.html',
  styles: ``,
})
export class LanguageDropdownComponent {}
