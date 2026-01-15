import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {IMAGE_LOADER, ImageLoaderConfig} from '@angular/common';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        if (environment.production) {
          // Netlify Image CDN
          return `/.netlify/images?url=${config.src}&w=${config.width}`;
        }
        // Local
        return config.src;
      }
    }
  ]
};
