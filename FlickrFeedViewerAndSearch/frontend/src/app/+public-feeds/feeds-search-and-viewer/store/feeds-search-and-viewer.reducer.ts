import { Action as ReduxAction } from '@ngrx/store';
import {
  Action,
  createReducer,
  Store,
} from 'ngrx-actions/dist';
import {
  FeedsSearchAction,
  FeedsSearchErrorAction,
  FeedsSearchSuccessAction,
} from './feeds-search-and-viewer.actions';
import { FeedsSearchQuery } from '../entities/feeds-search-query';
import { Feed } from '../entities/feed.entity';

export interface FeedsSearchState {
  feedsSearchQuery: FeedsSearchQuery;
  feeds: Array<Feed>;
  hasError: boolean;
  isSearching: boolean;
}

const feedsSearchInitialState: FeedsSearchState = {
  feedsSearchQuery: null,
  feeds: null,
  hasError: false,
  isSearching: false,
};

@Store()
export class FeedsSearchStore {

  @Action(FeedsSearchAction)
  public applicationSearch(state: FeedsSearchState, { feedsSearchQuery }: FeedsSearchAction): FeedsSearchState {
    return {
      ...state,
      feedsSearchQuery,
      feeds: null,
      hasError: false,
      isSearching: true,
    };
  }

  @Action(FeedsSearchSuccessAction)
  public feedsSearchSuccess(state: FeedsSearchState, { feeds }: FeedsSearchSuccessAction): FeedsSearchState {
    return {
      ...state,
      feeds,
      isSearching: false,
    };
  }

  @Action(FeedsSearchErrorAction)
  public feedsSearchOrRefreshError(state: FeedsSearchState): FeedsSearchState {
    return {
      ...state,
      feeds: null,
      hasError: true,
      isSearching: false,
    };
  }
}

export function feedsSearchReducer(state: FeedsSearchState = feedsSearchInitialState, action: ReduxAction): FeedsSearchState {
  return createReducer(new FeedsSearchStore())(state, action);
}
