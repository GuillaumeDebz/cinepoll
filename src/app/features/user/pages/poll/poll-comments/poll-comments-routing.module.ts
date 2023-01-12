import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollCommentsPage } from './poll-comments.page';

const routes: Routes = [
  {
    path: '',
    component: PollCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollCommentsPageRoutingModule {}
