import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollCommentsPageRoutingModule } from './poll-comments-routing.module';

import { PollCommentsPage } from './poll-comments.page';

// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollCommentsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PollCommentsPage]
})
export class PollCommentsPageModule {}
