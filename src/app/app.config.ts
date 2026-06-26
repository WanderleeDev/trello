import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideThemeStack } from 'ngx-theme-stack';
import { AUTH_REPOSITORY } from './modules/auth/infrastructure/auth.di';
import { AuthHttpRepository } from './modules/auth/infrastructure/auth-http.repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(),
    provideClientHydration(),
    provideThemeStack({
      themes: ['system', 'light', 'dark'] as const,
      defaultTheme: 'system',
      storageKey: 'ngx-theme-stack',
      mode: 'class',
      strategy: 'critters',
    }),
    { provide: AUTH_REPOSITORY, useClass: AuthHttpRepository },
  ],
};
