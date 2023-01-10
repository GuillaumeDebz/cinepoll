import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollPageRoutingModule } from './poll-routing.module';

import { PollPage } from './poll.page';

// COMPONENT //
import { NavbarProfilePicComponent } from 'src/app/core/components/navbar-profile-pic/navbar-profile-pic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollPageRoutingModule
  ],
  declarations: [
    PollPage,
    NavbarProfilePicComponent
  ]
})
export class PollPageModule {}
