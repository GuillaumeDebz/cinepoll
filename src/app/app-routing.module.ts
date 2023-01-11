import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'authentification', loadChildren: () => import('./features/authentification/authentification.module').then( m => m.AuthentificationPageModule) },
  { path: 'newAccount', loadChildren: () => import('./features/new-account/new-account.module').then( m => m.NewAccountPageModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then( m => m.UserPageModule) },
  {
    path: 'new-poll',
    loadChildren: () => import('./features/user/pages/poll/new-poll/new-poll.module').then( m => m.NewPollPageModule)
  },
  {
    path: 'add-friend',
    loadChildren: () => import('./features/user/pages/friends/add-friend/add-friend.module').then( m => m.AddFriendPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
