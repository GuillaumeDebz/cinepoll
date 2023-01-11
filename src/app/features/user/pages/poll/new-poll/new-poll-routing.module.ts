import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPollPage } from './new-poll.page';

const routes: Routes = [
  {
    path: '',
    component: NewPollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPollPageRoutingModule {}
