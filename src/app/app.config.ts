import { DOCUMENT } from '@angular/common';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
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
