import { DOCUMENT } from '@angular/common';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './services/transloco-loader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes, withHashLocation()),
    provideTransloco({
      config: {
        availableLangs: ['it', 'en'],
        defaultLang: 'it',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    {
      provide: IMAGE_LOADER,
      useFactory:
        (document: Document) =>
        (config: ImageLoaderConfig): string => {
          const base = document.querySelector('base')?.getAttribute('href') ?? '/';
          const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base;
          return baseNormalized + config.src;
        },
      deps: [DOCUMENT],
    },
  ],
};
