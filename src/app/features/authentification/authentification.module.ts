import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// COMPONENTS //
import { ComponentsModule } from 'src/app/core/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthentificationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AuthentificationPage]
})
export class AuthentificationPageModule {}
