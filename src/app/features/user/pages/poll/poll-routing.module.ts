import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollPage } from './poll.page';

const routes: Routes = [
  { path: '', component: PollPage },
  { path: 'newPoll', loadChildren: () => import('./new-poll/new-poll.module').then( m => m.NewPollPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollPageRoutingModule {}
