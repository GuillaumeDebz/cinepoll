import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPollPageRoutingModule } from './new-poll-routing.module';

import { NewPollPage } from './new-poll.page';

// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewPollPage]
})
export class NewPollPageModule {}
