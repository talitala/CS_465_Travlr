import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt-interceptor';
import { BROWSER_STORAGE } from './storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    authInterceptProvider,
    {
      provide: BROWSER_STORAGE,
      useValue: localStorage
    },
    provideRouter(routes)
  ]
};


