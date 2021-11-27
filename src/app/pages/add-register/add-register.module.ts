import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRegisterPageRoutingModule } from './add-register-routing.module';

import { AddRegisterPage } from './add-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRegisterPageRoutingModule
  ],
  declarations: [AddRegisterPage]
})
export class AddRegisterPageModule {}
