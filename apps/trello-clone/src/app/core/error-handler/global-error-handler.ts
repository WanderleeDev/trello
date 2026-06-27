import { ErrorHandler, Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('[GlobalErrorHandler]', error);

    const message = error instanceof Error ? error.message : 'Ocurrió un error inesperado';

    toast.error(message, {
      duration: 5000,
      closeButton: true,
    });
  }
}
