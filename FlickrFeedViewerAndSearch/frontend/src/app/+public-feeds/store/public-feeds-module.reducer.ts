import {
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';
import {
  FeedsSearchState,
  feedsSearchReducer,
} from '../feeds-search-and-viewer/store/feeds-search-and-viewer.reducer';

export const publicFeedsFeature = 'publicFeeds';

export interface PublicFeedsModuleState {
  feedsSearch: FeedsSearchState;
}

export const publicFeedsModuleReducers: ActionReducerMap<PublicFeedsModuleState> = {
  feedsSearch: feedsSearchReducer,
};

export const publicFeedsFeatureSelector = createFeatureSelector<PublicFeedsModuleState>(publicFeedsFeature);
