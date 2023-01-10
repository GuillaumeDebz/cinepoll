import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollPageRoutingModule } from './poll-routing.module';

import { PollPage } from './poll.page';

// COMPONENTS //
import { NavbarProfilePicComponent } from 'src/app/core/components/navbar-profile-pic/navbar-profile-pic.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollPageRoutingModule
  ],
  declarations: [
    PollPage,
    NavbarProfilePicComponent,
    FooterComponent
  ]
})
export class PollPageModule {}
