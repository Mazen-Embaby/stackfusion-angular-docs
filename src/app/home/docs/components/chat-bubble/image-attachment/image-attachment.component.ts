import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-image-attachment',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './image-attachment.component.html',
  styles: ``,
})
export class ImageAttachmentComponent {}
