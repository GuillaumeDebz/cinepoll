import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {path: '',component: UserPage, children: [
    { path: '', redirectTo: 'poll', pathMatch: 'full' },
    { path: 'poll', loadChildren: () => import('./pages/poll/poll.module').then(m => m.PollPageModule) },
    { path: 'friends', loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule) },
    { path: 'history', loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule) },
    { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
