import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'publicFeeds',
    pathMatch: 'full',
  },
  {
    path: 'publicFeeds',
    loadChildren: './+public-feeds/public-feeds.module#PublicFeedsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
