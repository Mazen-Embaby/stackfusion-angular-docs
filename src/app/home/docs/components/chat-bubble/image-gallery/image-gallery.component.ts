import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-image-gallery',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './image-gallery.component.html',
  styles: ``,
})
export class ImageGalleryComponent {}
