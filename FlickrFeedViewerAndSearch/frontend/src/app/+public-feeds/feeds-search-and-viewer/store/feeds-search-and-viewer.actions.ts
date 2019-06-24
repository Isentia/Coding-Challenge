import { Action } from '@ngrx/store';
import { FeedsSearchQuery } from '../entities/feeds-search-query';
import { Feed } from '../entities/feed.entity';

const FEEDS_SEARCH = '[feeds-search][fetch]';
const FEEDS_SEARCH_SUCCESS = '[feeds-search][fetch][success]';
const FEEDS_SEARCH_ERROR = '[feeds-search][fetch][error]';

export class FeedsSearchAction implements Action {
  public readonly type = FEEDS_SEARCH;

  constructor(public feedsSearchQuery: FeedsSearchQuery) {
  }
}

export class FeedsSearchSuccessAction implements Action {
  public readonly type = FEEDS_SEARCH_SUCCESS;

  constructor(public feeds: Array<Feed>) {
  }
}

export class FeedsSearchErrorAction implements Action {
  public readonly type = FEEDS_SEARCH_ERROR;
}


