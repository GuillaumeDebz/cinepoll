import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAccountPageRoutingModule } from './new-account-routing.module';
import { NewAccountPage } from './new-account.page';

// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAccountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    NewAccountPage
  ]
})
export class NewAccountPageModule {}
