import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRegisterPage } from './add-register.page';

const routes: Routes = [
  {
    path: '',
    component: AddRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRegisterPageRoutingModule {}
