import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllStoresPage } from './all-stores.page';

const routes: Routes = [
  {
    path: '',
    component: AllStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllStoresPageRoutingModule {}
