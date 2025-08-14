import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';
import { Dropdown, DropdownContent, DropdownItem } from '../../../../../../@sf/dropdown';

@Component({
  selector: 'app-outline-voice-note',
  imports: [Dropdown, DropdownContent, DropdownItem, NgpMenuTrigger],
  templateUrl: './outline-voice-note.component.html',
  styles: ``,
})
export class OutlineVoiceNoteComponent {}
