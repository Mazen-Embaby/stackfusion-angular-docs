import { Component } from '@angular/core';
import { NavigationRoute } from './navigation.model';

import { RouterLink } from '@angular/router';
import { ToggleDarkModeComponent } from '../toggle-dark-mode/toggle-dark-mode.component';
import { APP_INFO } from '../../../app-info';
import { Dropdown, DropdownContent } from '@sf/dropdown';
import { NgpMenuTrigger } from 'ng-primitives/menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ToggleDarkModeComponent, Dropdown, DropdownContent, NgpMenuTrigger],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly info = APP_INFO;
  navBarDropdownFlow!: Dropdown;

  navigation: NavigationRoute[] = [
    { name: 'Features', link: `${this.info.url}/#features`, fragment: 'features' },
    { name: 'Template', link: `${this.info.url}/template` },
    { name: 'Changelog', link: `${this.info.url}/changelog` },
  ];
}
