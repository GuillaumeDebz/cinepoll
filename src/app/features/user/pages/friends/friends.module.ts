import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FriendsPageRoutingModule } from './friends-routing.module';
import { FriendsPage } from './friends.page';

// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FriendsPage]
})
export class FriendsPageModule {}
