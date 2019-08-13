import { Injectable } from '@angular/core';
import { FeedsSearchQuery } from './feeds-search-and-viewer/entities/feeds-search-query';

@Injectable()
export class PublicFeedsRoutesService {

  private readonly SERVER_URI: string = 'http://localhost';
  private readonly SERVER_PORT: string = '8080';

  public getFeedsSearchUri(feedsSearchQuery: FeedsSearchQuery) {
    return `${ this.SERVER_URI }:${ this.SERVER_PORT }flickrFeedsSearch/${ feedsSearchQuery.tag }`;
  }
}
