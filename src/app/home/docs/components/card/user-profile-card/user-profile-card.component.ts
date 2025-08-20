import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-user-profile-card',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './user-profile-card.component.html',
  styles: ``,
})
export class UserProfileCardComponent {}
