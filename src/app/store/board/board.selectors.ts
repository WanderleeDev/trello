import { createFeature } from '@ngrx/store';
import { boardReducer } from './board.reducers';

const boardFeatureKey = 'board';

const boardFeature = createFeature({
  name: boardFeatureKey,
  reducer: boardReducer,
});

export const { selectBoardState } = boardFeature;
