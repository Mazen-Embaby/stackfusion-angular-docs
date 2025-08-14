import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import triangularAngularPackageJson from '../../package.json';
import { Title, Meta } from '@angular/platform-browser';
import { APP_INFO } from './app-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = 'stackfusion-angular-docs';
  readonly appInfo = APP_INFO;

  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle(this.appInfo.SEO.title);
    this.metaService.addTags(this.appInfo.SEO.meta);
  }

  public readonly triangularAngularVersion = computed(() => triangularAngularPackageJson.version);
}
