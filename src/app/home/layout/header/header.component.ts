import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationRoute } from './navigation.model';

import { RouterLink } from '@angular/router';
import { ToggleDarkModeComponent } from '../toggle-dark-mode/toggle-dark-mode.component';
import { Dropdown } from 'flowbite';
import { APP_INFO } from '../../../app-info';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ToggleDarkModeComponent],
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navBarBtn', { static: false }) navBarBtn!: ElementRef;
  @ViewChild('navBarDropdown', { static: false }) navBarDropdown!: ElementRef;

  readonly info = APP_INFO;
  navBarDropdownFlow!: Dropdown;

  navigation: NavigationRoute[] = [
    { name: 'Features', link: `${this.info.url}/#features`, fragment: 'features' },
    { name: 'Template', link: `${this.info.url}/template` },
    { name: 'Changelog', link: `${this.info.url}/changelog` },
  ];

  ngAfterViewInit(): void {
    this.navBarDropdownFlow = new Dropdown(this.navBarDropdown.nativeElement, this.navBarBtn.nativeElement);
  }
  hideMenu() {
    this.navBarDropdownFlow.hide();
  }
}
