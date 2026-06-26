import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    // TODO: send to external logging service (Sentry, LogRocket, etc.)
    console.error('[GlobalErrorHandler]', error);
  }
}
