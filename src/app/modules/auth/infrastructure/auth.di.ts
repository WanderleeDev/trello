import { InjectionToken } from '@angular/core';
import type { AuthRepository } from '../domain/repositories/auth.repository';

/** Token para que Angular pueda inyectar el adaptador de AuthRepository */
export const AUTH_REPOSITORY = new InjectionToken<AuthRepository>('AUTH_REPOSITORY');
