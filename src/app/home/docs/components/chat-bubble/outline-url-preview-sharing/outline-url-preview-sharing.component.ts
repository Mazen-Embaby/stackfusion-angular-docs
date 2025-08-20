import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-outline-url-preview-sharing',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './outline-url-preview-sharing.component.html',
  styles: ``,
})
export class OutlineUrlPreviewSharingComponent {}
