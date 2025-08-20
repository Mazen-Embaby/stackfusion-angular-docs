import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-full-width-with-image',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './full-width-with-image.component.html',
  styles: ``,
})
export class FullWidthWithImageComponent {}
