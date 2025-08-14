import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgDocRootComponent, NgDocSidebarComponent, NgDocSearchComponent } from '@ng-doc/app';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-docs',
  imports: [RouterOutlet, NgDocRootComponent, NgDocSidebarComponent, NgDocSearchComponent, HeaderComponent],
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.scss',
})
export class DocsPage {}
