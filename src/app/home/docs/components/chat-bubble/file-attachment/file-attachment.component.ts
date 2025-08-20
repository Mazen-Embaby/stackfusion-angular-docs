import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-file-attachment',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './file-attachment.component.html',
  styles: ``,
})
export class FileAttachmentComponent {}
