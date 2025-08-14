import {
  provideNgDocApp,
  provideSearchEngine,
  NgDocDefaultSearchEngine,
  providePageSkeleton,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  provideMainPageProcessor,
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  providePageProcessor,
} from '@ng-doc/app';
import { provideNgDocContext, NG_DOC_ROUTING } from '@ng-doc/generated';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

import { docDemoDisplayerProcessor } from './home/docs/doc-demo-display/doc-demo-displayer-processor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(
      [
        {
          path: '',
          loadChildren: () => import('./home/docs/docs.module').then((m) => m.DocsModule),
        },
      ],
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideNgDocContext(),
    provideNgDocApp({
      shiki: {
        themes: [import('shiki/themes/material-theme.mjs'), import('shiki/themes/material-theme-lighter.mjs')],
        theme: {
          light: 'material-theme-lighter',
          dark: 'material-theme',
        },
      },
    }),
    providePageProcessor(docDemoDisplayerProcessor),

    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ],
};
