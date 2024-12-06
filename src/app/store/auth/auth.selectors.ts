import { createFeature } from '@ngrx/store';
import { authReducer } from './auth.reducers';

const authFeatureKey = 'auth';

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: authReducer,
});

export const {
  selectAccessToken,
  selectRole,
  selectUsername,
  selectIsAuthenticated,
  selectImage,
  selectAuthState,
} = authFeature;
