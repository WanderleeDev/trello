import { createFeature } from '@ngrx/store';
import { userReducer } from './user.reducers';

const userFeatureKey = 'user';

const userFeature = createFeature({
  name: userFeatureKey,
  reducer: userReducer,
});

export const { selectUserState } = userFeature;
