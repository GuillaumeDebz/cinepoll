import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollPageRoutingModule } from './poll-routing.module';

import { PollPage } from './poll.page';

// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollPageRoutingModule,
    ComponentsModule
    ],
  declarations: [
    PollPage,
  ]
})
export class PollPageModule {}
