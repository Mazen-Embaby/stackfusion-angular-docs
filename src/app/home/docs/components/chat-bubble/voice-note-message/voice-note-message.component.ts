import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '@sf/dropdown';

@Component({
  selector: 'app-voice-note-message',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './voice-note-message.component.html',
  styles: ``,
})
export class VoiceNoteMessageComponent {}
