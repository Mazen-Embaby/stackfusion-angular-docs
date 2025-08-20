import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent } from '@sf/dropdown';

@Component({
  selector: 'app-full-width-with-cta',
  imports: [Dropdown, DropdownContent, NgpMenuTrigger],
  templateUrl: './full-width-with-cta.component.html',
  styles: ``,
})
export class FullWidthWithCtaComponent {}
