import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-outline-image-gallery',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './outline-image-gallery.component.html',
  styles: ``,
})
export class OutlineImageGalleryComponent {}
