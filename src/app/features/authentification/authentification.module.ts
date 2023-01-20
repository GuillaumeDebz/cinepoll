import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthentificationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthentificationPage]
})
export class AuthentificationPageModule {}
