import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { FeedsSearchAndViewerComponent } from './feeds-search-and-viewer/feeds-search-and-viewer.component';
import { PublicFeedsModuleComponent } from './public-feeds-module.component';

export enum PublicFeedsRoutes {
  MAIN = 'main',
  SEARCH = 'search',
}

export const routes: Routes = [
  {
    path: PublicFeedsRoutes.MAIN,
    component: PublicFeedsModuleComponent,
    children: [
      {
        path: PublicFeedsRoutes.SEARCH,
        component: FeedsSearchAndViewerComponent,
      },
      {
        path: '',
        redirectTo: PublicFeedsRoutes.SEARCH,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: PublicFeedsRoutes.MAIN,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PublicFeedsRoutingModule {
}
