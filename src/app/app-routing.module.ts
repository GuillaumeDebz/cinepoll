import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './core/guards/token.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'authentification', loadChildren: () => import('./features/authentification/authentification.module').then( m => m.AuthentificationPageModule) },
  { path: 'newAccount', loadChildren: () => import('./features/new-account/new-account.module').then( m => m.NewAccountPageModule) },
  { path: 'user', canActivate: [TokenGuard], loadChildren: () => import('./features/user/user.module').then( m => m.UserPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
