import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// COMPONENTS //
import { FooterComponent } from './footer/footer.component';
import { NavbarArrowComponent } from './navbar-arrow/navbar-arrow.component';
import { NavbarProfilePicComponent } from './navbar-profile-pic/navbar-profile-pic.component';
import { HidePasswordComponent } from './hide-password/hide-password.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarArrowComponent,
    NavbarProfilePicComponent,
    HidePasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ 
    FooterComponent,
    NavbarArrowComponent,
    NavbarProfilePicComponent,
    HidePasswordComponent
   ]
})
export class ComponentsModule { }
