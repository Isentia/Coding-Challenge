import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
} from '@ngrx/effects';
import { ofAction } from 'ngrx-actions/dist';
import {
  Observable,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
  catchError,
} from 'rxjs/operators';
import {
  FeedsSearchSuccessAction,
  FeedsSearchErrorAction,
  FeedsSearchAction,
} from './feeds-search-and-viewer.actions';
import { FeedsSearchQuery } from '../entities/feeds-search-query';
import { Feed } from '../entities/feed.entity';
import { PublicFeedsRoutesService } from '../../public-feeds-routes.service';

@Injectable()
export class FeedsSearchEffects {

  @Effect()
  public searchFeeds$: Observable<FeedsSearchSuccessAction | FeedsSearchErrorAction> = this.actions.pipe(
    ofAction(FeedsSearchAction),
    switchMap(({ feedsSearchQuery }) => this.searchFeedsFromServer$(feedsSearchQuery).pipe(
      map(feeds => new FeedsSearchSuccessAction(feeds)),
      catchError(() => of(new FeedsSearchErrorAction())),
    )),
  );


  constructor(
    private actions: Actions,
    private http: HttpClient,
    private publicFeedsRoutesService: PublicFeedsRoutesService,
  ) {
  }

  private searchFeedsFromServer$(feedsSearchQuery: FeedsSearchQuery): Observable<Array<Feed>> {
    const searchUri = this.publicFeedsRoutesService.getFeedsSearchUri(feedsSearchQuery);
    return this.http.get<Array<Feed>>(searchUri);
  }

}
