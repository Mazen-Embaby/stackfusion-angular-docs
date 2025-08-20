import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';
@Component({
  selector: 'app-outline-chat-bubble',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './outline-chat-bubble.component.html',
  styles: ``,
})
export class OutlineChatBubbleComponent {}
