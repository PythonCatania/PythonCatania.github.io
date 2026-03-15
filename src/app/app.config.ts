import { DOCUMENT } from '@angular/common';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './services/transloco-loader.service';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

function normalizeBase(document: Document): string {
  const base = document.querySelector('base')?.getAttribute('href') ?? '/';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

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
      provide: BASE_URL,
      useFactory: normalizeBase,
      deps: [DOCUMENT],
    },
    {
      provide: IMAGE_LOADER,
      useFactory:
        (baseUrl: string) =>
        (config: ImageLoaderConfig): string =>
          baseUrl + config.src,
      deps: [BASE_URL],
    },
  ],
};
