import { Injectable } from '@angular/core';
import {
  Store,
  createSelector,
} from '@ngrx/store';
import { FeedsSearchState } from './store/feeds-search-and-viewer.reducer';
import { FeedsSearchQuery } from './entities/feeds-search-query';
import { FeedsSearchAction } from './store/feeds-search-and-viewer.actions';
import {
  publicFeedsFeatureSelector,
  PublicFeedsModuleState,
} from '../store/public-feeds-module.reducer';
import { Observable } from 'rxjs';
import { Feed } from './entities/feed.entity';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedsSearchAndViewerService {

  private feedsSearchStateSelector = createSelector(publicFeedsFeatureSelector,
    (publicFeedsModuleState: PublicFeedsModuleState) => publicFeedsModuleState.feedsSearch);

  constructor(
    private store: Store<FeedsSearchState>,
  ) {
  }

  public search(feedsSearchQuery: FeedsSearchQuery) {
    this.store.dispatch(new FeedsSearchAction(feedsSearchQuery));
  }

  public getSearchResult$(): Observable<Array<Feed>> {
    return this.store.select(this.feedsSearchStateSelector).pipe(
      map(feedsSearchState => feedsSearchState.feeds),
    );
  }
}
