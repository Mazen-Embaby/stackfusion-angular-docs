import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-outline-image-attachment',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './outline-image-attachment.component.html',
  styles: ``,
})
export class OutlineImageAttachmentComponent {}
