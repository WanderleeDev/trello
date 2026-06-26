import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideThemeStack } from 'ngx-theme-stack';
import { AuthRepository } from './modules/auth/domain/repositories/auth.repository';
import { AuthHttpRepository } from './modules/auth/infrastructure/auth-http.repository';
import { BoardRepository } from './modules/board/domain';
import { BoardMockRepository } from './modules/board/infrastructure';
import { GlobalErrorHandler } from './core/error-handler/global-error-handler';
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
    { provide: AuthRepository, useClass: AuthHttpRepository },
    { provide: BoardRepository, useClass: BoardMockRepository },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
